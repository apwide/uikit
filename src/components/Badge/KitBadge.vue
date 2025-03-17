<template>
  <span class="kit-badge">{{ value }}</span>
</template>

<script setup lang="ts">
type Props = {
  value?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  value: '-'
})
</script>

<style scoped>
.kit-badge {
  display: inline-block;
  font-size: 12px;
  font-weight: normal;
  line-height: 1;
  min-width: 1px;
  text-align: center;
  border-radius: 24px;
  padding: 2px 6px;
  box-sizing: border-box;
  flex-shrink: 0;
}

.kit-badge:empty::after {
  display: inline-block;
  content: '-';
}

.kit-badge[appearance='added'] {
  background-color: #e3fcef;
  color: #006644;
}

.kit-badge[appearance='default'] {
  background-color: #dfe1e6;
  color: #172b4d;
}

.kit-badge[appearance='important'] {
  background-color: #de350b;
  color: #ffffff;
}

.kit-badge[appearance='primary'] {
  background-color: #0052cc;
  color: #ffffff;
}

.kit-badge[appearance='removed'] {
  background-color: #ffebe6;
  color: #bf2600;
}
</style>
