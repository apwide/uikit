<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'

type Props = {
  value: string | number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (event: 'input', data: string | number)
}>()

function onSelectTab(value) {
  emit('input', value)
}

const state = {}
Object.defineProperty(state, 'activeTab', {
  enumerable: true,
  get: () => {
    return props.value
  }
})

provide('select', onSelectTab)
provide('state', state)
</script>
