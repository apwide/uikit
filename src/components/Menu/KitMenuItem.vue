<template>
  <KitDropdownItem class="kit-menu-item" @click="emit('click', $event)">
    <slot />
  </KitDropdownItem>
</template>
<script setup lang="ts">
import KitDropdownItem from '../Dropdown/KitDropdownItem.vue'
const emit = defineEmits<{
  (event: 'click', data: MouseEvent)
}>()
</script>
<style scoped>
.kit-menu-item {
  --kit-menu-item-text: rgb(66, 82, 110);
}
[data-color-mode="dark"] .kit-menu-item {
  --kit-menu-item-text: var(--kit-body-text);
}
.kit-menu-item {
  color: var(--kit-menu-item-text);
  min-width: 160px;
}
</style>
