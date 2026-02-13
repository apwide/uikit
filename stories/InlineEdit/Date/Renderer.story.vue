<template>
  <div>
    <h5>Date</h5>
    <p>
      <KitDateRenderer :date="date" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitDateRenderer from '@/components/field-renderers/KitDateRenderer.vue'

faker.seed(1)
const date = faker.date.recent().getTime()
</script>
