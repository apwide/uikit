<template>
  <KitInlineEdit v-if="editable" :value="timestamp" type="date" :placement="placement" @save-requested="onSaveRequested">
    <KitDatePicker
      slot="editor"
      slot-scope="props"
      :value="props.value"
      :is-invalid="props.isInvalid"
      :is-focused="props.isFocused"
      :is-loading="props.isLoading"
      @input="props.input"
      @blur="props.blur"
      @focus="props.focus"
      @confirm="props.confirm"
      @keyup.esc="props.cancel" />
    <DateRenderer :date="timestamp" />
  </KitInlineEdit>
  <DateRenderer v-else :date="timestamp" />
</template>

<script>
import KitDatePicker from '../Calendar/KitDatePicker.vue'
import KitInlineEdit from '../Form/KitInlineEdit.vue'
import DateRenderer from './DateRenderer'

export default {
  name: 'KitDateEditableRenderer',
  components: { DateRenderer, KitInlineEdit, KitDatePicker },
  props: {
    date: {
      type: [Number, String],
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
  computed: {
    timestamp() {
      return this.date && parseInt(this.date, 10)
    }
  },
  methods: {
    onSaveRequested(value, callback) {
      const timestamp = value.toString()
      this.$emit('save-requested', timestamp, callback)
    }
  }
}
</script>
