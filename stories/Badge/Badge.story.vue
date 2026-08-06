<template>
  <div>
    <div v-for="appearance in appearances" :key="appearance">
      {{ appearance }}
      <Badge value="22" :appearance="appearance" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Badge from '@components/Badge/KitBadge.vue'

const appearances = ['added', 'default', 'important', 'primary', 'removed']
</script>
