<template>
  <div class="kit-tab-headers">
    <KitDraggable
      :enabled="reorderable"
      :list="reorderableIdsList"
      :draggable-class="reorderableItemsDraggableClass"
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
  /*margin: 0 -8px 0 -8px;*/
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

>>> [draggable='true']::before {
  cursor: grab;
  color: #7a869a;
  font-weight: 900;
  content: '::';
}
</style>
