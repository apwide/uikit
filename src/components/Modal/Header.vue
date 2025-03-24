<template>
  <div class="kit-modal-header__header">
    <ErrorIcon v-if="appearance === 'danger'" class="kit-modal-header__icon" :primary-color="color" />
    <WarningIcon v-else-if="!!appearance" class="kit-modal-header__icon" :primary-color="color" />
    <h1 class="kit-modal-header__title">
      {{ heading }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import WarningIcon from '../Icon/aui/WarningIcon'
import ErrorIcon from '../Icon/aui/ErrorIcon'

type Props = {
  heading?: string
  appearance?: string
}

const props = withDefaults(defineProps<Props>(), {
  heading: '',
  appearance: ''
})

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
