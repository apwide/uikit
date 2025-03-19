<template>
  <div class="menu-section">
    <div v-if="label" class="menu-section-label">
      {{ label }}
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
type Props = {
  label?: string
  separator?: boolean
}

withDefaults(defineProps<Props>(), {
  separator: false
})
</script>

<style scoped>
.menu-section {
  padding: 6px 0;
}

.menu-section-label {
  text-transform: uppercase;
  font-size: 11px;
  line-height: 1.45455;
  font-weight: 700;
  color: rgb(107, 119, 140);
  margin-top: 14px;
  margin-bottom: 6px;
  padding: 0px 12px;
}
</style>
