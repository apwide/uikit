<template>
  <div class="kit-markdown-editable-renderer" ref="containerRef" :data-disabled-ok="hasOkDisabled">
    <KitInlineEdit
      v-if="editable"
      :blur-to-save="blurToSave"
      type="text"
      placement="top"
      :force-is-editing="forceIsEditing"
      :value="value"
      keep-readonly-view-on-edit
      :element-to-position-confirm-buttons-to="markdownEditorRef"
      @start-editing="onStartEditing"
      @stop-editing="onStopEditing"
      @save-requested="onSaveRequested">
      <template #editor="editProps">
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
        </div>
      </template>
      <template #default>
        <span ref="placeholderRef" @click="contentClicked">
          <slot>
            <KitMarkdownEditor :value="value" readonly />
          </slot>
        </span>
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
import KitInlineEdit from '@components/Form/KitInlineEdit.vue'
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { convertNumbersToPx, findTableParent, setStyles } from '@/utils/dom'

type Props = {
  value?: string
  placeholder?: string
  toolbar?: ToolbarItem[]
  sizeLimit?: number
  minHeight?: number
  editable?: boolean
  forceIsEditing?: boolean
  blurToSave?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  value: '',
  editable: true
})

const isEditing = ref(false)
const currentValue = ref(props.value)
const hasOkDisabled = ref(false)
const containerRef = ref<HTMLDivElement>()
const markdownEditorRef = ref<HTMLDivElement>()
const placeholderRef = ref<HTMLDivElement>()

function contentClicked(event: Event) {
  // link click should not trigger editing
  const target = event.target as HTMLElement

  if (target.tagName.toUpperCase() === 'A') {
    event.stopPropagation()
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
  if (props.blurToSave && !(props.sizeLimit && props.sizeLimit < currentValue.value.length)) {
    originalOnBlur(event)
  }
}

function onCtrlEnter(confirm) {
  confirm()
}

const previousWidthDataKey = 'kitPreviousWidth'
const openMarkdownCountDataKey = 'kitOpenMarkdownCount'

function updateTable() {
  const table = findTableParent(containerRef.value)
  if (table) {
    const count = Number(table.dataset[openMarkdownCountDataKey] || 0)
    if (count === 0) {
      // let's fix the table column widths
      const headerCell = table.querySelectorAll('thead th')
      if (!headerCell || !headerCell.length) {
        return
      }

      headerCell.forEach((cell: HTMLTableCellElement) => {
        const box = cell.getBoundingClientRect()
        if (cell.style.width) {
          cell.dataset[previousWidthDataKey] = cell.style.width
        }
        cell.style.width = `${box.width}px`
      })
    }
    table.dataset[openMarkdownCountDataKey] = String(count + 1)
  }
}

function cleanupTable() {
  const table = findTableParent(containerRef.value)

  if (table) {
    const count = Number(table.dataset[openMarkdownCountDataKey] || 1)

    if (count <= 1) {
      const headerCell = table.querySelectorAll('thead th')
      if (!headerCell || !headerCell.length) {
        return
      }

      headerCell.forEach((cell: HTMLTableCellElement) => {
        if (cell.dataset[previousWidthDataKey]) {
          cell.style.width = cell.dataset[previousWidthDataKey]
          delete cell.dataset[previousWidthDataKey]
        } else {
          cell.style.width = undefined
        }
      })
    }
    if (count === 1) {
      delete table.dataset[openMarkdownCountDataKey]
    } else {
      table.dataset[openMarkdownCountDataKey] = String(count - 1)
    }
  }
}

let observerHeight = 0
const resizeObserver = new ResizeObserver((entries) => {
  const height = entries[0].contentRect.height
  if (height !== observerHeight) {
    observerHeight = height
    positionEditor()
  }
})

const triggerIsVisible = ref(true)
const intersectionObserver = new IntersectionObserver(
  (entries) => {
    triggerIsVisible.value = entries[0].isIntersecting
  },
  {
    root: null,
    threshold: [0, 1],
    rootMargin: `0px`
  }
)

async function positionEditor() {
  if (!markdownEditorRef.value) {
    await nextTick()
    positionEditor()
  } else {
    if (markdownEditorRef.value.parentElement !== document.body) {
      document.body.appendChild(markdownEditorRef.value)
    }

    if (!triggerIsVisible.value) {
      setStyles(markdownEditorRef.value, { display: 'none' })
    }

    const box = placeholderRef.value.getBoundingClientRect()
    const bodyBox = document.body.getBoundingClientRect()
    const toolbar = markdownEditorRef.value.querySelector('.editor-toolbar') as HTMLDivElement

    let editorContainerStyles: Partial<CSSStyleDeclaration> = {
      display: 'block'
    }

    if (toolbar) {
      toolbar.style.backgroundColor = 'white'

      const isInTable = Boolean(findTableParent(containerRef.value))

      let moveUp = toolbar.getBoundingClientRect().height

      if (isInTable) {
        moveUp += 8
      } else {
        moveUp += 10
      }
      if (props.value.trim().length === 0) {
        moveUp += 10
      }

      const moveLeft = 10

      editorContainerStyles = {
        ...editorContainerStyles,
        ...convertNumbersToPx({
          top: box.top - bodyBox.top - moveUp,
          left: box.left - bodyBox.left - moveLeft,
          width
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
  markdownEditorRef.value?.remove()
}

let width = 0

let debounce = null
function debouncePositionEditor() {
  clearTimeout(debounce)
  debounce = setTimeout(positionEditor, 100)
}

watch(isEditing, (editing) => {
  if (editing) {
    resizeObserver.observe(markdownEditorRef.value)
    intersectionObserver.observe(placeholderRef.value)
    // We observe just the time the UI stabilizes (toolbar get final dimensions)
    setTimeout(() => {
      resizeObserver.disconnect()
    }, 300)
    positionEditor()

    window.addEventListener('wheel', debouncePositionEditor)
  } else {
    resizeObserver.disconnect()
    intersectionObserver.disconnect()
    window.removeEventListener('wheel', debouncePositionEditor)
  }
})

watch(
  () => props.forceIsEditing,
  async (forceIsEditing) => {
    if (forceIsEditing) {
      setTimeout(() => {
        onStartEditing()
        isEditing.value = true
      }, 100)
    }
  },
  { immediate: true }
)

async function onStartEditing() {
  // This should run ASAP to fix the dimension of the columns
  updateTable()

  const box = containerRef.value.getBoundingClientRect()
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
    markdownEditorRef.value.remove()
  }
  resizeObserver.disconnect()
})
</script>

<style scoped>
.kit-markdown-editable-renderer {
  position: relative;
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
  min-width: 200px;
}
.kit-markdown-editable-renderer__editor {
  background-color: white;
  box-shadow: rgba(9, 30, 66, 0.25) 0 4px 8px -2px, rgba(9, 30, 66, 0.31) 0 0 1px;
  box-sizing: border-box;
}
</style>
