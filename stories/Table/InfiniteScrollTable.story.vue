<template>
  <div>
    <KitTable :columns="columns" :data="data" :infinite-scroll="infiniteScroll" @table-bottom-reached="loadMoreData" />
  </div>
</template>

<script setup lang="ts">
import faker from 'faker'
import { ref } from 'vue'
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
const data = ref(
  Array.from({ length: 10 }).map((_, index) => ({
    id: index,
    name: faker.name.firstName(),
    job: faker.name.jobTitle()
  }))
)
const infiniteScroll = ref(true)

function loadMoreData(callback) {
  setTimeout(() => {
    const lastId = data.value[data.value.length - 1].id
    if (lastId > 30) {
      infiniteScroll.value = false
    } else {
      data.value = [
        ...data.value,
        ...Array.from({ length: 10 }).map((_, index) => ({
          id: lastId + 1 + index,
          name: faker.name.firstName(),
          job: faker.name.jobTitle()
        }))
      ]
    }
    callback()
  }, 1000)
}
</script>
