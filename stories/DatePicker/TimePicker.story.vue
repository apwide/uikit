<template>
  <div class="wrapper">
    <TimePicker v-model="date" disabled />
    <h3>With time zones</h3>
    <div class="time-zones">
      <div>
        <p>Pacific/Auckland: {{ date }}</p>
        <TimePicker v-model="date" />
      </div>
      <div>
        <p>Default (system) time zone: {{ date }} is-focused</p>
        <TimePicker v-model="date" />
      </div>
      <div>
        <p>Pacific/Honolulu: {{ date }}</p>
        <TimePicker v-model="date" placeholder="11:00" />
      </div>
    </div>
    <h3>Disabled past dates</h3>
    <p>
      <TimePicker v-model="date" />
    </p>
  </div>
</template>

<script>
import KitTimePicker from '@components/Calendar/KitTimePicker.vue'

export default {
  name: 'TimePickerStory',
  components: { TimePicker: KitTimePicker },
  data() {
    return {
      date: ''
    }
  }
}
</script>

<style scoped>
.time-zones {
  display: flex;
}

.time-zones > * {
  margin: 0 20px 0 0;
}
</style>
