<template>
  <div>
    <h5>Date</h5>
    <p>
      <KitDateRenderer :date="date" />
    </p>
  </div>
</template>

<script>
import { faker } from '@faker-js/faker'
import KitDateRenderer from '@/components/field-renderers/KitDateRenderer.vue'

export default {
  components: { KitDateRenderer },
  data() {
    faker.seed(1)
    return {
      date: faker.date.recent().getTime()
    }
  }
}
</script>
