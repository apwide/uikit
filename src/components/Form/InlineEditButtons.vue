<template>
  <div class="kit-buttons-wrapper">
    <Button
      class="kit-box-shadow-wrapper"
      data-cy="submit-button"
      spacing="none"
      @blur="onBlur"
      @click="onConfirm"
      @focus="onFocus">
      <EditorDoneIcon slot="icon-before" size="small" />
    </Button>
    <Button
      class="kit-box-shadow-wrapper"
      data-cy="cancel-button"
      spacing="none"
      @blur="onBlur"
      @mousedown="onCancel"
      @focus="onFocus">
      <EditorCloseIcon slot="icon-before" size="small" />
    </Button>
  </div>
</template>

<script>
import EditorDoneIcon from '../Icon/EditorDoneIcon'
import EditorCloseIcon from '../Icon/EditorCloseIcon'
import Button from '../Button/Button'

export default {
  name: 'KitInlineEditButtons',
  components: {
    EditorDoneIcon,
    Button,
    EditorCloseIcon
  },
  methods: {
    onConfirm() {
      this.$emit('confirm')
    },
    /* cancel on mousedown to be triggered before blur of input component */
    onCancel() {
      this.$emit('cancel')
    },
    onFocus(event) {
      this.$emit('focus', event)
    },
    onBlur(event) {
      this.$emit('blur', event)
    }
  }
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
