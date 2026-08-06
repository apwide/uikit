<template>
  <div class="wrapper">
    <h5>Normal</h5>
    <p>
      <DateRangePicker v-model="range" date-format="yyyy-MM-dd" />
      {{ range }}
    </p>
    <h5>Custom placeholders + disabled typing</h5>
    <p>
      <DateRangePicker v-model="range" from-placeholder="Start" to-placeholder="End" disabled-typing />
      {{ range }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DateRangePicker from '@components/Calendar/KitDateRangePicker.vue'

const range = ref({
  from: undefined,
  to: undefined
})
</script>
