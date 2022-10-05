<template>
  <div class="kit-tab-header" :active="active" :disabled="disabled">
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
import KitTabButton from './KitTabButton.vue'

export default Vue.extend({
  name: 'KitTabHeader',
  components: { KitTabButton },
  inject: {
    select: {
      default: () => () => {
        // eslint-disable-next-line no-console
        console.log('TabKitHeader: this component can only be used with KitTabProvider.')
      }
    },
    state: {
      default: () => ({
        activeTab: undefined
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
    disabled: Boolean
  },
  computed: {
    active() {
      return String(this.state.activeTab) === String(this.id)
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
