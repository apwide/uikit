<template>
  <div class="number-float-wrapper" :title="value" v-text="value" />
</template>

<script setup lang="ts">

type Props = {
  value?: number
}

defineProps<Props>()
</script>

<style scoped>
.number-float-wrapper {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.number-float-wrapper:empty::after {
  content: '\feff';
  visibility: hidden;
}
</style>
