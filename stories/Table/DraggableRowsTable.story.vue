<template>
  <div>
    <KitTable :columns="columns" :data="data" drag-rows @rows-reordered="reorder" />
  </div>
</template>

<script setup lang="ts">
import faker from 'faker'
import { ref } from 'vue'
import KitTable from '@/components/Table/KitTable.vue'

const initialValues = Array.from({ length: 10 }).map((_, index) => ({
  id: index,
  name: faker.name.firstName(),
  job: faker.name.jobTitle()
}))

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

const data = ref(initialValues)

function reorder(rows) {
  // eslint-disable-next-line no-console
  console.log(rows)
  data.value = rows
}
</script>
