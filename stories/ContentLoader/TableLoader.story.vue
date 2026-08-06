<template>
  <div>
    <p>
      <button @click="load">load</button>
      <button @click="resolve">resolve</button>
    </p>

    <TableLoader :is-loading="isLoading">
      <Table :columns="columns" :data="rows" />
    </TableLoader>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { faker } from '@faker-js/faker'
import TableLoader from '@/components/ContentLoader/TableLoader.vue'
import Table from '@/components/Table/KitTable.vue'

const isLoading = ref(true)
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
const rows = Array.from({ length: 10 }).map((_, index) => ({
  id: index,
  name: faker.person.firstName(),
  job: faker.person.jobTitle()
}))

function resolve() {
  isLoading.value = false
}
function load() {
  isLoading.value = true
}
</script>
