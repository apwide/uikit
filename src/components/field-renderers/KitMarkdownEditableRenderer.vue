<template>
  <div class="kit-markdown-editable-renderer" style="padding: 10px 0" :data-disabled-ok="hasOkDisabled">
    <KitInlineEdit
      v-if="editable"
      :confirm="!allowBlurToSave"
      type="text"
      placement="top"
      :force-is-editing="forceIsEditing"
      :value="value"
      @start-editing="onStartEditing"
      @stop-editing="onStopEditing"
      @save-requested="onSaveRequested">
      <template #editor="editProps">
        <KitMarkdownEditor
          auto-focus
          :placeholder="placeholder"
          :value="editProps.value"
          :size-limit="sizeLimit"
          :toolbar="toolbar"
          :min-height="minHeight"
          @input="onInput(editProps.input, $event)"
          @focus="editProps.focus"
          @blur="onBlur(editProps.blur, $event)" />
      </template>
      <template #default>
        <KitMarkdownEditor :value="value" readonly />
      </template>
    </KitInlineEdit>
    <KitMarkdownEditor v-else :value="value" readonly />
  </div>
</template>

<script setup lang="ts">
import KitMarkdownEditor, { ToolbarItem } from '@components/MarkdownEditor/KitMarkdownEditor.vue'
import KitInlineEdit from '@components/Form/InlineEdit.vue'
import { nextTick, ref } from 'vue'

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
async function onStartEditing() {
  await nextTick()
  isEditing.value = true
  emit('start-editing')
}
function onStopEditing() {
  isEditing.value = false
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
</script>

<style scoped>
.kit-markdown-editable-renderer[data-disabled-ok='true'] >>> .kit-buttons-wrapper__ok {
  visibility: hidden;
}
</style>
