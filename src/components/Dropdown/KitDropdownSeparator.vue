<template>
  <div class="kit-dropdown-separator" />
</template>
<script setup lang="ts">
</script>
<style scoped>
.kit-dropdown-separator {
  --kit-dropdown-separator-border: #dfe1e6;
}

.kit-dark .kit-dropdown-separator {
  --kit-dropdown-separator-border: #738496;
}

.kit-dropdown-separator {
  height: 1px;
  margin: 0 0 -1px 0;
  border-top: 1px solid var(--kit-dropdown-separator-border);
}
</style>
