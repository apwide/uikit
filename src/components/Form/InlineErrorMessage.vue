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

<script setup lang="ts">
import Popper from '../Popper/Popper.vue'
import type GeneralError from '@components/Form/GeneralError'

type Props = {
  error: Error | GeneralError
  targetElement: HTMLElement
  placement?: string
}

withDefaults(defineProps<Props>(), {
  placement: 'right'
})
</script>

<style scoped>
.kit-inline-error-message {
  width: max-content;
  position: absolute;
  top: 0;
  left: 0;
  color: #091e42;
  font-size: 14px;
  box-shadow: var(--kit-overlay-shadow);
  background: rgb(255, 255, 255);
  border-radius: 3px;
  padding: 4px 10px;
  z-index: 1000;
}
</style>
