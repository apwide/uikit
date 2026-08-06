<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <KitUserEditableRenderer :user="user" :load-options="loadOptions" @save-requested="onSave" />
    </p>
    <h5>Confirm false:</h5>
    <p>
      <KitUserEditableRenderer :user="user" :load-options="loadOptions" :confirm="false" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitUserEditableRenderer :user="user" :load-options="loadOptions" @save-requested="onSaveError" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitUserEditableRenderer :user="user" :load-options="loadOptions" @save-requested="onSave" :editable="false" />
    </p>
    <h5>Avatar only:</h5>
    <p>
      <KitUserEditableRenderer :user="user" :load-options="loadOptions" @save-requested="onSave" :avatar-only="true" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { debounce } from '@components/utils'
import { createPersonsList } from '../../api-mocks/people'
import KitUserEditableRenderer from '@/components/field-renderers/KitUserEditableRenderer.vue'

const list = createPersonsList({}, 50)
const getUsers = (query) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const results = {
        data: list.filter((user) => user.name.toLowerCase().includes(query.toLowerCase().trim()))
      }
      resolve(results)
    }, 1000)
  })
const debouncedUsers = debounce(getUsers, 100)

const user = ref(undefined)
const loadOptions = (query) => debouncedUsers(query)

function onSave(value, callback) {
  user.value = value || undefined
  callback()
}

function onSaveError(value, callback) {
  setTimeout(() => callback(new Error('Something went wrong')), 100)
}
</script>
