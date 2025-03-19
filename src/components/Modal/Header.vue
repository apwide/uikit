<template>
  <div class="kit-modal-header__header">
    <component :is="icon" v-if="appearance" class="kit-modal-header__icon" :primary-color="color" />
    <h1 class="kit-modal-header__title">
      {{ heading }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import WarningIcon from '../Icon/aui/WarningIcon'
import ErrorIcon from '../Icon/aui/ErrorIcon'
import { computed } from 'vue'

type Props = {
  heading?: string
  appearance?: string
}

const props = withDefaults(defineProps<Props>(), {
  heading: '',
  appearance: ''
})

const icon = computed(() => props.appearance === 'danger' ? 'ErrorIcon' : 'WarningIcon')
const color = computed(() => props.appearance === 'danger' ? '#DE350B' : '#FF991F')
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
