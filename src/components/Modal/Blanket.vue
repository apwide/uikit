<template>
  <div class="kit-blanket" :style="{ zIndex }">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  zIndex?: number
}>(), {
  zIndex: 1000
})
</script>

<style scoped>
.kit-blanket {
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  position: fixed;
  background: rgba(9, 30, 66, 0.54);
  transition: opacity 220ms ease 0s;
}
</style>
