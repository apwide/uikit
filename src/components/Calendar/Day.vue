<template>
  <td class="kit-calendar-day" :highlighted="isHighlighted" :range-start="isRangeStart" :range-end="isRangeEnd">
    <KitButton
      appearance="subtle"
      class="kit-calendar-day__date"
      :today="day.isToday"
      :disabled="isDisabled"
      :is-not-same-month="day.isNotSameMonth"
      :is-selected="day.isSelected"
      @click.stop="onDateSelected">
      {{ date }}
    </KitButton>
  </td>
</template>

<script setup lang="ts">
import KitButton from '../Button/KitButton.vue'
import { computed } from 'vue'

type Props = {
  day: any
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (event: 'date-selected', data: any)
}>()

const date = computed(() => props.day.date.getDate())
const isDisabled = computed(() => props.day.isDisabled)
const isHighlighted = computed(() => props.day.isHighlighted)
const isRangeStart = computed(() => props.day.isRangeStart)
const isRangeEnd = computed(() => props.day.isRangeEnd)

function onDateSelected() {
  emit('date-selected', props.day)
}

</script>

<style scoped>
.kit-calendar-day {
  --kit-calendar-day-today-border-color:#0052cc;
}

[data-color-mode="dark"] .kit-calendar-day {
  --kit-calendar-day-today-border-color:#579dff;
}

.kit-calendar-day__date {
  width: 100%;
}

[highlighted] {
  background-color: var(--kit-table-row-hover-color);
}

[range-start] [selected] {
  border-radius: 3px 0 0 3px;
}

[range-end] [selected] {
  border-radius: 0 3px 3px 0;
}

[today] {
  font-weight: 500;
  background-color: transparent;
  position: relative;
  color: var(--kit-calendar-day-today-border-color);
}

[today]::after {
  background-color: var(--kit-calendar-day-today-border-color);
  bottom: 2px;
  content: '';
  display: block;
  height: 2px;
  left: 2px;
  position: absolute;
  right: 2px;
}

[is-not-same-month]:not([today]) {
  color: #cacaca;
}
</style>
