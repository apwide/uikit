<template>
  <div class="wrapper">
    <KitFieldGroup class="picker single" label="Single User">
      <UserPicker v-model="value" data-cy="single" :initial-options="[initialOptions]" :get-users="getUsers" />
    </KitFieldGroup>
    <p>{{ value }}</p>
    <KitFieldGroup class="picker multi" label="Many Users">
      <UserPicker v-model="users" :multi="true" :get-users="getUsers" />
    </KitFieldGroup>
    <p>{{ users }}</p>
  </div>
</template>

<script setup lang="ts">
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import { ref } from 'vue'
import { createPersonsList } from '../api-mocks/people'
import UserPicker from '@/components/Select/UserPicker'

const list = createPersonsList({}, 50)
const [initialOptions] = list
const getUsers = (query) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const results = list.filter((user) => user.name.toLowerCase().includes(query.toLowerCase().trim()))
      resolve({ data: results })
    }, 300)
  })

const value = ref()
const users = ref([])
</script>

<style scoped>
.wrapper {
  padding: 20px;
}

.picker.single {
  max-width: 250px;
}

.picker.multi {
  max-width: 550px;
}
</style>
