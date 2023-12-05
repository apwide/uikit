<template>
  <div ref="date-picker" class="kit-date-picker" @click.stop>
    <TextField
      :is-focused="focused"
      :is-loading="isLoading"
      :disabled="disabled || isLoading"
      :is-invalid="isInvalid"
      select
      @mousedown="toggle">
      <input
        ref="input"
        :value="formattedDate"
        type="text"
        width="50%"
        placeholder="e.g. 31/12/2018"
        :disabled="disabled || isLoading"
        v-on="listeners"
        @keydown.enter="onEnter"
        @input="onInput"
        @keyup.esc="onEsc"
        @focus="onFocus"
        @blur="onBlur" />
      <KitIcon type="calendar-alt" icon-style="regular" class="kit-icon" />
    </TextField>
    <Popup :is-open="isOpen" :target-element="$refs['date-picker']" placement="bottom-start" data-cy="select-menu">
      <Calendar
        :value="selectedDate"
        :disabled-range="disabledRange"
        :time-zone="timeZone"
        @date-selected="onDateSelected" />
    </Popup>
  </div>
</template>

<script>
import format from 'date-fns/format'
import { fromUnixTime, parse, isValid } from 'date-fns'
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz'
import TextField from '../Form/TextField.vue'
import Popup from '../common/Popup.vue'
import KitIcon from '../Icon/KitIcon.vue'
import Calendar from './Calendar.vue'

const MILISECONDS_IN_SECOND = 1000

export default {
  name: 'KitDatePicker',
  components: {
    KitIcon,
    TextField,
    Calendar,
    Popup
  },
  props: {
    value: {
      type: [Number, String],
      default: undefined
    },
    isFocused: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    dateFormat: {
      type: String,
      default: 'dd/MM/y'
    },
    disabledRange: {
      type: Object,
      default: () => ({
        from: undefined,
        to: undefined
      })
    },
    disabled: {
      type: Boolean,
      default: false
    },
    timeZone: {
      type: String,
      default: undefined
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
      return this.value && isValid(this.value)
    },
    selectedDate: {
      get() {
        if (!this.isValid) {
          return undefined
        }
        return fromUnixTime(this.value / MILISECONDS_IN_SECOND)
      },
      set(date) {
        this.$emit('input', date)
      }
    },
    formattedDate() {
      if (!this.isValid) {
        return ''
      }
      const date = utcToZonedTime(this.value, this.timeZone)
      return format(date, this.dateFormat)
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
      const timestamp = parse(e.target.value, this.dateFormat, new Date()).getTime()
      if (e.target.value.length === 0) {
        this.selectedDate = undefined
      } else if (!Number.isNaN(timestamp)) {
        const formatted = format(timestamp, this.dateFormat)
        if (e.target.value !== formatted) return
        const date = new Date(timestamp)
        this.copyTime(date)
        const utcDate = zonedTimeToUtc(date, this.timeZone)
        this.selectedDate = utcDate.getTime()
      }
    },
    copyTime(date) {
      if (this.selectedDate) {
        const selectedDate = new Date(this.selectedDate)
        date.setHours(selectedDate.getHours())
        date.setMinutes(selectedDate.getMinutes())
        date.setSeconds(selectedDate.getSeconds())
      }
    },
    toggle() {
      this.isOpen = !this.isOpen
    },
    onEsc() {
      this.isOpen = false
    },
    onEnter(e) {
      this.$emit('confirm', e)
    },
    onFocus(e) {
      if (!this.$refs['date-picker'].contains(e.relatedTarget)) {
        this.focused = true
        this.isOpen = true
        this.$emit('focus', e)
      }
    },
    onBlur(e) {
      if (!this.$refs['date-picker'].contains(e.relatedTarget)) {
        this.focused = false
        this.isOpen = false
        this.$emit('blur', e)
      } else if (e.relatedTarget.getAttribute('tabindex') === '-1') {
        this.$refs.input.focus()
      }
    },
    onDateSelected(date) {
      this.isOpen = false
      this.selectedDate = Date.parse(date)
      this.$refs.input.focus()
    }
  }
}
</script>
<style scoped>
.kit-icon {
  padding-right: 8px !important;
}
</style>
