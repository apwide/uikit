<template>
  <div class="wrapper">
    <h3>Normal view</h3>
    <p>
      <Calendar data-cy="calendar" :value="date" @date-selected="onDateSelected" />
    </p>
    <h3>With time zones</h3>
    <div class="time-zones">
      <div>
        <p>Pacific/Auckland: {{ formatDate(date, 'Pacific/Auckland') }}</p>
        <Calendar :value="date" time-zone="Pacific/Auckland" @date-selected="onDateSelected" />
      </div>
      <div>
        <p>Default (system) time zone: {{ formatDate(date) }}</p>
        <Calendar :value="date" @date-selected="onDateSelected" />
      </div>
      <div>
        <p>Pacific/Honolulu: {{ formatDate(date, 'Pacific/Honolulu') }}</p>
        <Calendar :value="date" time-zone="Pacific/Honolulu" @date-selected="onDateSelected" />
      </div>
    </div>
    <h3>Disabled past dates</h3>
    <p>
      <Calendar :value="date" :disabled-range="noPastRange" />
    </p>
    <h3>Disabled future dates</h3>
    <p>
      <Calendar :value="date" :disabled-range="noFutureRange" />
    </p>
    <h3>Date range</h3>
    <p>
      <Calendar :value="dateRange" :range-value="true" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { addDays, subDays } from 'date-fns'
import { format, toZonedTime } from 'date-fns-tz'
import Calendar from '@/components/Calendar/Calendar.vue'

const date = ref(new Date())
const noFutureRange = {
  from: addDays(new Date(), 1)
}
const noPastRange = {
  to: subDays(new Date(), 1)
}
const dateRange = ref({
  from: addDays(new Date(), 7),
  to: addDays(new Date(), 21)
})

watch(date, () => {
  console.log(date.value)
})

function onDateSelected(value) {
  date.value = value
}

function formatDate(dateToFormat, timeZone) {
  return dateToFormat && format(toZonedTime(dateToFormat, timeZone), 'yyyy-MM-dd HH:mm')
}
</script>

<style scoped>
.time-zones {
  display: flex;
}
</style>
