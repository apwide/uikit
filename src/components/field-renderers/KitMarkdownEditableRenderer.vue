<template>
  <div class="kit-markdown-editable-renderer" ref="containerRef" :data-disabled-ok="hasOkDisabled">
    <KitInlineEdit
      v-if="editable"
      :confirm="!allowBlurToSave"
      type="text"
      placement="top"
      :force-is-editing="forceIsEditing"
      :value="value"
      :element-to-position-confirm-buttons-to="markdownEditorRef"
      @start-editing="onStartEditing"
      @stop-editing="onStopEditing"
      @save-requested="onSaveRequested">
      <template #editor="editProps">
        <div class="kit-markdown-editable-renderer__placeholder" ref="placeholderRef">&nbsp;</div>
        <div class="kit-markdown-editable-renderer__editor-container" ref="markdownEditorRef">
          <div class="kit-markdown-editable-renderer__editor">
            <KitMarkdownEditor
              auto-focus
              :placeholder="placeholder"
              :value="editProps.value"
              :size-limit="sizeLimit"
              :toolbar="toolbar"
              :min-height="minHeight"
              @ctrl-enter="onCtrlEnter(editProps.confirm)"
              @input="onInput(editProps.input, $event)"
              @focus="editProps.focus"
              @blur="onBlur(editProps.blur, $event)" />
          </div>
          <div class="kit-markdown-editable-renderer__editor-buttons">
            <KitButtonGroup> </KitButtonGroup>
          </div>
        </div>
      </template>
      <template #default>
        <slot>
          <KitMarkdownEditor :value="value" readonly @click.native="contentClicked" />
        </slot>
      </template>
    </KitInlineEdit>
    <template v-else>
      <slot>
        <KitMarkdownEditor :value="value" readonly />
      </slot>
    </template>
  </div>
</template>

<script setup lang="ts">
import KitMarkdownEditor, { ToolbarItem } from '@components/MarkdownEditor/KitMarkdownEditor.vue'
import KitInlineEdit from '@components/Form/InlineEdit.vue'
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import KitButtonGroup from '@components/Button/KitButtonGroup.vue'
import { convertNumbersToPx, findTableParent, setStyles } from '@/utils/dom'

type Props = {
  value?: string
  placeholder?: string
  toolbar?: ToolbarItem[]
  sizeLimit?: number
  minHeight?: number
  editable?: boolean
  forceIsEditing?: boolean
  allowBlurToSave?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  value: '',
  editable: true,
  forceIsEditing: false,
  allowBlurToSave: false
})

const isEditing = ref(false)
const currentValue = ref(props.value)
const hasOkDisabled = ref(false)
const containerRef = ref<HTMLDivElement>()
const markdownEditorRef = ref<HTMLDivElement>()
const placeholderRef = ref<HTMLDivElement>()

function contentClicked(evt: Event) {
  // link click should not trigger editing
  if (evt.target instanceof HTMLAnchorElement) {
    evt.stopPropagation()
  }
}

const emit = defineEmits<{
  (event: 'save-requested', value: string, callback: (error?: Error) => void)
  (event: 'start-editing')
  (event: 'stop-editing')
}>()
const hasPendingChanges = ref(false)

function onInput(originalOnInput: (data: string) => void, value: string) {
  originalOnInput(value)
  currentValue.value = value
  hasOkDisabled.value = Boolean(props.sizeLimit) && currentValue.value.length > props.sizeLimit
  hasPendingChanges.value = value !== props.value
}

function onBlur(originalOnBlur: (event: FocusEvent) => void, event: FocusEvent) {
  if (props.allowBlurToSave && !(props.sizeLimit && props.sizeLimit < currentValue.value.length)) {
    originalOnBlur(event)
  }
}

function onCtrlEnter(confirm) {
  confirm()
}

function updateTable() {
  const table = findTableParent(containerRef.value)
  if (table) {
    // let's fix the table column widths
    const headerCell = table.querySelectorAll('thead th')
    if (!headerCell || !headerCell.length) {
      return
    }

    headerCell.forEach((cell: HTMLTableCellElement) => {
      const box = cell.getBoundingClientRect()
      if (cell.style.width) {
        cell.dataset.kitpreviouswidth = cell.style.width
      }
      cell.style.width = `${box.width}px`
    })
  }
}

