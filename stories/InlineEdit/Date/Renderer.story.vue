<template>
  <div>
    <h5>Date</h5>
    <p>
      <DateRenderer :date="date" />
    </p>
  </div>
</template>

<script>
import faker from 'faker'
import DateRenderer from '@/components/field-renderers/DateRenderer'

export default {
  components: { DateRenderer },
  data() {
    faker.seed(1)
    return {
      date: faker.date.recent().getTime()
    }
  }
}
</script>
