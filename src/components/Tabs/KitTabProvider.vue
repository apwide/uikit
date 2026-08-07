<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'

const modelValue = defineModel<string | number>({ required: true })

function onSelectTab(value) {
  modelValue.value = value
}

const state = {}
Object.defineProperty(state, 'activeTab', {
  enumerable: true,
  get: () => {
    return modelValue.value
  }
})

provide('select', onSelectTab)
provide('state', state)
</script>
