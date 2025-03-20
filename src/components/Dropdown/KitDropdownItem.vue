<template>
  <div class="dropdown-item" v-on="$listeners" @click="$emit('select', value)">
    <span class="dropdown-item-label">
      <slot />
    </span>
  </div>
</template>
<script setup lang="ts">
type Props = {
  value?: string | number | boolean | any
}
defineProps<Props>()
</script>
<style scoped>
.dropdown-item {
  --kit-dropdown-item-bg: rgb(255, 255, 255);
  --kit-dropdown-item-text: rgb(23, 43, 77);
  --kit-dropdown-item-hover-bg: rgb(244, 245, 247);
  --kit-dropdown-item-hover-text: rgb(23, 43, 77);
  --kit-dropdown-item-disabled-text: #5e6c84;
}

.kit-dark .dropdown-item {
  --kit-dropdown-item-bg: #282e33;
  --kit-dropdown-item-text: var(--kit-body-text);
  --kit-dropdown-item-hover-bg: rgba(161, 189, 217, 0.08);
  --kit-dropdown-item-hover-text: var(--kit-body-text);
  --kit-dropdown-item-disabled-text: #BFDBF847;
}

.dropdown-item {
  align-items: center;
  box-sizing: border-box;
  background-color: var(--kit-dropdown-item-bg);
  color: var(--kit-dropdown-item-text);
  text-decoration: none;
  padding: 8px 12px 7px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 33px;
  display: flex;
}

.dropdown-item-label {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.dropdown-item:not([non-link]):not([disabled]):hover {
  cursor: pointer;
  background-color: var(--kit-dropdown-item-hover-bg);
  color: var(--kit-dropdown-item-hover-text);
  fill: var(--kit-dropdown-item-hover-bg);
  text-decoration: none;
}

.dropdown-item[disabled] {
  cursor: not-allowed;
  color: var(--kit-dropdown-item-disabled-text);
}
</style>
