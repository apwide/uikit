<template>
  <div class="kit-dropdown-group">
    <div class="kit-dg__header" @mouseover="hover = true" @mouseleave="hover = false">
      <div class="kit-dg__title-slot" v-if="slots.title">
        <slot name="title" />
      </div>
      <div class="kit-dg__title" v-else-if="label">
        {{ label }}
      </div>
      <div v-if="slots.actions" class="kit-dg__actions">
        <slot name="actions" :hover="hover" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots } from 'vue'

type Props = {
  label?: string
}

const slots = useSlots()
const hover = ref(false)

defineProps<Props>()
</script>

<style scoped>
.kit-dropdown-group {
  --kit-dropdown-group-title: rgb(107, 119, 140);;
}

[data-color-mode="dark"] .kit-dropdown-group {
  --kit-dropdown-group-title: var(--kit-body-text);
}

.kit-dropdown-group .kit-dg__title {
  align-items: center;
  color: var(--kit-dropdown-group-title);
  padding: 8px 12px;
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
}
.kit-dropdown-group .kit-dg__header {
  display: flex;
  align-items: center;
  min-height: 33px;
}
</style>
