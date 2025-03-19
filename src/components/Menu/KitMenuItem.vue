<template>
  <DropdownItem class="kit-menu-item" @click="$emit('click', $event)">
    <slot />
  </DropdownItem>
</template>
<script setup lang="ts">
import DropdownItem from '../Dropdown/DropdownItem.vue'
</script>
<style scoped>
.kit-menu-item {
  color: rgb(66, 82, 110);
  min-width: 160px;
}
</style>
