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

<script>
import KitButton from '../Button/KitButton.vue'

export default {
  name: 'KitDay',
  components: { KitButton },
  props: {
    day: {
      type: Object,
      required: true
    }
  },
  computed: {
    date() {
      return this.day.date.getDate()
    },
    isDisabled() {
      return this.day.isDisabled
    },
    isHighlighted() {
      return this.day.isHighlighted
    },
    isRangeStart() {
      return this.day.isRangeStart
    },
    isRangeEnd() {
      return this.day.isRangeEnd
    }
  },
  methods: {
    onDateSelected() {
      this.$emit('date-selected', this.day)
    }
  }
}
</script>

<style scoped>
.kit-calendar-day__date {
  width: 100%;
}

[highlighted] {
  background-color: rgb(244, 245, 247);
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
  color: #0052cc;
}

[today]::after {
  background-color: #0052cc;
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
