<template>
  <div class="kit-radio-group">
    <KitRadio
      v-for="v in availableValues"
      :key="v.key"
      :checked="currentKey === v.key"
      :name="name"
      :value="v"
      @input="currentKey = $event" />
  </div>
</template>
<script>
import Vue from 'vue'
import KitRadio from './KitRadio.vue'

export default Vue.extend({
  components: { KitRadio },
  props: {
    value: {
      type: [String, Object],
      default: ''
    },
    values: {
      type: Array,
      default: () => []
    },
    normalizer: {
      type: Function,
      default: (str) => ({ key: str, label: str, value: str })
    }
  },
  computed: {
    name() {
      return `kit-d-${Date.now()}`
    },
    availableValues() {
      return this.values.map((v) => this.normalizer(v))
    },
    currentKey: {
      get() {
        return this.normalizer(this.value).key
      },
      set(newValue) {
        this.$emit('input', newValue.value)
      }
    }
  }
})
</script>
<style scoped>
.kit-radio-group {
  display: flex;
  flex-direction: column;
}
</style>
