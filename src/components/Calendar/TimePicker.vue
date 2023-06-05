<template>
  <div ref="time-picker" class="kit-time-picker" @click.stop>
    <TextField
      :is-focused="focused"
      :is-loading="isLoading"
      :disabled="disabled || isLoading"
      :is-invalid="isInvalid"
      select
      @keydown.down="onKeyDown"
      @mousedown="toggle">
      <input
        ref="input"
        :value="formattedTime"
        type="text"
        width="50%"
        :placeholder="placeholder"
        :disabled="disabled || isLoading"
        v-on="listeners"
        @input="onInput"
        @keyup.esc="onEsc"
        @focus="onFocus"
        @blur="onBlur" />
    </TextField>
    <Popup :is-open="isOpen" :target-element="$refs['time-picker']" placement="bottom-start" data-cy="select-menu">
      <TimePickerMenu :value="formattedTime" @time-selected="onTimeSelected" />
    </Popup>
  </div>
</template>

<script lang="ts">
import TextField from '../Form/TextField'
import Popup from '../common/Popup'
import TimePickerMenu from './TimePickerMenu'

export default {
  name: 'KitTimePicker',
  components: {
    TextField,
    Popup,
    TimePickerMenu
  },
  props: {
    value: {
      type: [String],
      default: undefined
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isFocused: {
      type: Boolean,
      default: false
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'e.g. 11:00'
    }
  },
  data() {
    return {
      focused: false,
      isOpen: false
    }
  },
  computed: {
    isValid() {
      return this.value
    },
    selectedTime: {
      get() {
        if (!this.isValid) {
          return undefined
        }
        return this.value
      },
      set(date) {
        this.$emit('input', date)
      }
    },
    formattedTime() {
      if (!this.isValid) {
        return ''
      }
      return this.value
    },
    listeners() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { focus, blur, input, ...listeners } = this.$listeners
      return listeners
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
  methods: {
    onInput(e) {
      if (e.target.value.length === 0) {
        this.selectedTime = undefined
      } else {
        this.selectedTime = e.target.value
      }
    },
    onKeyDown() {
      if (!this.isOpen) {
        this.toggle()
      }
    },
    toggle() {
      this.isOpen = !this.isOpen
    },
    onEsc() {
      this.isOpen = false
    },
    onTab(e) {
      this.focused = false
      this.isOpen = false
      this.$nextTick(() => {
        this.onInput(e)
        this.$emit('confirm', e)
      })
    },
    onEnter(e) {
      this.onTab(e)
    },
    onFocus(e) {
      if (!this.$refs['time-picker'].contains(e.relatedTarget)) {
        this.focused = true
        this.isOpen = true
        this.$emit('focus', e)
      }
    },
    onBlur(e) {
      if (!this.$refs['time-picker'].contains(e.relatedTarget)) {
        this.focused = false
        this.isOpen = false
        this.$emit('blur', e)
      } else if (e.relatedTarget.getAttribute('tabindex') === '-1') {
        this.$refs.input.focus()
      }
    },
    onTimeSelected(time) {
      this.isOpen = false
      this.selectedTime = time
      this.$refs.input.focus()
    }
  }
}
</script>
