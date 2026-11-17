<template>
  <table @keydown="onKeyDown">
    <thead class="kit-calendar-weeks">
      <th v-for="weekday in weekdays" :key="weekday" class="kit-calendar-weeks__weekday">
        {{ weekday }}
      </th>
    </thead>
    <tbody>
      <tr v-for="(week, i) in weeks" :key="i" class="kit-calendar-weeks__week">
        <Day v-for="day in week" :key="day.date.getDate()" :day="day" data-cy="day" @date-selected="onDateSelected" />
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { addDays, addMonths, endOfWeek, startOfWeek } from 'date-fns'
import type { CalendarDate } from '@components/Calendar/CalendarType'
import Day from './Day.vue'

const WEEKDAYS_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

type Props = {
  weeks: Array
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (event: 'date-selected', data: CalendarDate)
  (event: 'navigate', data: Date)
}>()

const weekdays = WEEKDAYS_LABELS

function onDateSelected(date: CalendarDate) {
  emit('date-selected', date)
}

// WAI-ARIA date picker grid: the days are one Tab stop, the keys move the focused day
const MOVES: Record<string, (date: Date) => Date> = {
  ArrowLeft: (d) => addDays(d, -1),
  ArrowRight: (d) => addDays(d, 1),
  ArrowUp: (d) => addDays(d, -7),
  ArrowDown: (d) => addDays(d, 7),
  Home: (d) => startOfWeek(d),
  End: (d) => endOfWeek(d),
  PageUp: (d) => addMonths(d, -1),
  PageDown: (d) => addMonths(d, 1)
}

function onKeyDown(e: KeyboardEvent) {
  const move = MOVES[e.key]
  const tabStop = props.weeks.flat().find((day) => day.isTabStop)
  if (!move || !tabStop) return
  e.preventDefault()
  emit('navigate', move(tabStop.date))
}

</script>

<style scoped>
.kit-calendar-weeks__weekday {
  color: #6b778c;
  font-size: 11px;
  min-width: 40px;
  box-sizing: border-box;
  text-transform: uppercase;
  text-align: center;
  padding: 8px;
}

table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}

thead,
tbody {
  border: none;
}

td {
  padding: 0;
}
</style>
