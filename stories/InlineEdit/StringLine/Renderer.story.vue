<template>
  <div>
    <h5>Full width</h5>
    <p>
      <KitStringLineRenderer :value="value" />
    </p>
    <h5>100px width</h5>
    <p class="limited-width">
      <KitStringLineRenderer :value="value" />
    </p>
  </div>
</template>

<script>
import { faker } from '@faker-js/faker'
import KitStringLineRenderer from '@/components/field-renderers/KitStringLineRenderer'

export default {
  components: { KitStringLineRenderer },
  data() {
    faker.seed(1)
    return {
      value: faker.lorem.sentence()
    }
  }
}
</script>

<style scoped>
.limited-width {
  width: 100px;
}
</style>
