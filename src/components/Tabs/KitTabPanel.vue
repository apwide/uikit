<template>
  <div v-if="visible">
    <slot />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'KitTabPanel',
  inject: {
    state: {
      default: () => ({
        activeTab: undefined
      })
    }
  },
  props: {
    id: [String, Number]
  },
  computed: {
    visible() {
      return String(this.state.activeTab) === String(this.id)
    }
  }
})
</script>
