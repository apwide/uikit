<template>
  <KitDropdownItem class="kit-menu-item" @click="$emit('click', $event)">
    <slot />
  </KitDropdownItem>
</template>
<script setup lang="ts">
import KitDropdownItem from '../Dropdown/KitDropdownItem.vue'
</script>
<style scoped>
.kit-menu-item {
  color: rgb(66, 82, 110);
  min-width: 160px;
}
</style>
