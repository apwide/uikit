<template>
  <div
    class="dropdown-item"
    role="menuitem"
    tabindex="-1"
    :aria-disabled="disabled || undefined"
    :data-selected="selected"
    :data-disabled="disabled"
    @click="emit('select', value)"
    @keydown.enter.space.self.prevent="activate">
    <span class="dropdown-item-label">
      <slot />
    </span>
  </div>
</template>
<script setup lang="ts">
type Props = {
  value?: string | number | boolean | unknown
  selected?: boolean
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  selected: false,
  disabled: false
})
const emit = defineEmits<{
  (event: 'select', data: MouseEvent)
}>()

// Enter / Space on the item (not on a field inside it): same as a mouse click, on the item's link when it wraps one
function activate(e: KeyboardEvent) {
  const item = e.currentTarget as HTMLElement
  ;(item.querySelector<HTMLElement>('a[href]') ?? item).click()
}
</script>
<style scoped>
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

.dropdown-item:not([non-link]):not([data-disabled="true"]):hover {
  cursor: pointer;
  background-color: var(--kit-dropdown-item-hover-bg);
  color: var(--kit-dropdown-item-hover-text);
  fill: var(--kit-dropdown-item-hover-bg);
  text-decoration: none;
}

.dropdown-item:focus-visible {
  /* inside the menu's scroll container, an outer outline would be clipped */
  outline-offset: -2px;
}

.dropdown-item[data-disabled="true"] {
  cursor: not-allowed;
  color: var(--kit-dropdown-item-disabled-text);
}

.dropdown-item[data-selected="true"]:not([data-disabled="true"]) {
  background-color: var(--kit-dropdown-item-selected-bg);
  color: var(--kit-dropdown-item-selected-text);
}

.dropdown-item[data-selected="true"]:not([data-disabled="true"]):hover {
  background-color: var(--kit-dropdown-item-selected-hover-bg);
  color: var(--kit-dropdown-item-selected-hover-text);
}

</style>
