<template>
  <div class="wrapper">
    <KitTable :columns="columns" :data="data">
      <template #email="{ value }">
        <a :href="`mailto:${value}`">{{ value }}</a>
      </template>
      <template #action="{ row }">
        <KitButton>Delete {{ row.id }}</KitButton>
      </template>
    </KitTable>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitButton from '@components/Button/KitButton.vue'
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
    name: 'Job',
    minWidth: 250
  },
  {
    id: 'email',
    name: 'Email',
    minWidth: 250
  },
  {
    id: 'action',
    width: 130
  }
]

const data = Array.from({ length: 100 }).map((_, index) => ({
  id: index,
  name: faker.person.firstName(),
  email: faker.internet.email(),
  job: faker.person.jobTitle()
}))
</script>

<style scoped>
.wrapper {
  height: 300px;
}
</style>
