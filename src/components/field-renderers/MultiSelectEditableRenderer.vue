<template>
  <InlineEdit
    v-if="editable"
    :value="value"
    :confirm="confirm"
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
      :is-fetching="isFetching"
      :placeholder="placeholder"
      :no-options-message="noOptionsMessage"
      :append-to-body="appendToBody"
      :normalizer="normalizer"
      :is-clearable="isClearable"
      style="flex: 1"
      :fixed-select-width="fixedSelectWidth"
      :multi="true"
      :async="async"
      :confirm="confirm"
      :keep-open-on-select="keepOpenOnSelect"
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
      <template v-if="$scopedSlots.tag" #tag="{ tag }">
        <slot name="tag" :tag="tag" />
      </template>
      <template #option="{ option, isCurrent }">
        <slot name="option" :option="option" :isCurrent="isCurrent" />
      </template>
      <template #custom-action>
        <slot name="custom-action" />
      </template>
      <template #icon>
        <slot name="icon" />
      </template>
    </Select>
    <slot>
      <MultiSelectRenderer :selected-values="selectedValueLabels" />
    </slot>
  </InlineEdit>
  <div v-else>
    <slot>
      <MultiSelectRenderer :selected-values="selectedValueLabels" />
    </slot>
  </div>
</template>

<script>
import Select from '../Select/KitSelect.vue'
import InlineEdit from '../Form/InlineEdit'
import MultiSelectRenderer from './MultiSelectRenderer'

export default {
  name: 'KitMultiSelectEditableRenderer',
  components: { MultiSelectRenderer, InlineEdit, Select },
  props: {
    value: {
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
    },
    placeholder: {
      type: String,
      default: ''
    },
    noOptionsMessage: {
      type: String,
      default: 'No options'
    },
    isClearable: {
      type: Boolean
    },
    isFetching: {
      type: Boolean
    },
    async: {
      type: Boolean
    },
    forceIsEditing: {
      type: Boolean,
      default: false
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
    fixedSelectWidth: {
      type: String
    },
    keepOpenOnSelect: {
      type: Boolean
    }
  },
  computed: {
    selectedValueLabels() {
      return this.value.map(this.normalizer).map(({ label }) => label)
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
