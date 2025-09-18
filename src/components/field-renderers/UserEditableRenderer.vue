<template>
  <KitInlineEdit
    v-if="editable && !avatarOnly"
    :value="user"
    class="user-inline-edit"
    :confirm="confirm"
    :placement="placement"
    @save-requested="onSaveRequested">
    <template #editor="{ props }">
      <KitSelect
        :value="props.value"
        :options="users"
        :open-on-focus="true"
        :is-clearable="clearable"
        :async="true"
        placeholder="Type to search..."
        :normalizer="normalizer"
        :is-invalid="props.isInvalid"
        :is-focused="props.isFocused"
        :is-loading="props.isLoading"
        :is-fetching="isFetching"
        :confirm="confirm"
        @open="loadInitialOptions"
        @search-change="onSearchChange"
        @input="props.input"
        @blur="props.blur"
        @confirm="props.confirm"
        @focus="props.focus"
        @cancel="props.cancel">
        <template #option="{ option }">
          <div class="label">
            <UserRenderer :tag="tag" :user="option" :avatar-only="avatarOnly" />
          </div>
        </template>
        <template #selected="{ selected }">
          <div class="label">
            <UserRenderer :tag="tag" :user="selected" :avatar-only="avatarOnly" />
          </div>
        </template>
      </KitSelect>
    </template>
    <slot>
      <UserRenderer :tag="tag" :user="user" :avatar-only="avatarOnly" />
    </slot>
  </KitInlineEdit>
  <UserRenderer v-else :tag="tag" :user="user" :avatar-only="avatarOnly" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '@components/field-renderers/types'
import { debounce } from '@components/utils'
import KitSelect from '../Select/KitSelect.vue'
import KitInlineEdit from '../Form/KitInlineEdit.vue'
import UserRenderer from './UserRenderer.vue'

type Props = {
  user?: User
  editable?: boolean
  placement?: string
  avatarOnly?: boolean
  loadOptions: (query?: string) => { data: unknown[] }
  tag?: string
  mapper?: (users: unknown[]) => User[]
  initialOptions?: unknown[]
  clearable?: boolean
  confirm?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  editable: true,
  placement: 'right',
  avatarOnly: false,
  tag: 'span',
  mapper: l => l,
  initialOptions: () => [],
  clearable: true,
  confirm: true
})

const emit = defineEmits<{
  (event: 'save-requested', data?: User, callback: (e?: Error) => void)
}>()

const users = ref([])
const isFetching = ref(false)

const onSearchChange = debounce(async function(query) {
  isFetching.value = true
  try {
    const { data: users } = await loadOptions(query)
    users.value = props.mapper(users)
  } finally {
    isFetching.value = false
  }
}, 200)

function onSaveRequested(user, callback) {
  emit('save-requested', user, callback)
}

function normalizer(user: User) {
  return {
    id: user && user.key,
    label: user && user.name,
    value: user
  }
}

function loadInitialOptions() {
  users.value = props.initialOptions
}

</script>

<style scoped>
.user-inline-edit {
  line-height: 24px;
}
</style>
