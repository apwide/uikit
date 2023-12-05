<template>
  <div class="kit-modal-header__header">
    <component :is="icon" v-if="appearance" class="kit-modal-header__icon" :primary-color="color" />
    <h1 class="kit-modal-header__title">
      {{ heading }}
    </h1>
  </div>
</template>

<script>
import WarningIcon from '../Icon/WarningIcon'
import ErrorIcon from '../Icon/ErrorIcon.vue'

export default {
  name: 'KitHeader',
  components: { WarningIcon, ErrorIcon },
  props: {
    heading: {
      type: String,
      default: ''
    },
    appearance: {
      type: String,
      default: ''
    }
  },
  computed: {
    icon() {
      return this.appearance === 'danger' ? 'ErrorIcon' : 'WarningIcon'
    },
    color() {
      return this.appearance === 'danger' ? '#DE350B' : '#FF991F'
    }
  }
}
</script>

<style scoped>
.kit-modal-header__header {
  display: flex;
  align-items: center;
}

.kit-modal-header__icon {
  margin-right: 8px;
}

.kit-modal-header__title {
  margin-top: 0;
}
</style>
