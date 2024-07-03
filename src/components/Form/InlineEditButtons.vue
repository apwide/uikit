<template>
  <div class="kit-buttons-wrapper">
    <KitIconButton
      class="kit-box-shadow-wrapper kit-buttons-wrapper__ok"
      data-cy="submit-button"
      spacing="none"
      @blur="onBlur"
      @click="onConfirm"
      title="Submit"
      @focus="onFocus">
      <EditorDoneIcon size="small" />
    </KitIconButton>
    <KitIconButton
      class="kit-box-shadow-wrapper kit-buttons-wrapper__cancel"
      data-cy="cancel-button"
      spacing="none"
      title="Cancel"
      @blur="onBlur"
      @mousedown="onCancel"
      @focus="onFocus">
      <EditorCloseIcon size="small" />
    </KitIconButton>
  </div>
</template>

<script setup lang="ts">
import KitIconButton from '@components/Button/KitIconButton.vue'
import EditorDoneIcon from '../Icon/aui/EditorDoneIcon'
import EditorCloseIcon from '../Icon/aui/EditorCloseIcon'

const emit = defineEmits<{
  (event: 'confirm')
  (event: 'cancel')
  (event: 'focus', e: FocusEvent)
  (event: 'blur', e: FocusEvent)
}>()

function onConfirm() {
  emit('confirm')
}
/* cancel on mousedown to be triggered before blur of input component */
function onCancel() {
  emit('cancel')
}
function onFocus(event) {
  emit('focus', event)
}
function onBlur(event) {
  emit('blur', event)
}
</script>

<style scoped>
.kit-buttons-wrapper {
  display: flex;
  /* reduce interaction with items below the buttons */
  z-index: 1;
}

.kit-box-shadow-wrapper {
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(9, 30, 66, 0.25) 0 4px 8px -2px, rgba(9, 30, 66, 0.31) 0 0 1px;
  box-sizing: border-box;
  z-index: 200;
  border-radius: 3px;
}

.kit-box-shadow-wrapper:last-child {
  margin-left: 4px;
}
</style>
