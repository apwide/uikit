<template>
  <div class="kit-bordered-panel-row">
    <div class="kit-bordered-panel-row__key" @mouseenter="showAfterLabel = true" @mouseleave="showAfterLabel = false">
      <slot name="label">
        <span class="kit-bordered-panel-row__default-label">{{ label }}</span>
      </slot>
      <span v-show="forceShowAfter || showAfterLabel">
        <slot name="after-label" />
      </span>
    </div>
    <div class="kit-bordered-panel-row__value">
      <slot>{{ value }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Props = {
  label?: string
  value?: string
  forceShowAfter?: boolean
}

withDefaults(defineProps<Props>(), {
  forceShowAfter: false
})

const showAfterLabel = ref(false)
</script>

<style scoped>
.kit-bordered-panel-row {
  margin-top: 0;
  padding-bottom: 16px;
  display: flex;
  align-items: first baseline;
}

.kit-bordered-panel-row__key {
  color: var(--kit-bordered-panel-row-text);
  min-width: 120px;
  width: 40%;
  max-width: 170px;
  display: flex;
  align-items: first baseline;
  padding-right: 18px;
}

.kit-bordered-panel-row__default-label {
  margin-right: 5px;
  font-weight: 500;
  letter-spacing: -0.24px;
}

.kit-bordered-panel-row__value {
  width: 60%;
  min-width: 280px;
}
</style>
