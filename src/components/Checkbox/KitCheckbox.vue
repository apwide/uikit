<template>
  <label ref="checkbox" class="kit-checkbox__wrapper" :for="id" tabindex="-1" :disabled="disabled">
    <input
      :id="id"
      ref="input"
      v-model="isChecked"
      :value="value"
      type="checkbox"
      :is-invalid="isInvalid"
      :disabled="disabled"
      @focus="onFocus"
      @blur="onBlur" />
    <CheckboxIcon v-if="!indeterminate" class="kit-checkbox__icon" />
    <CheckboxIndeterminateIcon v-else class="kit-checkbox__indeterminate" />
    <span v-if="$slots['default']" class="kit-checkbox__input-label"><slot /></span>
  </label>
</template>

<script>
/**
 * Cannot be moved to vue 2 setup as requires defineModel.
 * It declares v-model to be bound to checked prop.
 */
import CheckboxIndeterminateIcon from '../Icon/CheckboxIndeterminateIcon'
import CheckboxIcon from '../Icon/CheckboxIcon'

export default {
  name: 'KitCheckbox',
  components: { CheckboxIcon, CheckboxIndeterminateIcon },
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Object, Number],
      default: undefined
    },
    checked: {
      type: [Boolean, Array],
      required: true
    },
    isFocused: {
      type: Boolean,
      default: false
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { id: undefined }
  },
  computed: {
    isChecked: {
      get() {
        return this.checked
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  watch: {
    isFocused: {
      handler(isFocused) {
        if (isFocused) {
          this.$nextTick(() => this.$refs.input.focus())
        }
      },
      immediate: true
    }
  },
  created() {
    // eslint-disable-next-line
    this.id = this._uuid
  },
  methods: {
    onBlur(e) {
      if (!this.$refs.checkbox.contains(e.relatedTarget)) {
        this.$emit('blur', e)
      }
    },
    onFocus(e) {
      this.$emit('focus', e)
    }
  }
}
</script>

<style scoped>
input[type='checkbox'] {
  left: 50%;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  cursor: pointer;
}

.kit-checkbox__wrapper {
  display: inline-flex;
  position: relative;
  cursor: pointer;
  outline: none;
}

.kit-checkbox__input-label {
  padding: 2px 4px;
  display: flex;
  flex-grow: 1;
  min-width: 0;
}

input:checked + .kit-checkbox__icon >>> rect {
  color: #0052cc;
  stroke: #0052cc;
}

input + .kit-checkbox__icon >>> rect {
  color: #fafbfc;
  stroke: #dfe1e6;
}

label:hover input:not(:checked):not(:disabled) + .kit-checkbox__icon >>> rect {
  fill: #ebecf0;
}

label:hover input:not(:checked):not(:disabled) + .kit-checkbox__icon >>> path {
  fill: #ebecf0;
}

label:hover input:checked:not(:disabled) + .kit-checkbox__icon >>> rect {
  color: #0065ff;
  stroke: #0065ff;
}

input + .kit-checkbox__icon >>> path {
  fill: #fafbfc;
}

input:not([is-invalid]):focus + .kit-checkbox__icon >>> rect {
  stroke: #4c9aff;
}

input[is-invalid] + .kit-checkbox__icon >>> rect {
  stroke: #ff5630;
}

input:checked[disabled] + .kit-checkbox__icon >>> rect {
  stroke: #f4f5f7;
  color: #f4f5f7;
}

input:checked[disabled] + .kit-checkbox__icon >>> path {
  fill: #a5adba;
}

label[disabled],
label[disabled] input {
  cursor: not-allowed;
  color: rgb(151, 160, 175);
}

:not(.kit-checkbox__indeterminate) >>> rect {
  transition: 0.2s ease-in-out;
  stroke-width: 2px;
}

>>> path {
  transition: 0.2s ease-in-out;
}
</style>