function cleanupTable() {
  const table = findTableParent(containerRef.value)

  if (table) {
    const headerCell = table.querySelectorAll('thead th')
    if (!headerCell || !headerCell.length) {
      return
    }

    headerCell.forEach((cell: HTMLTableCellElement) => {
      if (cell.dataset.kitpreviouswidth) {
        cell.style.width = cell.dataset.kitpreviouswidth
      } else {
        cell.style.width = undefined
      }
    })
  }
}

let observerHeight = 0
const observer = new ResizeObserver((entries) => {
  const height = entries[0].contentRect.height
  if (height !== observerHeight) {
    observerHeight = height
    positionEditor()
  }
})

async function positionEditor() {
  if (!markdownEditorRef.value) {
    await nextTick()
    positionEditor()
  } else {
    document.body.appendChild(markdownEditorRef.value)

    const box = placeholderRef.value.getBoundingClientRect()
    const bodyBox = document.body.getBoundingClientRect()
    const toolbar = markdownEditorRef.value.querySelector('.editor-toolbar') as HTMLDivElement

    let editorContainerStyles: Partial<CSSStyleDeclaration> = {}

    if (toolbar) {
      toolbar.style.backgroundColor = 'white'

      const isInTable = Boolean(findTableParent(containerRef.value))

      const moveUp = toolbar.getBoundingClientRect().height + (isInTable ? 1 : 2)
      const moveLeft = 2

      editorContainerStyles = {
        ...editorContainerStyles,
        ...convertNumbersToPx({
          // transform: `translate(${moveLeft}px, -${moveUp}px)`,
          top: box.top - bodyBox.top - moveUp,
          left: box.left - bodyBox.left - moveLeft,
          width: width + 20
        })
      }

      // text container height
      setStyles(markdownEditorRef.value.querySelector('.CodeMirror-scroll') as HTMLDivElement, {
        minHeight: `${props.minHeight ?? 25}px`
      })

      setStyles(markdownEditorRef.value, editorContainerStyles)
    }
  }
}

function cleanUp() {
  cleanupTable()
  document.body.removeChild(markdownEditorRef.value)
}

let height = 0
let width = 0

watch(isEditing, (editing) => {
  if (editing) {
    setStyles(placeholderRef.value, convertNumbersToPx({ height: height - 4, width }))
    observer.observe(markdownEditorRef.value)
    // We observe just the time the UI stabilizes (toolbar get final dimensions)
    setTimeout(() => {
      observer.disconnect()
    }, 300)
    positionEditor()
  } else {
    observer.disconnect()
  }
})

async function onStartEditing() {
  // This should run ASAP to fix the dimension of the columns
  updateTable()

  const box = containerRef.value.getBoundingClientRect()
  height = box.height
  width = box.width
  await nextTick()
  isEditing.value = true

  emit('start-editing')
}

function onStopEditing() {
  isEditing.value = false

  cleanUp()
  emit('stop-editing')
}

function onSaveRequested(value: string, callback) {
  if (props.sizeLimit && value.trim().length > props.sizeLimit) {
    callback(new Error(`Too many characters, field is limited to ${props.sizeLimit}`))
    return
  }
  hasPendingChanges.value = false
  emit('save-requested', value, callback)
}

onBeforeUnmount(() => {
  if (markdownEditorRef.value) {
    document.body.removeChild(markdownEditorRef.value)
  }
  observer.disconnect()
})
</script>

<style scoped>
.kit-markdown-editable-renderer {
  padding: 10px 0;
}
.kit-markdown-editable-renderer[data-disabled-ok='true'] >>> .kit-buttons-wrapper__ok {
  visibility: hidden;
}
.kit-markdown-editable-renderer__editor-container {
  position: absolute;
  isolation: isolate;
  z-index: 1000;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.kit-markdown-editable-renderer__editor {
  background-color: white;
  box-shadow: rgba(9, 30, 66, 0.25) 0 4px 8px -2px, rgba(9, 30, 66, 0.31) 0 0 1px;
  box-sizing: border-box;
}
</style>
