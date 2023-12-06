<template>
  <Button
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
  </Button>
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
<script>
import Vue from 'vue'
import Button from './KitButton.vue'

export default Vue.extend({
  name: 'KitIconButton',
  components: { Button },
  props: {
    title: {
      type: String,
      required: true
    },
    spacing: {
      type: String,
      default: 'default'
    }
  }
})
</script>
