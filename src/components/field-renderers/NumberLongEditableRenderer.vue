<template>
  <KitInlineEdit
    v-if="editable"
    :value="value"
    type="number"
    step="1"
    :placement="placement"
    @save-requested="onSaveRequested">
    <slot>
      <NumberLongRenderer :value="value" />
    </slot>
  </KitInlineEdit>
  <NumberLongRenderer v-else :value="value" />
</template>

<script>
import KitInlineEdit from '../Form/KitInlineEdit.vue'
import NumberLongRenderer from './NumberLongRenderer'

export default {
  name: 'KitNumberLongEditableRenderer',
  components: { NumberLongRenderer, KitInlineEdit },
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
