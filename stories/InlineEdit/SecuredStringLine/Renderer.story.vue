<template>
  <div>
    <h5>Full width</h5>
    <p>
      <SecureStringLineRenderer :value="value" />
    </p>
    <h5>100px width</h5>
    <p class="limited-width">
      <SecureStringLineRenderer :value="value" />
    </p>
  </div>
</template>

<script>
import faker from 'faker'
import SecureStringLineRenderer from '../../../src/components/field-renderers/SecureStringLineRenderer'

export default {
  components: { SecureStringLineRenderer },
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
