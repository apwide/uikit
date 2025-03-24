<template>
  <div ref="calendar" class="kit-calendar" tabindex="-1">
    <CalendarHeader
      :month="month"
      :year="year"
      :decade="decade"
      :current-interval="currentInterval"
      data-cy="header"
      @change-interval="onIntervalChange"
      @next="onNext"
      @prev="onPrev" />
    <Weeks
      v-if="currentInterval === 'days'"
      :weeks="weeks"
      :disabled-range="disabledRange"
      @date-selected="onDateSelected" />
    <Months
      v-else-if="currentInterval === 'months'"
      :disabled-range="disabledRange"
      @month-selected="onMonthSelected" />
    <Years v-else :years-of-decade="yearsOfDecade" :disabled-range="disabledRange" @year-selected="onYearSelected" />
  </div>
</template>

<script setup lang="ts">
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  lastDayOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isBefore,
  isAfter,
  endOfDay,
  startOfDay,
  startOfDecade,
  endOfDecade,
  setYear,
  setMonth
} from 'date-fns'
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz'
import { computed, ref, watch } from 'vue'
import type { CalendarDate, DateRange } from '@components/Calendar/CalendarType'
import { chunk } from '../../utils/utils'
import CalendarHeader from './CalendarHeader'
import Weeks from './Weeks'
import Months from './Months'
import Years from './Years'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const DAYS_IN_WEEK = 7
const TODAY = new Date()

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any /* Date | number | DateRange */ /* not supporting external TS type */
  rangeValue?: boolean
  disabledRange?: DateRange
  visibleDate?: Date
  timeZone?: string
}

const props = withDefaults(defineProps<Props>(), {
  rangeValue: false,
  disabledRange: () => ({
    from: undefined,
    to: undefined
  })
})

const emit = defineEmits<{
  (event: 'date-selected', data: Date)
}>()

const currentDate = ref<Date | number>()
const selectedDate = ref<Date | number>()
const currentInterval = ref('days')

const daysOfMonth = computed(() => {
  const monthFirstDate = startOfMonth(currentDate.value)
  const monthLastDate = endOfMonth(currentDate.value)
  const daysOfMonth = eachDayOfInterval({
    start: startOfWeek(monthFirstDate),
    end: lastDayOfWeek(monthLastDate)
  })
  const enrichedDays = daysOfMonth.map((day) => enrichDay(day))
  return chunk(enrichedDays, DAYS_IN_WEEK)
})
const yearsOfDecade = computed(() => {
  const start = startOfDecade(currentDate.value).getFullYear()
  const end = endOfDecade(currentDate).getFullYear()
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx)
})
const decade = computed(() => {
  const firstYearOfDecade = startOfDecade(currentDate.value).getFullYear()
  const lastYearOfDecade = endOfDecade(currentDate.value).getFullYear()
  return `${firstYearOfDecade} - ${lastYearOfDecade}`
})
const disabledFrom = computed(() => {
  return props.disabledRange && props.disabledRange.from && startOfDay(props.disabledRange.from)
})
const disabledTo = computed(() => {
  return props.disabledRange && props.disabledRange.to && endOfDay(props.disabledRange.to)
})
const rangeFrom = computed(() => {
  return props.value && props.rangeValue && startOfDay(props.value.from)
})
const rangeTo = computed(() => {
  return props.value && props.rangeValue && endOfDay(props.value.to)
})
const weeks = computed(() => daysOfMonth.value)
const month = computed(() => MONTHS[currentDate.value.getMonth()])
const year = computed(() => currentDate.value.getFullYear())

watch(() => props.value, date => {
  const value = props.rangeValue ? date.from : date
  selectedDate.value = value ? utcToZonedTime(value, props.timeZone) : undefined
}, {
  immediate: true
})

watch(() => props.visibleDate, () => {
  currentDate.value = props.visibleDate || selectedDate.value || TODAY
}, {
  immediate: true
})

function enrichDay(date) {
  return {
    date,
    isToday: isToday(date),
    isNotSameMonth: !isSameMonth(currentDate.value, date),
    isSelected: isSelected(date),
    isDisabled: isDisabled(date),
    isHighlighted: isHighlighted(date),
    isRangeStart: isSameDay(date, rangeFrom.value),
    isRangeEnd: isSameDay(date, rangeTo.value)
  }
}

function isToday(date) {
  return isSameDay(utcToZonedTime(new Date(), props.timeZone), date)
}

function isSelected(date) {
  if (props.rangeValue) {
    return isSameDay(date, props.value.from) || isSameDay(date, props.value.to)
  }
  return isSameDay(selectedDate.value, date)
}

function isDisabled(date) {
  if (!disabledFrom.value && !disabledTo.value) {
    return false
  }
  if (!disabledFrom.value) {
    return !isAfter(date, disabledTo.value)
  }
  if (!disabledTo.value) {
    return !isBefore(date, disabledFrom.value)
  }
  return !isAfter(date, disabledTo.value) && !isBefore(date, disabledFrom.value)
}

function isHighlighted(date) {
  if (!props.rangeValue) {
    return false
  }
  return isAfter(date, rangeFrom.value) && isBefore(date, rangeTo.value)
}

function onNext(callback) {
  currentDate.value = callback(currentDate.value, currentInterval.value)
}

function onPrev(callback) {
  currentDate.value = callback(currentDate.value, currentInterval)
}

function onMonthSelected(month) {
  currentInterval.value = 'days'
  currentDate.value = setMonth(currentDate.value, month)
}

function onYearSelected(year) {
  currentInterval.value = 'months'
  currentDate.value = setYear(currentDate.value, year)
}

function onDateSelected(day: CalendarDate) {
  const { date } = day
  if (selectedDate.value) {
    date.setHours(selectedDate.value.getHours())
    date.setMinutes(selectedDate.value.getMinutes())
    date.setSeconds(selectedDate.value.getSeconds())
  }
  selectedDate.value = date
  currentDate.value = date
  const utcDate = zonedTimeToUtc(date, props.timeZone)
  emit('date-selected', utcDate)
}

function onIntervalChange(interval) {
  currentInterval.value = interval
}
</script>

<style scoped>
.kit-calendar {
  padding: 15px;
  width: 301px;
}
</style>
