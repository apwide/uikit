<template>
  <div>
    <h3>Closed by default</h3>
    <KitCollapsible label="Closed by default" :collapsed="true">
      <p v-for="(p, i) in texts" :key="i">
        {{ p }}
      </p>
    </KitCollapsible>
    <h3>Open by default</h3>
    <KitCollapsible label="Open by default" :collapsed="false">
      <p v-for="(p, i) in texts" :key="i">
        {{ p }}
      </p>
    </KitCollapsible>
    <h3>Keeping the state in session</h3>
    <KitCollapsible label="Stores state" :collapsed="false" store-state>
      <p v-for="(p, i) in texts" :key="i">
        {{ p }}
      </p>
    </KitCollapsible>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitCollapsible from '@components/Collapsible/KitCollapsible.vue'

const texts = Array.from({ length: 4 }).map(() => faker.lorem.paragraph(10))
</script>
