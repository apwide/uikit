<template>
  <InlineEdit v-if="editable" :value="selectedValues" :placement="placement" @save-requested="onSaveRequested">
    <Select
      slot="editor"
      slot-scope="props"
      :value="props.value"
      :multi="true"
      :open-on-focus="true"
      :options="options"
      :is-invalid="props.isInvalid"
      :is-focused="props.isFocused"
      :is-loading="props.isLoading"
      style="flex: 1"
      @input="props.input"
      @blur="props.blur"
      @confirm="props.confirm"
      @focus="props.focus"
      @cancel="props.cancel" />
    <slot>
      <MultiSelectRenderer :selected-values="selectedValues" />
    </slot>
  </InlineEdit>
  <MultiSelectRenderer v-else :selected-values="selectedValues" />
</template>

<script>
import Select from '../Select/Select'
import InlineEdit from '../Form/InlineEdit'
import MultiSelectRenderer from './MultiSelectRenderer'

export default {
  name: 'KitMultiSelectEditableRenderer',
  components: { MultiSelectRenderer, InlineEdit, Select },
  props: {
    selectedValues: {
      type: Array,
      default: () => []
    },
    editable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'right'
    },
    allowedValues: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      options: this.allowedValues
    }
  },
  methods: {
    onSaveRequested(value, callback) {
      try {
        if (Array.isArray(value)) {
          this.$emit('save-requested', value, callback)
        } else {
          callback(new Error('Value should be an array'))
        }
      } catch (error) {
        callback(error)
      }
    }
  }
}
</script>
