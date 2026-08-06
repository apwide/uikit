<template>
  <IconWrapper :size="size" :primary-color="primaryColor" :secondary-color="secondaryColor">
    <svg viewBox="0 0 24 24"><path d="M13 11V7a1 1 0 0 0-2 0v4H7a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2h-4z" fill="currentColor" fill-rule="evenodd"/></svg>
  </IconWrapper>
</template>

<script setup lang="ts">
import IconWrapper from '../IconWrapper.vue'

type Props = {
  size?: string
  primaryColor?: string
  secondaryColor?: string
}

defineProps<Props>()
</script>
