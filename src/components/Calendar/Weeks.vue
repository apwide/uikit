<template>
  <table>
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
import Day from './Day'

const WEEKDAYS_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

type Props = {
  weeks: Array
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (event: 'date-selected', data: any)
}>()

const weekdays = WEEKDAYS_LABELS

function onDateSelected(date) {
  emit('date-selected', date)
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
