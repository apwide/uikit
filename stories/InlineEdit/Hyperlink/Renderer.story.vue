<template>
  <div>
    <p>
      <KitHyperlinkRenderer :link="link" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitHyperlinkRenderer from '@/components/field-renderers/KitHyperlinkRenderer.vue'

faker.seed(1)
const link = 'https://www.spartez.com'
</script>
