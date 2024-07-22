<template>
  <div class="kit-buttons-wrapper">
    <KitIconButton
      class="kit-box-shadow-wrapper kit-buttons-wrapper__ok"
      data-cy="submit-button"
      spacing="compact"
      @blur="onBlur"
      @click="onConfirm"
      title="Submit"
      @focus="onFocus">
      <KitIcon type="check" style="font-size: 10px" />
    </KitIconButton>
    <KitIconButton
      class="kit-box-shadow-wrapper kit-buttons-wrapper__cancel"
      data-cy="cancel-button"
      spacing="compact"
      title="Cancel"
      @blur="onBlur"
      @mousedown="onCancel"
      @focus="onFocus">
      <KitIcon type="times" style="font-size: 10px" />
    </KitIconButton>
  </div>
</template>

<script setup lang="ts">
import KitIconButton from '@components/Button/KitIconButton.vue'
import KitIcon from '@components/Icon/KitIcon.vue'

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
  gap: 4px;
  /* reduce interaction with items below the buttons */
  z-index: 1;
}

.kit-buttons-wrapper button {
  background-color: white;
}
.kit-buttons-wrapper button:hover {
  background-color: #efefef !important;
}

.kit-box-shadow-wrapper {
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(9, 30, 66, 0.25) 0 4px 8px -2px, rgba(9, 30, 66, 0.31) 0 0 1px;
  box-sizing: border-box;
  z-index: 200;
  border-radius: 3px;
}
</style>
