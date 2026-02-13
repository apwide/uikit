<template>
  <IconWrapper :size="size" :primary-color="primaryColor" :secondary-color="secondaryColor">
    <svg viewBox="0 0 24 24"><path d="M10 6h6a1 1 0 0 1 0 2h-6a1 1 0 1 1 0-2zM8 16h6a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm4-8h2l-2 8h-2l2-8z" fill="currentColor" fill-rule="evenodd"/></svg>
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
