<template>
  <div>
    <KitTable :columns="columns" :data="data" />
  </div>
</template>

<script setup lang="ts">
import faker from 'faker'
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

const data = Array.from({ length: 10 }).map((_, index) => ({
  id: index,
  name: faker.name.firstName(),
  job: faker.name.jobTitle()
}))
</script>
