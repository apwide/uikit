<template>
  <div class="kit-tab-headers">
    <KitDraggable
      :enabled="reorderable"
      :list="reorderableIdsList"
      handleSelector=".kit-drag-handle"
      draggable-class="kit-is-reorderable"
      @reorder="$emit('reorder', $event)">
      <nav>
        <slot />
      </nav>
    </KitDraggable>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import KitDraggable from '../common/KitDraggable'

export default Vue.extend({
  name: 'KitTabHeaders',
  components: { KitDraggable },
  provide() {
    const state = this.state
    Object.defineProperty(state, 'reorderable', {
      enumerable: true,
      get: () => {
        return this.reorderable
      }
    })

    return {
      state,
    }
  },
  inject: {
    select: {
      default: () => () => {
        // eslint-disable-next-line no-console
        console.error('TabKitHeaders: this component can only be used with KitTabProvider.')
      }
    },
    state: {
      from: 'state',
      default: () => ({
        activeTab: undefined
      })
    }
  },
  props: {
    reorderable: {
      type: Boolean,
      default: false
    },
    reorderableIdsList: {
      type: Array
    },
    reorderableItemsDraggableClass: {
      type: String
    }
  }
})
</script>

<style scoped>
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
  background-color: rgb(235, 236, 240);
  height: 2px;
}
</style>
