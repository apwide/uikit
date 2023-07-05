<template>
  <div class="kit-markdown-editable-renderer" style="padding: 10px 0">
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
          :placeholder="placeholder"
          :value="editProps.value"
          :toolbar="toolbar"
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
  editable?: boolean
  forceIsEditing?: boolean
  allowBlurToSave?: boolean
  placeholder?: string
  toolbar?: ToolbarItem[]
}
const props = withDefaults(defineProps<Props>(), {
  value: '',
  editable: true,
  forceIsEditing: false,
  allowBlurToSave: false
})
const isEditing = ref(false)

const emit = defineEmits<{
  (event: 'save-requested', value: string, callback: (error?: Error) => void)
  (event: 'start-editing')
  (event: 'stop-editing')
}>()
const hasPendingChanges = ref(false)
function onInput(originalOnInput: (data: string) => void, value: string) {
  originalOnInput(value)
  hasPendingChanges.value = value !== props.value
}
function onBlur(originalOnBlur: (event: FocusEvent) => void, event: FocusEvent) {
  if (props.allowBlurToSave) {
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
function onSaveRequested(...args) {
  hasPendingChanges.value = false
  emit('save-requested', ...args)
}
</script>

<style scoped></style>
