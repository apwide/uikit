<template>
  <div class="kit-tab-headers">
    <KitDraggable
      :enabled="reorderable"
      :list="reorderableIdsList"
      handleSelector=".kit-drag-handle"
      draggable-class="kit-is-reorderable"
      @reorder="emit('reorder', $event)">
      <nav>
        <slot />
      </nav>
    </KitDraggable>
  </div>
</template>

<script setup lang="ts">
import Vue, { inject, provide } from 'vue'
import KitDraggable from '../common/KitDraggable'

type Props = {
  reorderable?: boolean
  reorderableIdsList?: Arrays
  reorderableItemsDraggableClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  reorderable: false
})

const emit = defineEmits<{
  (event: 'reorder', data: any)
}>()

const state = inject('state')
Object.defineProperty(state, 'reorderable', {
  enumerable: true,
  get: () => {
    return props.reorderable
  }
})
provide('state', state)

</script>

<style scoped>
.kit-tab-headers {
  --kit-tab-headers-border-color: rgb(235, 236, 240);
}

.kit-dark .kit-tab-headers {
  --kit-tab-headers-border-color: #A6C5E229;
}

.kit-tab-headers {
  position: relative;
  width: 100%;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-weight: 500;
}

nav::before {
  content: '';
  border-radius: 2px;
  bottom: 0;
  margin: 0;
  position: absolute;
  width: inherit;
  left: 0;
  right: 0;
  background-color: var(--kit-tab-headers-border-color);
  height: 2px;
}
</style>
