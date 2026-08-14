<template>
  <div class="string-line-wrapper" :title="value" v-text="value" />
</template>

<script setup lang="ts">

defineOptions({ compatConfig: { COMPONENT_V_MODEL: false } })

type Props = {
  value?: string
}

defineProps<Props>()
</script>

<style scoped>
.string-line-wrapper {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.string-line-wrapper:empty::after {
  content: '\feff';
  visibility: hidden;
}
</style>
