<template>
  <div class="kit-markdown-editor" ref="container" :data-readonly="readonly" :data-has-status-bar="hasStatusBar">
    <textarea ref="me" />
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, unref, watch, watchEffect } from 'vue'
import * as DOMPurify from 'dompurify'
import EasyMDE from 'easymde'
import 'easymde/dist/easymde.min.css'
import { hasHeadings } from '@components/MarkdownEditor/utils'

export type ToolbarItem =
  | 'heading'
  | 'bold'
  | 'italic'
  | 'unordered-list'
  | 'ordered-list'
  | 'link'
  | 'preview'
  | 'code'
  | 'image'
  | '|'

type Props = {
  value?: string
  readonly?: boolean
  placeholder?: string
  toolbar?: ToolbarItem[]
  sizeLimit?: number
  minHeight?: number
  dontSanitize?: boolean
  autoFocus?: boolean
  blurOnControlEnter?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  autoFocus: false,
  readonly: false,
  placeholder: '',
  toolbar: () => [
    'heading',
    'bold',
    'italic',
    'code',
    '|',
    'unordered-list',
    'ordered-list',
    '|',
    'link',
    'image',
    '|',
    'preview'
  ],
  minHeight: 300,
  dontSanitize: false
})

const emit = defineEmits<{
  (event: 'input', data: string)
  (event: 'blur', e: Event)
  (event: 'focus', e: Event)
  (event: 'ctrl-enter')
}>()

const me = ref<HTMLDivElement>()
const container = ref<HTMLDivElement>()
const editor = ref<EasyMDE>()
const hasStatusBar = ref(false)

function handleClickOutside(event) {
  if (props.readonly) {
    return
  }
  const { target } = event
  if (!container.value) {
    return
  }
  if (container.value.contains(target)) {
    return
  }
  emit('blur', new FocusEvent('blur'))
}

function buildCharacterCounter(limit: number, propsToolbar?: ToolbarItem[]) {
  function onUpdate(el: HTMLElement) {
    const value = editor.value.value()
    const count = value.length
    const spans: Node[] = []

    if (propsToolbar?.length && !propsToolbar.includes('heading')) {
      const issues: string[] = []

      if (!propsToolbar.includes('heading') && hasHeadings(value)) {
        issues.push('headings')
      }

      if (issues.length) {
        const span = document.createElement('span')
        span.classList.add('kit-markdown-editor__error')
        span.innerText = `Some markdown (${issues.join(', ')}) might lead to unexpected layouts`
        spans.push(span)
      }
    }

    if (limit) {
      const span = document.createElement('span')
      span.innerText = `${count}/${limit}`
      if (count > limit) {
        span.classList.add('kit-markdown-editor__error')
      }
      spans.push(span)
    }
    if (spans.length) {
      el.replaceChildren(...spans)
    }
  }

  return {
    className: 'kit-markdown-editor__status',
    onUpdate
  }
}

onMounted(() => {
  let toolbar = null
  if (!props.readonly) {
    toolbar = props.toolbar.map((item) => {
      if (item === 'heading') {
        return {
          name: 'others',
          className: 'fa fa-header',
          title: 'Headings',
          children: ['heading-1', 'heading-2', 'heading-3']
        }
      }
      return item
    })
  }

  const status: any[] = [buildCharacterCounter(props.sizeLimit, props.toolbar)]

  hasStatusBar.value = status.length > 0
  const minHeight = props.readonly ? '1em' : `${props.minHeight}px`

  editor.value = new EasyMDE({
    element: me.value,
    minHeight,
    placeholder: props.placeholder,
    status,
    spellChecker: false,
    toolbar,
    renderingConfig: {
      singleLineBreaks: true,
      codeSyntaxHighlighting: true,
      sanitizerFunction: (renderedHTML) => {
        if (props.dontSanitize) {
          return renderedHTML
        }
        return DOMPurify.sanitize(renderedHTML)
      }
    }
  })
  editor.value.value(props.value)

  updateEditor(true)
})

