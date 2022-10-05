<template>
  <div>
    <slot />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'KitTabProvider',
  provide() {
    const state = {}
    Object.defineProperty(state, 'activeTab', {
      enumerable: true,
      get: () => {
        return this.value
      }
    })

    return {
      state,
      select: this.onSelectTab
    }
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    onSelectTab(value) {
      this.$emit('input', value)
    }
  }
})
</script>
