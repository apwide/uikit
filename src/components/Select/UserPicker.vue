<template>
  <KitSelect
    :value="value"
    :options="users"
    :async="true"
    :multi="multi"
    :is-focused="isFocused"
    :is-fetching="isFetching"
    :placeholder="placeholder"
    :normalizer="normalizer"
    v-on="$listeners"
    @open="loadInitialOptions"
    @search-change="debouncedGetUsers">
    <template #option="{ option }">
      <div class="label">
        <UserRenderer tag="span" :user="option" />
      </div>
    </template>
    <template #selected="{ selected }">
      <div class="label">
        <UserRenderer tag="span" :user="selected" />
      </div>
    </template>
    <template #tag="{ tag }">
      <div class="user-tag">
        <UserRenderer appearance="micro" tag="span" :user="tag.value" />
      </div>
    </template>
  </KitSelect>
</template>

<script setup lang="ts">
import pDebounce from 'p-debounce'
import { computed, ref } from 'vue'
import UserRenderer from '../field-renderers/UserRenderer.vue'
import KitSelect from './KitSelect.vue'

type User = { key: string; name: string; disabled: boolean }
type GetUsers = (searchTerm: unknown) => Promise<{ data: User[] }>
type Mapper = (input: User[]) => User[]

type Props = {
  getUsers: GetUsers
  value?: string | User | User[]
  multi?: boolean
  isFocused?: boolean

  mapper?: Mapper
  placeholder?: string
  searchPromptText?: string
  initialOptions?: User[]
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  mapper: (list) => list,
  placeholder: 'Type to search...',
  searchPromptText: 'Type to search...',
  initialOptions: () => []
})

const users = ref<User[]>([])
const isFetching = ref(false)
const debouncedGetUsers = computed(() => pDebounce(onSearchChange, 200))

function loadInitialOptions() {
  users.value = props.initialOptions
}

async function onSearchChange(query: string) {
  if (!query) return
  isFetching.value = true
  const { data } = await props.getUsers(query)
  users.value = props.mapper(data)
  isFetching.value = false
}

function normalizer(user: User) {
  return {
    id: user.key,
    label: user.name,
    value: user,
    disabled: user.disabled
  }
}
</script>
<style scoped>
.user-tag {
  padding: 2px 4px 2px 4px;
}
</style>
