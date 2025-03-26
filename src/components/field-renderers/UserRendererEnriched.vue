<template>
  <UserEditableRendererEnriched :user="user" :avatar-only="avatarOnly" :editable="false" />
</template>

<script setup lang="ts">
import UserEditableRendererEnriched from './UserEditableRendererEnriched'

type Props = {
  user?: unknown
  avatarOnly?: boolean
}

withDefaults(defineProps<Props>(), {
  avatarOnly: false
})
</script>
