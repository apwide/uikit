<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'KitTabContent',
  props: {
    id: {
      type: [String, Number],
      required: true
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
