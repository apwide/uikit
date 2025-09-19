<template>
  <div class="wrapper">
    <KitTable :columns="columns" :data="data" :sticky-header="true" />
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitTable from '@/components/Table/KitTable.vue'

const columns = [
  {
    id: 'id',
    name: 'ID',
    width: 70
  },
  {
    id: 'name',
    name: 'Name'
  },
  {
    id: 'job',
    name: 'Job'
  }
]

const data = Array.from({ length: 100 }).map((_, index) => ({
  id: index,
  name: faker.person.firstName(),
  job: faker.person.jobTitle()
}))
</script>

<style scoped>
.wrapper {
  height: 300px;
}
</style>
