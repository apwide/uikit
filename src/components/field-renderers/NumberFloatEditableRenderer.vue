<template>
  <InlineEdit v-if="editable" :value="value" type="number" :placement="placement" @save-requested="onSaveRequested">
    <slot>
      <NumberFloatRenderer :value="value" />
    </slot>
  </InlineEdit>
  <NumberFloatRenderer v-else :value="value" />
</template>

<script>
import InlineEdit from '../Form/InlineEdit'
import NumberFloatRenderer from './NumberFloatRenderer'

export default {
  name: 'KitNumberFloatEditableRenderer',
  components: { NumberFloatRenderer, InlineEdit },
  props: {
    value: {
      type: Number,
      default: undefined
    },
    editable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'right'
    }
  },
  methods: {
    onSaveRequested(...args) {
      this.$emit('save-requested', ...args)
    }
  }
}
</script>
