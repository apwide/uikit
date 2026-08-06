<template>
  <span class="input-label">
    <Checked v-if="value" size="small" primary-color="#36B37E" />
    <span v-else class="icon" />
    <span v-if="label">{{ label }}</span>
  </span>
</template>

<script setup lang="ts">
import Checked from '../Icon/aui/EditorDoneIcon'

type Props = {
  value?: boolean
  label?: string
}

withDefaults(defineProps<Props>(), {
  value: false,
  label: ''
})
</script>

<style scoped>
.icon {
  display: inline-block;
  position: relative;
  font-size: 20px;
  height: 20px;
  width: 20px;
}

.input-label {
  display: flex;
  align-items: center;
}
</style>
