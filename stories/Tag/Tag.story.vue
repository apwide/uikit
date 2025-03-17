<template>
  <div class="tags">
    <KitTag v-for="color in colors" :key="color" :label="color" :color="color" />
    <KitTag color="standard" label="link" link="#" tag="a" />
  </div>
</template>

<script setup lang="ts">
import KitTag from '@components/Tag/KitTag.vue'

const colors = [
  'standard',
  'green',
  'blue',
  'red',
  'purple',
  'grey',
  'teal',
  'yellow',
  'green-light',
  'blue-light',
  'red-light',
  'purple-light',
  'grey-light',
  'teal-light',
  'yellow-light'
]

</script>
