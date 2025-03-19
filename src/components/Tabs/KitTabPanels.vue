<template>
  <div class="kit-tab-panels" ref="container" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject, ref, watch } from 'vue'

const container = ref<HTMLDivElement>()
const style = ref({ maxHeight: 'inherit' })
const timer = ref(null)

const state = inject('state')

watch(() => state.activeTab, () => {
  clearTimeout(timer.value)
  if (container.value) {
    const height = container.value.getBoundingClientRect().height
    style.value = { maxHeight: `${height}px`, overflow: 'hidden' }
    setTimeout(() => {
      style.value = { maxHeight: 'inherit' }
    }, 500)
  }
})
</script>
