<template>
  <KitInlineEdit v-if="editable" :value="value" type="number" :placement="placement" @save-requested="onSaveRequested">
    <slot>
      <NumberFloatRenderer :value="value" />
    </slot>
  </KitInlineEdit>
  <NumberFloatRenderer v-else :value="value" />
</template>

<script>
import KitInlineEdit from '../Form/KitInlineEdit.vue'
import NumberFloatRenderer from './NumberFloatRenderer'

export default {
  name: 'KitNumberFloatEditableRenderer',
  components: { NumberFloatRenderer, KitInlineEdit },
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
