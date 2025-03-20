<template>
  <div class="kit-menu-separator" />
</template>
<script setup lang="ts">
</script>
<style scoped>
.kit-menu-separator {
  --kit-menu-separator-border: #dfe1e6;
}
.kit-dark .kit-menu-separator {
  --kit-menu-separator-border: #738496;
}
.kit-menu-separator {
  height: 1px;
  margin: 0 0 -1px 0;
  border-top: 1px solid var(--kit-menu-separator-border);
}
</style>
