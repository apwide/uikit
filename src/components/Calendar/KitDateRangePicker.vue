<template>
  <div ref="datePicker" class="kit-daterange-picker" @click.stop>
    <KitTextField
      :is-focused="focused"
      :is-loading="isLoading"
      :disabled="isLoading"
      :is-invalid="isInvalid"
      select
      @mousedown="toggle">
      <div class="kit-daterange-picker__input-from-wrapper">
        <span class="kit-daterange-picker__input-from-ghost">{{ formattedDateFrom || displayedFromPlaceholder }}</span>
        <input
          ref="inputFrom"
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
        ref="inputTo"
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
    </KitTextField>
    <Popup :is-open="isOpen" :target-element="datePicker" placement="bottom-start">
      <div class="kit-daterange-picker__date-range">
        <Calendar
          :value="dateRange"
          :range-value="true"
          :visible-date="visibleDate"
          :time-zone="timeZone"
          @date-selected="onDateSelected" />
        <div v-if="showQuickRanges" class="kit-daterange-picker__quick-ranges" tabindex="-1">
          <DropdownGroup label="Quick ranges">
            <KitDropdownItem @click="onQuickRange('this-week')"> This week </KitDropdownItem>
            <KitDropdownItem @click="onQuickRange('this-month')"> This month </KitDropdownItem>
            <KitDropdownItem @click="onQuickRange('last-week')"> Last week </KitDropdownItem>
            <KitDropdownItem @click="onQuickRange('last-month')"> Last month </KitDropdownItem>
            <KitDropdownItem @click="onQuickRange('last-7days')"> Last 7 days </KitDropdownItem>
            <KitDropdownItem @click="onQuickRange('last-30days')"> Last 30 days </KitDropdownItem>
            <KitDropdownItem @click="onQuickRange('this-year')"> This year </KitDropdownItem>
            <KitDropdownItem @click="onQuickRange('last-year')"> Last year </KitDropdownItem>
          </DropdownGroup>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script setup lang="ts">
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
import { computed, getCurrentInstance, nextTick, ref, watch } from 'vue'
import type { DateRange } from '@components/Calendar/CalendarType'
import KitTextField from '../Form/KitTextField.vue'
import Popup from '../common/Popup'
import KitDropdownItem from '../Dropdown/KitDropdownItem.vue'
import DropdownGroup from '../Dropdown/KitDropdownGroup.vue'
import KitIcon from '../Icon/KitIcon'
import Calendar from './Calendar'

const MILISECONDS_IN_SECOND = 1000

type Props = {
  value?: DateRange
  isFocused?: boolean
  isLoading?: boolean
  isInvalid?: boolean
  dateFormat?: string
  disabledTyping?: boolean
  showQuickRanges?: boolean
  disabledRange?: DateRange
  timeZone?: string
  fromPlaceholder?: string
  toPlaceholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  value: () => ({ from: undefined, to: undefined }),
  isFocused: false,
  isLoading: false,
  isInvalid: false,
  dateFormat: 'dd/MM/y',
  disabledTyping: false,
  showQuickRanges: true,
  disabledRange: () => ({ from: undefined, to: undefined })
})

const emit = defineEmits<{
  (event: 'input', data: DateRange)
  (event: 'confirm', data: KeyboardEvent)
  (event: 'focus', data: FocusEvent)
  (event: 'blur', data: FocusEvent)
}>()

const datePicker = ref<HTMLDivElement>()
const inputFrom = ref<HTMLInputElement>()
const inputTo = ref<HTMLInputElement>()

const focused = ref(false)
const isOpen = ref(false)
const firstDateSelected = ref(false)
const visibleDate = ref()

const isValidFrom = computed(() => {
  return props.value.from && isValid(props.value.from)
})

const isValidTo = computed(() => {
  return props.value.to && isValid(props.value.to)
})
const selectedDateFrom = computed({
  get() {
    if (!isValidFrom.value) {
      return undefined
    }
    return fromUnixTime(props.value.from / MILISECONDS_IN_SECOND)
  },
  set(date) {
    if (props.value.to && isAfter(date, props.value.to)) {
      emit('input', { from: props.value.to, to: date })
    } else {
      emit('input', { from: date, to: props.value.to })
    }
  }
})

const selectedDateTo = computed({
  get() {
    if (!isValidTo.value) {
      return undefined
    }
    return fromUnixTime(props.value.to / MILISECONDS_IN_SECOND)
  },
  set(date) {
    if (props.value.from && isBefore(date, props.value.from)) {
      emit('input', { from: date, to: props.value.from })
    } else {
      emit('input', { from: props.value.from, to: date })
    }
  }
})

const formattedDateFrom = computed(() => {
  if (!isValidFrom.value) {
    return ''
  }
  return format(props.value.from, props.dateFormat)
})

