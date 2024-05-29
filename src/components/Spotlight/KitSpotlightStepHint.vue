<template>
  <div class="kit-spotlight-step-hint">
    <p class="kit-spotlight-step-hint__title">{{ title }}</p>
    <slot name="default" />
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string
}

defineProps<Props>()
</script>

<style scoped>
.kit-spotlight-step-hint {
  margin-bottom: 10px;
}
.kit-spotlight-step-hint__title {
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.008em;
  font-weight: 500;
  margin-bottom: 10px;
}
</style>
