<template>
  <div ref="date-picker" class="kit-daterange-picker" @click.stop>
    <TextField
      :is-focused="focused"
      :is-loading="isLoading"
      :disabled="isLoading"
      :is-invalid="isInvalid"
      select
      @mousedown="toggle">
      <div class="kit-daterange-picker__input-from-wrapper">
        <span class="kit-daterange-picker__input-from-ghost">{{ formattedDateFrom || displayedFromPlaceholder }}</span>
        <input
          ref="input-from"
          :value="formattedDateFrom"
          type="text"
          class="kit-daterange-picker__input-from"
          :placeholder="displayedFromPlaceholder"
          :disabled="isLoading"
          :readonly="disabledTyping"
          v-on="listeners"
          @keydown.enter="onEnter"
          @input="onInputFrom"
          @keyup.esc="onEsc"
          @focus="onFocus"
          @blur="onBlur" />
      </div>
      <span>-</span>
      <input
        ref="input-to"
        :value="formattedDateTo"
        type="text"
        class="kit-daterange-picker__input-to"
        :placeholder="displayedToPlaceholder"
        :disabled="isLoading"
        :readonly="disabledTyping"
        v-on="listeners"
        @keydown.enter="onEnter"
        @input="onInputTo"
        @keyup.esc="onEsc"
        @focus="onFocus"
        @blur="onBlur" />
      <KitIcon type="calendar-alt" icon-style="regular" class="kit-icon" />
    </TextField>
    <Popup :is-open="isOpen" :target-element="$refs['date-picker']" placement="bottom-start">
      <div class="kit-daterange-picker__date-range">
        <Calendar
          :value="dateRange"
          :range-value="true"
          :visible-date="visibleDate"
          :time-zone="timeZone"
          @date-selected="onDateSelected" />
        <div v-if="showQuickRanges" class="kit-daterange-picker__quick-ranges" tabindex="-1">
          <DropdownGroup label="Quick ranges">
            <DropdownItem @click="onQuickRange('this-week')"> This week </DropdownItem>
            <DropdownItem @click="onQuickRange('this-month')"> This month </DropdownItem>
            <DropdownItem @click="onQuickRange('last-week')"> Last week </DropdownItem>
            <DropdownItem @click="onQuickRange('last-month')"> Last month </DropdownItem>
            <DropdownItem @click="onQuickRange('last-7days')"> Last 7 days </DropdownItem>
            <DropdownItem @click="onQuickRange('last-30days')"> Last 30 days </DropdownItem>
            <DropdownItem @click="onQuickRange('this-year')"> This year </DropdownItem>
            <DropdownItem @click="onQuickRange('last-year')"> Last year </DropdownItem>
          </DropdownGroup>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
import format from 'date-fns/format'
import {
  endOfMonth,
  endOfWeek,
  endOfYear,
  fromUnixTime,
  getTime,
  isAfter,
  isBefore,
  isValid,
  parse,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subDays,
  subMonths,
  subWeeks,
  subYears
} from 'date-fns'
import TextField from '../Form/TextField.vue'
import Popup from '../common/Popup.vue'
import DropdownItem from '../Dropdown/DropdownItem.vue'
import DropdownGroup from '../Dropdown/DropdownGroup.vue'
import KitIcon from '../Icon/KitIcon.vue'
import Calendar from './Calendar.vue'

const MILISECONDS_IN_SECOND = 1000

