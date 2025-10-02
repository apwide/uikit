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
import CheckboxIndeterminateIcon from '../Icon/aui/CheckboxIndeterminateIcon'
import CheckboxIcon from '../Icon/aui/CheckboxIcon'

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
  --kit-checkbox-checked-color: #0052cc;
  --kit-checkbox-checked-hover-color: #0065ff;
  --kit-checkbox-checked-tick-color: #fafbfc;

  --kit-checkbox-fill-color: #fafbfc;
  --kit-checkbox-border-color: #dfe1e6;
  --kit-checkbox-hover-color: #ebecf0;
  --kit-checkbox-focus-color: #4c9aff;

  --kit-checkbox-disabled-color: #f4f5f7;
  --kit-checkbox-disabled-border-color: #BCD6F00A;
}

[data-color-mode="dark"] .kit-checkbox__wrapper {
  --kit-checkbox-checked-color: #579DFF;
  --kit-checkbox-checked-hover-color: #85B8FF;
  --kit-checkbox-checked-tick-color: #1D2125;

  --kit-checkbox-fill-color: #22272B;
  --kit-checkbox-border-color: #738496;
  --kit-checkbox-hover-color: #282E33;
  --kit-checkbox-focus-color: #85B8FF;

  --kit-checkbox-disabled-color: #BFDBF847;
  --kit-checkbox-disabled-border-color: #BCD6F00A;
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

input:checked + .kit-checkbox__icon :deep(rect) {
  color: var(--kit-checkbox-checked-color);
  stroke: var(--kit-checkbox-checked-color);
}

input + .kit-checkbox__icon :deep(rect) {
  color: var(--kit-checkbox-fill-color);
  stroke: var(--kit-checkbox-border-color);
}

label:hover input:not(:checked):not(:disabled) + .kit-checkbox__icon :deep(rect) {
  fill: var(--kit-checkbox-hover-color);
}

label:hover input:not(:checked):not(:disabled) + .kit-checkbox__icon :deep(path) {
  fill: var(--kit-checkbox-hover-color);
}

label:hover input:checked:not(:disabled) + .kit-checkbox__icon :deep(rect) {
  color: var(--kit-checkbox-checked-hover-color);
  stroke: var(--kit-checkbox-checked-hover-color);
}

input + .kit-checkbox__icon :deep(path) {
  fill: var(--kit-checkbox-checked-tick-color);
}

input:not([is-invalid]):focus + .kit-checkbox__icon :deep(rect) {
  stroke: var(--kit-checkbox-focus-color);
}

input[is-invalid] + .kit-checkbox__icon :deep(rect) {
  stroke: #ff5630;
}

input[disabled] + .kit-checkbox__icon :deep(rect) {
  stroke: var(--kit-checkbox-disabled-border-color);
  color: var(--kit-checkbox-disabled-color);
}

input[disabled] + .kit-checkbox__icon :deep(path) {
  fill: var(--kit-checkbox-disabled-border-color);
}

input:checked[disabled] + .kit-checkbox__icon :deep(path) {
  fill: #a5adba;
}

label[disabled],
label[disabled] input {
  cursor: not-allowed;
  color: #97a0af;
}

:not(.kit-checkbox__indeterminate) :deep(rect) {
  transition: 0.2s ease-in-out;
  stroke-width: 2px;
}

:deep(path) {
  transition: 0.2s ease-in-out;
}
</style>
