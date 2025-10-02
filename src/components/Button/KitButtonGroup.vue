<template>
  <div class="kit-button-group" :data-spacing="spacing">
    <slot />
  </div>
</template>
<script setup lang="ts">
type Props = {
  spacing?: 'normal' | 'wide' | 'narrow'
}

withDefaults(defineProps<Props>(), {
  spacing: 'normal'
})
</script>
<style scoped>
.kit-button-group {
  display: flex;
  align-content: baseline;
}
.kit-button-group[data-spacing='narrow'] {
  gap: 0;
}
.kit-button-group[data-spacing='narrow'] :deep(button) {
  margin-left: -5px;
  margin-right: -5px;
}
.kit-button-group[data-spacing='normal'] {
  gap: 0.01em;
}
.kit-button-group[data-spacing='wide'] {
  gap: 1em;
}
</style>
