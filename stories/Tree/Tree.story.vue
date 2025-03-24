<template>
  <div>
    <KitFieldGroup class="search" label="Search">
      <KitInput v-model="search" />
    </KitFieldGroup>
    <Tree v-model="selected" :search="search" :nodes="nodes" />
    <div style="padding: 20px">
      {{ selected }}
    </div>
  </div>
</template>

<script setup lang="ts">
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import KitInput from '@components/Form/KitInput.vue'
import { ref } from 'vue'
import Tree from '@/components/Tree/Tree'

const selected = ref()
const search = ref()

const nodes = [
  { id: '1', label: 'Keyboards' },
  { id: '2', label: 'Displays' },
  {
    id: '3',
    label: 'Computers',
    children: [
      {
        id: '4',
        label: 'Laptops',
        children: [
          { id: '5', label: 'Macbook' },
          { id: '6', label: 'Dell' }
        ]
      },
      { id: '7', label: 'Notebooks' },
      {
        id: '8',
        label: 'PC',
        children: [
          { id: '9', label: 'Windows XP' },
          { id: '10', label: 'Windows 10' },
          { id: '11', label: 'Linux' }
        ]
      }
    ]
  }
]
</script>

<style scoped>
.search {
  max-width: 250px;
}
</style>
