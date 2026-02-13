<template>
  <IconWrapper :size="size" :primary-color="primaryColor" :secondary-color="secondaryColor">
    <svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z" fill="inherit"/></g></svg>
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
