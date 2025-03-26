<template>
  <a class="hyperlink" target="_top" :href="link" v-text="link" />
</template>

<script setup lang="ts">
type Props = {
  link?: string
}
defineProps<Props>()
</script>

<style scoped>
.hyperlink:empty::after {
  content: '\feff';
  visibility: hidden;
}
</style>
