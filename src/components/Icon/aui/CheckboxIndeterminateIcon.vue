<template>
  <IconWrapper :size="size" :primary-color="primaryColor" :secondary-color="secondaryColor">
    <svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="6" y="6" width="12" height="12" rx="2"/><rect fill="inherit" x="8" y="11" width="8" height="2" rx="1"/></g></svg>
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
