<template>
  <div class="number-long-wrapper" :title="value" v-text="value" />
</template>

<script setup lang="ts">
type Props = {
  value?: number
}

defineProps<Props>()
</script>

<style scoped>
.number-long-wrapper {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.number-long-wrapper:empty::after {
  content: '\feff';
  visibility: hidden;
}
</style>
