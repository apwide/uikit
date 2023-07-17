<template>
  <div class="kit-markdown-editor" ref="container" :data-readonly="readonly">
    <textarea ref="me" />
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, unref, watch } from 'vue'
import EasyMDE from 'easymde'
import 'easymde/dist/easymde.min.css'

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
  value: string
  readonly?: boolean
  placeholder?: string
  toolbar?: ToolbarItem[]
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
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
  ]
})
const emit = defineEmits<{
  (event: 'input', data: string)
  (event: 'blur', e: Event)
  (event: 'focus', e: Event)
}>()
const me = ref<HTMLDivElement>()
const container = ref<HTMLDivElement>()
const editor = ref<EasyMDE>()

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

  const minHeight = props.readonly ? '2em' : '300px'

  editor.value = new EasyMDE({
    element: me.value,
    minHeight,
    placeholder: props.placeholder,
    status: false,
    spellChecker: false,
    toolbar
  })
  editor.value.value(props.value)

  updateEditor()
})

function onFocus() {
  emit('focus', new FocusEvent('focus'))
}
function onChange() {
  emit('input', editor.value.value())
}
function onBlur() {
  emit('focus', new FocusEvent('blur'))
}

async function updateEditor() {
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
    cm.codemirror.focus()
  } else {
    await nextTick()
    if (!cm.isPreviewActive()) {
      EasyMDE.togglePreview(cm)
    }
  }
  // This must happen after togglePreview
  cm.codemirror.setOption('readOnly', props.readonly)
}

watch(props, () => updateEditor())

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
  color: #333333;
}
.kit-markdown-editor >>> .cm-url {
  color: #0052cc;
}
.kit-markdown-editor >>> .CodeMirror-line {
  color: #172b4d;
}

/** Editor style cancelling when not editing */
.kit-markdown-editor[data-readonly='true'] >>> .CodeMirror {
  border: none !important;
  padding: 10px 0 !important;
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

.kit-markdown-editor[data-readonly='true'] >>> .CodeMirror-scroll {
  display: none;
}
.kit-markdown-editor[data-readonly='true'] >>> .CodeMirror-vscrollbar {
  display: none !important;
}

.kit-markdown-editor[data-readonly='false'] {
  margin-bottom: 10px;
}
</style>