function onFocus() {
  emit('focus', new FocusEvent('focus'))
}
function onChange() {
  emit('input', editor.value.value().trim())
}
function onBlur() {
  emit('focus', new FocusEvent('blur'))
}
function onKeyUp(a, event: KeyboardEvent) {
  if (event.ctrlKey && event.code === 'Enter') {
    emit('ctrl-enter')
    onBlur()
  }
}

async function updateEditor(firstTime = false) {
  const cm = unref(editor)
  if (!cm || !cm.codemirror) {
    return
  }

  cm.codemirror.off('change', onChange)
  cm.codemirror.off('focus', onFocus)
  cm.codemirror.off('blur', onBlur)
  document.removeEventListener('click', handleClickOutside, { capture: true })

  if (!props.readonly) {
    document.addEventListener('click', handleClickOutside, { capture: true })
    cm.codemirror.on('change', onChange)
    cm.codemirror.on('focus', onFocus)
    cm.codemirror.on('blur', onBlur)
    cm.codemirror.on('keyup', onKeyUp)
    if (props.autoFocus && firstTime) {
      setTimeout(() => {
        cm.codemirror.focus()
        cm.codemirror.setCursor(cm.codemirror.lineCount(), 0)
      }, 250)
    }
  } else {
    await nextTick()
    if (!cm.isPreviewActive()) {
      EasyMDE.togglePreview(cm)
    }
  }
  // This must happen after togglePreview
  cm.codemirror.setOption('readOnly', props.readonly)
}

watch(
  () => props.value,
  () => {
    if (editor.value?.value().trim() !== props.value.trim()) {
      editor.value.value(props.value)
    }
  }
)

watchEffect(() => updateEditor())

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside, { capture: true })

  if (editor.value) {
    editor.value.cleanup()
    editor.value.toTextArea()
    editor.value = null
  }
})
</script>

<style scoped>
.kit-markdown-editor {
  --kit-md-link-text: #333333;
  --kit-md-url-text: #0052cc;
  --kit-md-line-text: #172b4d; /* ? */

  --kit-md-status-bar-border: #ced4da;
  --kit-md-error-bg: #edc8be;
  --kit-md-error-text: #8b0000;

}
[data-color-mode="dark"] .kit-markdown-editor {
  --kit-md-tool-bg: #A1BDD914;
  --kit-md-toolbar-bg: #282e33;
  --kit-md-tool-hover-bg: #A6C5E229;
  --kit-md-tool-border: transparent;
  --kit-md-border: #738496;
  --kit-md-tool-active-bg: #1C2B41;
  --kit-md-tool-active-text: #579DFF;
  --kit-md-tool-click-bg:  rgba(179, 212, 255, 0.6);
}
.kit-markdown-editor {
  width: 100%;
}
/** PREVIEW */
.kit-markdown-editor >>> .editor-preview h1,
.kit-markdown-editor >>> .editor-preview h2,
.kit-markdown-editor >>> .editor-preview h3 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.kit-markdown-editor >>> .editor-preview p,
.kit-markdown-editor >>> .editor-preview ul,
.kit-markdown-editor >>> .editor-preview ol {
  margin-bottom: 15px;
}

/** EDIT */
.kit-markdown-editor >>> .cm-header-1 {
  margin-top: 0;
  font-size: 22px;
}
.kit-markdown-editor >>> .cm-header-2 {
  margin-top: 0;
  font-size: 18px;
}
.kit-markdown-editor >>> .cm-header-3 {
  margin-top: 0;
  font-size: 16px;
}
.kit-markdown-editor >>> .cm-link {
  color: var(--kit-md-link-text);
}
.kit-markdown-editor >>> .cm-url {
  color: var(--kit-md-url-text);
}
.kit-markdown-editor >>> .CodeMirror-line {
  color: var(--kit-md-line-text);
}
.kit-markdown-editor[data-has-status-bar='true'] >>> .CodeMirror {
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 5px;
}

.kit-markdown-editor[data-has-status-bar='true'] >>> .editor-statusbar {
  border: 1px solid var(--kit-md-status-bar-border);
  border-top: none;
  padding: 2px 2px;
}

