<template>
  <div>
    <h5>Full width</h5>
    <p>
      <NumberLongRenderer :value="value" />
    </p>
    <h5>Limited width</h5>
    <p class="limited-width">
      <NumberLongRenderer :value="value" />
    </p>
  </div>
</template>

<script>
import faker from 'faker'
import NumberLongRenderer from '@/components/field-renderers/NumberLongRenderer'

export default {
  components: { NumberLongRenderer },
  data() {
    faker.seed(1)
    return {
      value: faker.random.number() * 1234
    }
  }
}
</script>

<style scoped>
.limited-width {
  width: 100px;
}
</style>
