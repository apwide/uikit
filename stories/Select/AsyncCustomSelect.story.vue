<template>
  <div class="wrapper">
    <KitFieldGroup class="async-select" label="Async KitSelect">
      <KitSelect
        v-model="value"
        :options="options"
        :is-fetching="isFetching"
        :normalizer="normalizer"
        :async="true"
        placeholder="Type to search..."
        @search-change="onGetSuggestions">
        <template #option="{ option }">
          <div class="label">
            <img height="24" :src="option.avatar" alt="" />
            <span>{{ option.name }}</span>
          </div>
        </template>
        <template #selected="{ selected }">
          <div class="label">
            <img class="avatar" height="24" :src="selected.avatar" alt="" />
            <span>{{ selected.name }}</span>
          </div>
        </template>
      </KitSelect>
    </KitFieldGroup>
    <table>
      <thead>
        <tr>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import pDebounce from 'p-debounce'
import { ref } from 'vue'
import KitSelect from '@components/Select/KitSelect.vue'
import { createPersonsList } from '../api-mocks/people'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'

const list = createPersonsList({}, 50)
const getUsers = (query) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const results = list.filter((user) => user.name.toLowerCase().includes(query.toLowerCase().trim()))
      resolve(results)
    }, 1000)
  })
const debouncedUsers = pDebounce(getUsers, 100)

const value = ref()
const options = ref()
const isFetching = ref(false)

function normalizer(value) {
  return {
    id: value.key,
    label: value.name,
    value
  }
}
async function onGetSuggestions(query) {
  isFetching.value = true
  const results = await debouncedUsers(query)
  isFetching.value = false
  options.value = results
}
</script>
<style scoped>
.wrapper {
  padding: 20px;
}

.async-select {
  max-width: 250px;
}

.label {
  display: flex;
  align-items: center;
}

.avatar {
  border-radius: 50%;
  margin-right: 5px;
}
</style>