/** Editor style cancelling when not editing */
.kit-markdown-editor[data-readonly='true'] >>> .CodeMirror {
  border: none !important;
  padding: 0 !important;
  background: none;
}
.kit-markdown-editor[data-readonly='true'] >>> .editor-preview {
  position: inherit;
  background-color: transparent;
  padding: 0;
}
.kit-markdown-editor[data-readonly='true'] >>> .editor-preview p {
  margin: 0;
}
.kit-markdown-editor[data-readonly='true'] >>> .editor-preview p ~ p {
  margin-top: 10px;
}
.kit-markdown-editor[data-readonly='true'] >>> .editor-preview ul {
  padding-left: 15px;
}
.kit-markdown-editor[data-readonly='true'] >>> .editor-statusbar,
.kit-markdown-editor[data-readonly='true'] >>> .CodeMirror-scroll {
  display: none;
}
.kit-markdown-editor[data-readonly='true'] >>> .CodeMirror-vscrollbar {
  display: none !important;
}

.kit-markdown-editor[data-readonly='false'] {
  margin-bottom: 10px;
}

.kit-markdown-editor >>> .kit-markdown-editor__status {
  text-align: left;
  display: flex;
  gap: 5px;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 0;
}

.kit-markdown-editor >>> .kit-markdown-editor__status > span {
  padding-left: 5px;
  padding-right: 5px;
  min-width: auto;
  margin: 0;
}

.kit-markdown-editor >>> .kit-markdown-editor__error {
  border-radius: 3px;
  background-color: var(--kit-md-error-bg);
  color: var(--kit-md-error-text);
}

[data-color-mode="dark"] .kit-markdown-editor >>> .easymde-dropdown {
  background: linear-gradient(to bottom right, var(--kit-md-toolbar-bg) 0%, var(--kit-md-toolbar-bg) 84%, var(--kit-body-text) 50%, var(--kit-body-text) 100%);
  border: 1px solid var(--kit-md-toolbar-bg);
  border-radius: 3px;
}

[data-color-mode="dark"] .kit-markdown-editor >>> .easymde-dropdown:hover {
  background: linear-gradient(to bottom right, var(--kit-md-tool-hover-bg) 0%, var(--kit-md-tool-hover-bg) 84%, var(--kit-body-text) 50%, var(--kit-body-text) 100%);
}

[data-color-mode="dark"] .kit-markdown-editor >>> button {
  border-color: var(--kit-md-tool-border);
}

[data-color-mode="dark"] .kit-markdown-editor >>> button:hover {
  background: var(--kit-md-tool-hover-bg);
}

[data-color-mode="dark"] .kit-markdown-editor >>> button:active {
  background: var(--kit-md-tool-click-bg);
}

[data-color-mode="dark"] .kit-markdown-editor >>> button.active:active {
  background: var(--kit-md-tool-click-bg);
}

[data-color-mode="dark"] .kit-markdown-editor >>> button.active {
  background: var(--kit-md-tool-active-bg);
  color: var(--kit-md-tool-active-text);
}

[data-color-mode="dark"] .kit-markdown-editor >>> button {
  color: var(--kit-body-text);
}
[data-color-mode="dark"] .kit-markdown-editor >>> .editor-toolbar,
[data-color-mode="dark"] .kit-markdown-editor >>> .editor-statusbar {
  background-color: var(--kit-md-toolbar-bg);
}

[data-color-mode="dark"] .kit-markdown-editor >>> .editor-toolbar {
  border-top: 1px solid var(--kit-md-border);
  border-left: 1px solid var(--kit-md-border);
  border-right: 1px solid var(--kit-md-border);
}

[data-color-mode="dark"] .kit-markdown-editor >>> .CodeMirror {
  border-top: 1px solid var(--kit-md-border);
  border-left: 1px solid var(--kit-md-border);
  border-right: 1px solid var(--kit-md-border);
}

[data-color-mode="dark"] .kit-markdown-editor >>> .editor-statusbar {
  border: 1px solid var(--kit-md-border);
}

[data-color-mode="dark"] .kit-markdown-editor >>> .editor-toolbar i.separator {
  border-left: 1px solid var(--kit-md-border);
  border-right: 1px solid transparent;
}

[data-color-mode="dark"] .kit-markdown-editor >>> .editor-toolbar .easymde-dropdown-content {
  background-color: var(--kit-md-toolbar-bg);

}

</style>
