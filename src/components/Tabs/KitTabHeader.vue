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

<script lang="ts">
import Vue from 'vue'
import KitIcon from '../Icon/KitIcon.vue'
import KitTabButton from './KitTabButton.vue'

export default Vue.extend({
  name: 'KitTabHeader',
  components: { KitIcon, KitTabButton },
  inject: {
    select: {
      default: () => () => {
        // eslint-disable-next-line no-console
        console.log('TabKitHeader: this component can only be used with KitTabProvider.')
      }
    },
    state: {
      default: () => ({
        activeTab: undefined,
        reorderable: undefined
      })
    }
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    /**
     * By default, KitTabButton is wrapping the content.
     * Set `custom` to true to avoid that behavior.
     * Note that the content should contain a `KitTabButton` to activate a tab.
     */
    custom: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    reorderable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    active() {
      return String(this.state.activeTab) === String(this.id)
    },
    isReorderable() {
      if (!this.state) {
        return false
      }
      return (this.state.reorderable && this.reorderable) || false
    }
  },
  methods: {
    onClick() {
      this.select(this.id)
    }
  }
})
</script>

<style scoped>
.kit-tab-header {
  padding: 0 5px;
  position: relative;
  white-space: normal;
  display: flex;
  align-items: center;
}

.kit-drag-handle {
  cursor: grab;
  color: #a5adba;
  font-size: 0.68em;
}

:not([disabled]):hover {
  color: #0052cc;
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
  border-bottom: 2px solid rgb(0, 82, 204);
  height: 0;
}
</style>
