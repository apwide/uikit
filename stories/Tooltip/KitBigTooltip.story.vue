<template>
  <div class="buttons-group">
    <KitBigTooltip
      placement="top"
    >
      <template #trigger>
        <KitButton>Hover over me!</KitButton>
      </template>
      <template #default="{ hide }">
        <h1 id="kit-bigtooltip-content">My Detail</h1>
        <p>
          Here is an example of tooltip
        </p>
        <KitButton @click="hide">
          Close
        </KitButton>
      </template>
    </KitBigTooltip>
  </div>
</template>

<script setup lang="ts">
import KitButton from '@components/Button/KitButton.vue'
import KitBigTooltip from '@components/Tooltip/KitBigTooltip.vue'

</script>
<style scoped>
.buttons-group {
  max-width: 800px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
</style>
