<template>
  <Popper :target-element="targetElement" :placement="placement" :flip-behavior="['right', 'top-end']">
    <div ref="error-dialog" class="kit-inline-error-message">
      <template v-if="error.fieldErrors">
        <div v-for="(fieldError, i) in error.fieldErrors" :key="i" class="error-message">
          {{ fieldError.message || error.message }}
        </div>
      </template>
      <template v-else-if="error.message">
        {{ error.message }}
      </template>
    </div>
  </Popper>
</template>

<script>
import Popper from '../Popper/Popper'

export default {
  name: 'KitInlineErrorMessage',
  components: { Popper },
  props: {
    error: {
      type: Error,
      required: true
    },
    targetElement: {
      type: HTMLElement,
      required: true
    },
    placement: {
      type: String,
      default: 'right'
    }
  }
}
</script>

<style scoped>
.kit-inline-error-message {
  color: #091e42;
  font-size: 14px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  padding: 4px 10px;
  z-index: 1000;
}
</style>
