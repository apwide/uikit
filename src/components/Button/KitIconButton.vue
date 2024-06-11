<template>
  <KitButton
    appearance="subtle"
    :spacing="spacing"
    class="kit-icon-button"
    v-bind="$attrs"
    :title="title"
    v-on="$listeners">
    <template #icon-before>
      <slot />
      <span class="kit-screen-reader">{{ title }}</span>
    </template>
  </KitButton>
</template>

<style scoped>
/* cancel specific styles from Button */
.kit-icon-button {
  /* Use KitButtonGroup to align several KitIconButtons */
  margin-left: 0;
}
.kit-screen-reader {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
<script setup lang="ts">
import { KitButtonSpacing } from '@components/Button/KitButton.types'
import KitButton from './KitButton.vue'

type Props = {
  title: string
  spacing?: KitButtonSpacing
}

const props = withDefaults(defineProps<Props>(), {
  spacing: 'default'
})
</script>
