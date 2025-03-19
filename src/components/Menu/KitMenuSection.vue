<template>
  <div v-if="$scopedSlots.default" class="kit-menu-section">
    <div v-if="title" class="kit-menu-section__title">
      {{ title }}
    </div>
    <slot />
  </div>
</template>
<script setup lang="ts">
type Props = {
  title?: string
}

defineProps<Props>()
</script>
<style scoped>
.kit-menu-section {
  padding: 0 12px 0 12px;
  margin: 8px 0 12px 0;
}

.kit-menu-section__title {
  color: rgb(107, 119, 140);
  font-size: 0.8em;
  line-height: 1;
  text-transform: uppercase;
  min-width: 0;
  margin: 18px 0 18px;
}

.kit-menu-section >>> .kit-menu-item {
  margin: 0 -12px;
}
</style>
