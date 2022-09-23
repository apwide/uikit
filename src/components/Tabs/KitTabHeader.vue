<template>
  <div class="kit-tab-header">
    <slot />
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'KitTabHeader',
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    stretch: {
      type: Boolean,
      default: false
    },
    inactive: {
      type: Boolean,
      default: false
    }
  }
})
</script>
