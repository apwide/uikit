<template>
  <InlineEdit v-if="editable" :value="link" :placement="placement" @save-requested="onSaveRequested">
    <slot>
      <HyperlinkRenderer :link="link" />
    </slot>
  </InlineEdit>
  <HyperlinkRenderer v-else :link="link" />
</template>

<script>
import InlineEdit from '../Form/InlineEdit'
import HyperlinkRenderer from './HyperlinkRenderer'

export default {
  name: 'KitHyperlinkEditableRenderer',
  components: { HyperlinkRenderer, InlineEdit },
  props: {
    link: {
      type: String,
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
