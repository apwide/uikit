<template>
  <div class="kit-positioner" :style="{ width: currentWidth, minWidth: currentWidth }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'KitPositionerAbsolute',
  props: {
    width: {
      type: String,
      default: '600px'
    }
  },
  computed: {
    currentWidth() {
      return this.width
    }
  }
}
</script>

<style scoped>
.kit-positioner {
  display: flex;
  flex-direction: column;
  height: calc(100% - 120px);
  left: 0;
  margin: 0 auto;
  max-width: calc(100% - 120px);
  position: relative;
  right: 0;
  top: 60px;
  z-index: 510;
  opacity: 1;
  border-radius: 3px;
  pointer-events: none;
  transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s, opacity 300ms ease;
}
</style>
