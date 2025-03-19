<template>
  <div class="kit-positioner" :style="{ width: currentWidth, minWidth: currentWidth }">
    <slot />
  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue'

type Props = {
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: '600px'
})

const currentWidth = computed(() => props.width)
</script>

<style scoped>
.kit-positioner {
  display: flex;
  flex-direction: column;
  height: calc(100% - 120px);
  left: 0;
  margin: 0 auto;
  max-width: calc(100% - 120px);
  position: relative;
  right: 0;
  top: 60px;
  z-index: 510;
  opacity: 1;
  border-radius: 3px;
  pointer-events: none;
  transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s, opacity 300ms ease;
}
</style>
