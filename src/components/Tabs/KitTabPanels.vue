<template>
  <div class="kit-tab-panels" ref="container" :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'KitTabPanels',
  inject: {
    state: {
      default: () => ({
        activeTab: undefined
      })
    }
  },
  data() {
    return {
      style: { maxHeight: 'inherit' },
      timer: null
    }
  },
  watch: {
    'state.activeTab'() {
      clearTimeout(this.timer)
      if (this.$refs.container) {
        const height = this.$refs.container.getBoundingClientRect().height
        this.style = { maxHeight: `${height}px`, overflow: 'hidden' }
        setTimeout(() => {
          this.style = { maxHeight: 'inherit' }
        }, 500)
      }
    }
  }
})
</script>
