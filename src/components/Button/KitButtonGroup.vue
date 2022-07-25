<template>
  <div class="kit-button-group" :data-spacing="spacing">
    <slot />
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'KitKitButtonGroup',
  props: {
    spacing: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['normal', 'wide', 'narrow'].includes(value)
      }
    }
  }
})
</script>
<style scoped>
.kit-button-group {
  display: flex;
  align-content: baseline;
}
.kit-button-group[data-spacing='narrow'] {
  gap: 0;
}
.kit-button-group[data-spacing='narrow'] >>> button {
  margin-left: -5px;
  margin-right: -5px;
}
.kit-button-group[data-spacing='normal'] {
  gap: 0.01em;
}
.kit-button-group[data-spacing='wide'] {
  gap: 1em;
}
</style>