export default {
  name: 'KitDateRangePicker',
  components: {
    KitIcon,
    TextField,
    Calendar,
    Popup,
    DropdownItem,
    DropdownGroup
  },
  props: {
    value: {
      type: Object,
      default: () => ({ from: undefined, to: undefined })
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
    disabledTyping: {
      type: Boolean,
      default: false
    },
    showQuickRanges: {
      type: Boolean,
      default: true
    },
    disabledRange: {
      type: Object,
      default: () => ({
        from: undefined,
        to: undefined
      })
    },
    timeZone: {
      type: String,
      default: undefined
    },
    fromPlaceholder: {
      type: String
    },
    toPlaceholder: {
      type: String
    }
  },
  data() {
    return {
      focused: false,
      isOpen: false,
      firstDateSelected: false,
      visibleDate: undefined
    }
  },
  computed: {
    isValidFrom() {
      return this.value.from && isValid(this.value.from)
    },
    isValidTo() {
      return this.value.to && isValid(this.value.to)
    },
    selectedDateFrom: {
      get() {
        if (!this.isValidFrom) {
          return undefined
        }
        return fromUnixTime(this.value.from / MILISECONDS_IN_SECOND)
      },
      set(date) {
        if (this.value.to && isAfter(date, this.value.to)) {
          this.$emit('input', { from: this.value.to, to: date })
        } else {
          this.$emit('input', { from: date, to: this.value.to })
        }
      }
    },
    selectedDateTo: {
      get() {
        if (!this.isValidTo) {
          return undefined
        }
        return fromUnixTime(this.value.to / MILISECONDS_IN_SECOND)
      },
      set(date) {
        if (this.value.from && isBefore(date, this.value.from)) {
          this.$emit('input', { from: date, to: this.value.from })
        } else {
          this.$emit('input', { from: this.value.from, to: date })
        }
      }
    },
    formattedDateFrom() {
      if (!this.isValidFrom) {
        return ''
      }
      return format(this.value.from, this.dateFormat)
    },
    formattedDateTo() {
      if (!this.isValidTo) {
        return ''
      }
      return format(this.value.to, this.dateFormat)
    },
    dateRange() {
      return {
        from: this.selectedDateFrom,
        to: this.selectedDateTo
      }
    },
    listeners() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { focus, blur, input, ...listeners } = this.$listeners
      return listeners
    },
    placeholderDate() {
      return format(new Date(), this.dateFormat)
    },
    displayedFromPlaceholder() {
      return this.fromPlaceholder || `e.g. ${this.placeholderDate}`
    },
    displayedToPlaceholder() {
      return this.toPlaceholder || this.placeholderDate
    }
  },
  watch: {
    isFocused: {
      handler(isFocused) {
        if (isFocused) {
          this.$nextTick(() => this.$refs['input-from'].focus())
        }
      },
      immediate: true
    },
    isOpen() {
      if (!this.isOpen) {
        this.firstDateSelected = false
      }
    }
  },
  methods: {
    onInputFrom(e) {
      const date = parse(e.target.value, this.dateFormat, new Date()).getTime()
      if (e.target.value.length === 0) {
        this.selectedDateFrom = undefined
      } else if (!Number.isNaN(date)) {
        const formatted = format(date, this.dateFormat)
        if (e.target.value !== formatted) return
        this.selectedDateFrom = date
        this.$nextTick(() => {
          this.visibleDate = this.selectedDateFrom
        })
      }
    },
    onInputTo(e) {
      const date = parse(e.target.value, this.dateFormat, new Date()).getTime()
      if (e.target.value.length === 0) {
        this.selectedDateTo = undefined
      } else if (!Number.isNaN(date)) {
        const formatted = format(date, this.dateFormat)
        if (e.target.value !== formatted) return
        this.selectedDateTo = date
        this.$nextTick(() => {
          this.visibleDate = this.selectedDateTo
        })
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
      const focusedInput = this.getFocusedInput()
      if (focusedInput) {
        this.visibleDate = focusedInput === this.$refs['input-from'] ? this.selectedDateFrom : this.selectedDateTo
      }
    },
    onBlur(e) {
      if (!this.$refs['date-picker'].contains(e.relatedTarget)) {
        this.focused = false
        this.isOpen = false
        this.$emit('blur', e)
      } else if (e.relatedTarget.getAttribute('tabindex') === '-1') {
        e.target.focus()
      }
    },
    onDateSelected(date) {
      if (this.disabledTyping) {
        if (!this.selectedDateFrom) {
          this.selectedDateFrom = Date.parse(date)
        } else if (!this.selectedDateTo) {
          this.selectedDateTo = Date.parse(date)
        } else {
          if (Date.parse(date) < this.selectedDateFrom) {
            this.selectedDateFrom = Date.parse(date)
          } else {
            this.selectedDateTo = Date.parse(date)
          }
        }
      } else {
        if (this.isInputFromFocused()) {
          this.selectedDateFrom = Date.parse(date)
        } else {
          this.selectedDateTo = Date.parse(date)
        }
      }

      if (!this.firstDateSelected) {
        this.firstDateSelected = true
        if (this.isInputFromFocused()) {
          this.$refs['input-to'].focus()
        } else {
          this.$refs['input-from'].focus()
        }
      } else {
        this.isOpen = false
      }
    },
    onQuickRange(range) {
      const today = new Date()
      switch (range) {
        case 'this-week':
          return this.setRange(startOfWeek(today), endOfWeek(today))
        case 'this-month':
          return this.setRange(startOfMonth(today), endOfMonth(today))
        case 'last-week':
          return this.setRange(startOfWeek(subWeeks(today, 1)), endOfWeek(subWeeks(today, 1)))
        case 'last-month':
          return this.setRange(startOfMonth(subMonths(today, 1)), endOfMonth(subMonths(today, 1)))
        case 'last-7days':
          return this.setRange(subDays(today, 6), today)
        case 'last-30days':
          return this.setRange(subDays(today, 29), today)
        case 'this-year':
          return this.setRange(startOfYear(today), endOfYear(today))
        case 'last-year':
          return this.setRange(startOfYear(subYears(today, 1)), endOfYear(subYears(today, 1)))
        default:
      }
      return undefined
    },
    setRange(from, to) {
      this.$emit('input', { from: getTime(from), to: getTime(to) })
      this.isOpen = false
    },
    isInputFromFocused() {
      return document.activeElement === this.$refs['input-from']
    },
    getFocusedInput() {
      if (document.activeElement === this.$refs['input-from']) return this.$refs['input-from']
      if (document.activeElement === this.$refs['input-to']) return this.$refs['input-to']
      return undefined
    }
  }
}
</script>
<style scoped>
.kit-icon {
  padding-right: 8px !important;
}

.kit-daterange-picker__date-range {
  display: flex;
}

.kit-daterange-picker__input-from-wrapper {
  position: relative;
  height: 32px;
}

.kit-daterange-picker__input-from-ghost {
  visibility: hidden;
  white-space: nowrap;
  padding: 6px;
  display: block;
}

.kit-daterange-picker__input-from {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.kit-daterange-picker__quick-ranges {
  padding: 4px 0;
  box-shadow: rgba(9, 30, 66, 0.31) 0px 0px 1px;
}
</style>
