<template>
  <div class="buttons-group">
    <Tooltip
      v-for="placement in placements"
      :key="placement"
      append-to-body
      :placement="placement"
      label="Hello World!">
      <KitButton>Hover over me!</KitButton>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import KitButton from '@components/Button/KitButton.vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'

const placements = ['top', 'right', 'bottom', 'left']
</script>
<style scoped>
.buttons-group {
  max-width: 800px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
</style>
