<template>
  <div>
    <FieldGroup label="Select color">
      <KitColorPicker v-model="color" />
      selected: {{ color }}
    </FieldGroup>
    <FieldGroup label="Custom color list">
      <KitColorPicker v-model="color" :colors="customColors" :columns="9" />
      selected: {{ color }}
    </FieldGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitColorPicker from '@components/ColorPicker/KitColorPicker.vue'
import FieldGroup from '@/components/Form/FieldGroup.vue'

const color = ref('#0052CC')

const customColors = [
  '#388bff',
  '#42b2d7',
  '#2abb7f',
  '#82b536',
  '#cf9f02',
  '#f38a3f',
  '#f15b50',
  '#da62ac',
  '#8f7ee7',
  '#0055cc',
  '#206a83',
  '#216e4e',
  '#4c6b1f',
  '#7f5f01',
  '#a54800',
  '#ae2e24',
  '#943d73',
  '#5e4db2'
]
</script>
