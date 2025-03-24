<template>
  <div class="kit-tab-header" :class="{ 'kit-is-reorderable': isReorderable }" :active="active" :disabled="disabled">
    <template v-if="isReorderable">
      <KitIcon class="kit-drag-handle" type="grip-vertical" />
    </template>
    <span v-if="custom" class="kit-tab-header__custom">
      <slot />
    </span>
    <KitTabButton v-else :id="id" class="kit-tab-header__button" :disabled="disabled" @click="onClick">
      <slot />
    </KitTabButton>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import KitIcon from '../Icon/KitIcon.vue'
import KitTabButton from './KitTabButton.vue'

type Props = {
  id: string | number
  /**
   * By default, KitTabButton is wrapping the content.
   * Set `custom` to true to avoid that behavior.
   * Note that the content should contain a `KitTabButton` to activate a tab.
   */
  custom?: boolean
  disabled?: boolean
  reorderable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  custom: false,
  reorderable: false
})

const select: () => void = inject('select', () => () => {
  // eslint-disable-next-line no-console
  console.error('TabKitButton: this component can only be used with KitTabProvider.')
})
const state = inject('state', () => ({
  activeTab: undefined
}))

const active = computed(() => String(state.activeTab) === String(props.id))
const isReorderable = computed(() => {
  if (!state) {
    return false
  }
  return (state.reorderable && props.reorderable) || false
})

function onClick() {
  select(props.id)
}
</script>

<style scoped>
.kit-tab-header {
  --kit-tab-header-active-border-color: rgb(0, 82, 204);
  --kit-tab-header-text-hover-color: #0052cc;
  --kit-tab-header-drag-icon-color: #a5adba;
}

[data-color-mode="dark"] .kit-tab-header {
  --kit-tab-header-active-border-color: #579dff;
  --kit-tab-header-text-hover-color: #579dff;
}

.kit-tab-header {
  padding: 0 5px;
  position: relative;
  white-space: normal;
  display: flex;
  align-items: center;
}

.kit-drag-handle {
  cursor: grab;
  color: var(--kit-tab-header-drag-icon-color);
  font-size: 0.68em;
}

:not([disabled]):hover {
  color: var(--kit-tab-header-text-hover-color);
}

[active]:after {
  content: '';
  border-radius: 2px;
  bottom: 0;
  margin: 0;
  position: absolute;
  width: inherit;
  left: 5px;
  right: 5px;
  border-bottom: 2px solid var(--kit-tab-header-active-border-color);
  height: 0;
}
</style>
