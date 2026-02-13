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

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import SecureStringLineRenderer from '@components/field-renderers/SecureStringLineRenderer.vue'

faker.seed(1)
const value = faker.lorem.sentence()
</script>

<style scoped>
.limited-width {
  width: 100px;
}
</style>
