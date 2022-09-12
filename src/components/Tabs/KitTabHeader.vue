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
  },
  render() {
    if (this.$slots.default?.length) {
      return this.$slots.default[0]
    }
    return null
  }
})
</script>
