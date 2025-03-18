<template>
  <table>
    <tbody>
      <tr v-for="(quarter, i) in monthsOfYear" :key="i">
        <td v-for="month in quarter" :key="month">
          <KitButton appearance="subtle" data-cy="month" class="kit-calendar-month" @click="onMonthSelected(month)">
            {{ month }}
          </KitButton>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { chunk } from '../../utils/utils'
import KitButton from '../Button/KitButton.vue'
import { computed } from 'vue'

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
const MONTHS_PER_ROW = 3

const emit = defineEmits<{
  (event: 'month-selected', data: number)
}>()

const monthsOfYear = computed(() => chunk(MONTHS, MONTHS_PER_ROW))

function onMonthSelected(month) {
  emit('month-selected', MONTHS.indexOf(month))
}
</script>

<style scoped>
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
  text-align: center;
}

.kit-calendar-month {
  width: 100%;
}
</style>
