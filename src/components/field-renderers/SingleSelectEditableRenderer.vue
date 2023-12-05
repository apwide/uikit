<template>
  <InlineEdit
    v-if="editable"
    :value="value"
    :confirm="confirm"
    :icon="icon"
    :placement="placement"
    :force-is-editing="forceIsEditing"
    :hide-confirm-buttons="!confirm"
    @start-editing="$emit('start-editing')"
    @stop-editing="$emit('stop-editing')"
    @save-requested="onSaveRequested">
    <Select
      slot="editor"
      slot-scope="props"
      :value="props.value"
      :options="allowedValues"
      :open-on-focus="true"
      :is-invalid="props.isInvalid"
      :is-focused="props.isFocused"
      :is-loading="props.isLoading"
      :placeholder="placeholder"
      :noOptionsMessage="noOptionsMessage"
      :append-to-body="appendToBody"
      :normalizer="normalizer"
      :is-clearable="isClearable"
      :filter-predicate="filterPredicate"
      style="flex: 1"
      :fixed-select-width="fixedSelectWidth"
      :confirm="confirm"
      @input="
        props.input($event)
        $emit('input', $event)
      "
      @search-change="$emit('search-change', $event)"
      @blur="
        props.blur($event)
        $emit('blur', $event)
      "
      @confirm="props.confirm"
      @focus="props.focus"
      @cancel="props.cancel">
      <template v-if="$scopedSlots.selected" #selected="{ selected }">
        <slot name="selected" :selected="selected" />
      </template>
      <template #option="{ option, isCurrent }">
        <slot name="option" :option="option" :isCurrent="isCurrent" />
      </template>
      <template #custom-action>
        <slot name="custom-action" />
      </template>
    </Select>
    <slot>
      <StringLineRenderer :value="normalizedValueLabel" />
    </slot>
  </InlineEdit>
  <div v-else>
    <slot>
      <StringLineRenderer :value="normalizedValueLabel" />
    </slot>
  </div>
</template>

<script>
import Select from '../Select/Select.vue'
import InlineEdit from '../Form/InlineEdit.vue'
import StringLineRenderer from './StringLineRenderer.vue'

export default {
  name: 'KitSingleSelectEditableRenderer',
  components: {
    Select,
    StringLineRenderer,
    InlineEdit
  },
  props: {
    editable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'right'
    },
    value: {
      type: [String, Object],
      default: ''
    },
    allowedValues: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    },
    noOptionsMessage: {
      type: String,
      default: 'No options'
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    confirm: {
      type: Boolean,
      default: true
    },
    normalizer: {
      type: Function,
      default: (value) => ({
        id: value,
        value,
        label: value,
        disabled: false
      })
    },
    icon: {
      type: Boolean,
      default: true
    },
    isClearable: {
      type: Boolean
    },
    forceIsEditing: {
      type: Boolean,
      default: false
    },
    filterPredicate: {
      type: Function
    },
    fixedSelectWidth: {
      type: String
    }
  },
  computed: {
    normalizedValueLabel() {
      if (typeof this.value === 'object') {
        return this.normalizer(this.value).label
      }

      return this.value
    }
  },
  methods: {
    onSaveRequested(option, callback) {
      const value = option || ''
      this.$emit('save-requested', value, callback)
    }
  }
}
</script>
