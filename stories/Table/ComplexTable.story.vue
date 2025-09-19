<template>
  <div class="wrapper">
    <KitTable
      ref="tableRef"
      :columns="columns"
      :data="data"
      :sticky-header="true"
      :sticky-left-column="true"
      :sticky-right-column="true"
      :infinite-scroll="infiniteScroll"
      :sorted-by="sortedBy"
      :sorted-desc="sortedDesc"
      :busy="busy"
      @table-bottom-reached="loadMoreData"
      @sorted="onSorted">
      <template #header-email>
        <span style="display: flex; align-items: center; gap: 5px">
          <KitIcon type="envelope" />
          <span> email </span>
        </span>
      </template>
      <template #email="{ value }">
        <a :href="`mailto:${value}`">{{ value }}</a>
      </template>
      <template #action="{ row, cellElement }">
        <KitDropdown label="Actions" @open="dropdownOpen(cellElement)" @close="dropdownClose(cellElement)">
          <KitDropdownItem>Move {{ row.id }}</KitDropdownItem>
          <KitDropdownItem>Edit {{ row.id }}</KitDropdownItem>
          <KitDropdownItem>Delete {{ row.id }}</KitDropdownItem>
        </KitDropdown>
      </template>
    </KitTable>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import { ref } from 'vue'
import KitIcon from '@components/Icon/KitIcon.vue'
import KitDropdownItem from '@components/Dropdown/KitDropdownItem.vue'
import KitTable from '@/components/Table/KitTable.vue'
import KitDropdown from '@/components/Dropdown/KitDropdown.vue'

const columns = [
  {
    id: 'id',
    name: 'ID',
    width: 70,
    sortable: true
  },
  {
    id: 'account',
    name: 'Acc',
    width: 120,
    sortable: true
  },
  {
    id: 'name',
    name: 'Name',
    sortable: true
  },
  {
    id: 'job',
    name: 'Job',
    minWidth: 250,
    sortable: true
  },
  {
    id: 'address',
    name: 'Address',
    minWidth: 250,
    sortable: true
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

const data = ref(
  Array.from({ length: 10 }).map((_, index) => ({
    id: index,
    account: faker.finance.accountNumber(),
    name: faker.person.firstName(),
    address: faker.location.country(),
    email: faker.internet.email(),
    job: faker.person.jobTitle()
  }))
)

const lastId = ref(10)
const infiniteScroll = ref(false)
const busy = ref(false)
const sortedBy = ref('id')
const sortedDesc = ref(false)

const tableRef = ref()

function loadMoreData(callback) {
  setTimeout(() => {
    if (lastId.value > 30) {
      infiniteScroll.value = false
    } else {
      data.value = [
        ...data.value,
        ...Array.from({ length: 10 }).map((_, index) => ({
          id: lastId.value + index,
          account: faker.finance.accountNumber(),
          name: faker.person.firstName(),
          address: faker.location.country(),
          email: faker.internet.email(),
          job: faker.person.jobTitle()
        }))
      ]
      lastId.value += 10
    }
    callback()
  }, 1000)
}

function onSorted({ id, desc }) {
  busy.value = true
  sortedBy.value = id
  sortedDesc.value = desc
  setTimeout(() => {
    data.value = [...data.value].sort((a, b) => {
      if (a[id] === b[id]) {
        return 0
      }
      const result = a[id] > b[id] ? 1 : -1
      return desc ? result * -1 : result
    })
    busy.value = false
  }, 1000)
}

function dropdownOpen(cellElement) {
  if (cellElement) {
    cellElement.setAttribute('with-dropdown', '')
  }
}

function dropdownClose(cellElement) {
  if (cellElement) {
    cellElement.removeAttribute('with-dropdown')
  }
}
</script>

<style scoped>
.wrapper {
  max-height: 500px;
  max-width: 900px;
  display: flex;
  flex-direction: column;
}

>>> .table-row-cell[with-dropdown] {
  z-index: 100;
}
</style>