const formattedDateTo = computed(() => {
  if (!isValidTo.value) {
    return ''
  }
  return format(props.value.to, props.dateFormat)
})

const dateRange = computed(() => {
  return {
    from: selectedDateFrom.value,
    to: selectedDateTo.value
  }
})

const instance = getCurrentInstance()
const listeners = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { focus, blur, input, ...listeners } = instance.proxy.$listeners
  return listeners
})

const placeholderDate = computed(() => {
  return format(new Date(), props.dateFormat)
})

const displayedFromPlaceholder = computed(() => {
  return props.fromPlaceholder || `e.g. ${placeholderDate.value}`
})

const displayedToPlaceholder = computed(() => {
  return props.toPlaceholder || placeholderDate.value
})

watch(() => props.isFocused, isFocused => {
  if (isFocused) {
    nextTick(() => inputFrom.value.focus())
  }
}, {
  immediate: true
})

watch(isOpen, () => {
  if (!isOpen.value) {
    firstDateSelected.value = false
  }
})

function onInputFrom(e) {
  const date = parse(e.target.value, props.dateFormat, new Date()).getTime()
  if (e.target.value.length === 0) {
    selectedDateFrom.value = undefined
  } else if (!Number.isNaN(date)) {
    const formatted = format(date, props.dateFormat)
    if (e.target.value !== formatted) return
    selectedDateFrom.value = date
    nextTick(() => {
      visibleDate.value = selectedDateFrom.value
    })
  }
}

function onInputTo(e) {
  const date = parse(e.target.value, props.dateFormat, new Date()).getTime()
  if (e.target.value.length === 0) {
    selectedDateTo.value = undefined
  } else if (!Number.isNaN(date)) {
    const formatted = format(date, props.dateFormat)
    if (e.target.value !== formatted) return
    selectedDateTo.value = date
    nextTick(() => {
      visibleDate.value = selectedDateTo.value
    })
  }
}

function toggle() {
  isOpen.value = !isOpen.value
}

function onEsc() {
  isOpen.value = false
}

function onEnter(e) {
  emit('confirm', e)
}

function onFocus(e) {
  if (!datePicker.value.contains(e.relatedTarget)) {
    focused.value = true
    isOpen.value = true
    emit('focus', e)
  }
  const focusedInput = getFocusedInput()
  if (focusedInput) {
    visibleDate.value = focusedInput === inputFrom.value ? selectedDateFrom.value : selectedDateTo.value
  }
}

function onBlur(e) {
  if (!datePicker.value.contains(e.relatedTarget)) {
    focused.value = false
    isOpen.value = false
    emit('blur', e)
  } else if (e.relatedTarget.getAttribute('tabindex') === '-1') {
    e.target.focus()
  }
}

function onDateSelected(date) {
  if (props.disabledTyping) {
    if (!selectedDateFrom.value) {
      selectedDateFrom.value = Date.parse(date)
    } else if (!selectedDateTo.value) {
      selectedDateTo.value = Date.parse(date)
    } else {
      if (Date.parse(date) < selectedDateFrom.value) {
        selectedDateFrom.value = Date.parse(date)
      } else {
        selectedDateTo.value = Date.parse(date)
      }
    }
  } else {
    if (isInputFromFocused()) {
      selectedDateFrom.value = Date.parse(date)
    } else {
      selectedDateTo.value = Date.parse(date)
    }
  }

  if (!firstDateSelected.value) {
    firstDateSelected.value = true
    if (isInputFromFocused()) {
      inputTo.value.focus()
    } else {
      inputFrom.value.focus()
    }
  } else {
    isOpen.value = false
  }
}

function onQuickRange(range) {
  const today = new Date()
  switch (range) {
    case 'this-week':
      return setRange(startOfWeek(today), endOfWeek(today))
    case 'this-month':
      return setRange(startOfMonth(today), endOfMonth(today))
    case 'last-week':
      return setRange(startOfWeek(subWeeks(today, 1)), endOfWeek(subWeeks(today, 1)))
    case 'last-month':
      return setRange(startOfMonth(subMonths(today, 1)), endOfMonth(subMonths(today, 1)))
    case 'last-7days':
      return setRange(subDays(today, 6), today)
    case 'last-30days':
      return setRange(subDays(today, 29), today)
    case 'this-year':
      return setRange(startOfYear(today), endOfYear(today))
    case 'last-year':
      return setRange(startOfYear(subYears(today, 1)), endOfYear(subYears(today, 1)))
    default:
  }
  return undefined
}

function setRange(from, to) {
  emit('input', { from: getTime(from), to: getTime(to) })
  isOpen.value = false
}

function isInputFromFocused() {
  return document.activeElement === inputFrom.value
}

function getFocusedInput() {
  if (document.activeElement === inputFrom.value) return inputFrom.value
  if (document.activeElement === inputTo.value) return inputTo.value
  return undefined
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
