<template>
  <div class="string-line-wrapper" :title="value" v-text="value" />
</template>

<script>
export default {
  name: 'KitStringLineRenderer',
  props: {
    value: {
      type: String,
      default: undefined
    }
  }
}
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
