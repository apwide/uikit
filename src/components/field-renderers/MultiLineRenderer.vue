<template>
  <div class="multi-line-wrapper" :title="value" v-text="value" />
</template>

<script setup lang="ts">

type Props = {
  value?: string
}

defineProps<Props>()
</script>

<style scoped>
.multi-line-wrapper {
  text-overflow: ellipsis;
  overflow: hidden;
}

.multi-line-wrapper:empty::after {
  content: '\feff';
  visibility: hidden;
}
</style>
