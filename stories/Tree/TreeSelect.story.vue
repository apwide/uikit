<template>
  <KitFieldGroup class="treeselect" label="TreeSelect">
    <TreeSelect v-model="value" :options="nodes" placeholder="Select item">
      <template v-slot:selected="{ selected, ancestors }">
        <span>{{ buildPath(selected, ancestors) }}</span>
      </template>
    </TreeSelect>
    <div style="padding: 20px">
      {{ value }}
    </div>
  </KitFieldGroup>
</template>

<script setup lang="ts">
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import TreeSelect from '@/components/Select/TreeSelect/TreeSelect'
import { ref } from 'vue'

const value = ref()
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

function buildPath(selected, ancestors) {
  if (!selected.label) return ''
  if (!ancestors.length) {
    return selected.label
  }
  return `${ancestors.map((n) => n.label).join('/')}/${selected.label}`
}

</script>
<style scoped>
.treeselect {
  max-width: 400px;
}
</style>
