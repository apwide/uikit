<template>
  <div class="image-container" :loading="isLoading">
    <img v-if="url" class="image" :src="url" alt="attached image" :height="height" :width="width" />
    <div v-else class="placeholder" :style="{ width: `${placeholderSize}px`, height: `${placeholderSize}px` }" />
    <div v-if="showActions && (url || $slots.actions)" class="actions">
      <a v-if="url && zoomable" :href="url" target="_blank">
        <KitButton class="action-button" appearance="subtle">
          <SearchIcon />
        </KitButton>
      </a>
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import KitButton from '../Button/KitButton.vue'
import SearchIcon from '../Icon/aui/SearchIcon'

type Props = {
  url?: string
  height?: string | number
  width?: string | number
  showActions?: boolean
  zoomable?: boolean
  isLoading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  height: 24,
  width: 24,
  showActions: false,
  zoomable: true,
  isLoading: false
})

const placeholderSize = computed(() => {
  const height = +props.height || Number.POSITIVE_INFINITY
  const width = +props.width || Number.POSITIVE_INFINITY
  return Math.min(width, height) || 100
})

</script>

<style scoped>
.image-container {
  display: inline-flex;
  position: relative;
}

.image {
  border-radius: 3px;
  display: inline-flex;
  object-fit: scale-down;
  transition: opacity 0.25s;
  max-width: 100%;
}

.image-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 3px;
  animation: loading 1s infinite;
  background-image: linear-gradient(
    90deg,
    rgba(9, 30, 66, 0.08) 30%,
    rgba(9, 30, 66, 0.16) 50%,
    rgba(9, 30, 66, 0.08) 70%
  );
  background-size: 300%;
  background-position: 0% 0%;
  pointer-events: none;
  transition: opacity 0.25s;
}

.placeholder {
  border-radius: 3px;
  background: rgba(9, 30, 66, 0.08);
}

.image-container[loading]::after {
  opacity: 1;
}

.image-container[loading] .image {
  opacity: 0.5;
}

.actions {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: rgba(9, 30, 66, 0.36);
  transition: opacity 0.25s;
  color: white;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
}

.image-container:hover .actions {
  opacity: 1;
}

.image-container[loading] .actions {
  display: none;
}

.actions :deep(button[appearance='subtle']) {
  color: white;
}

.actions :deep(button[appearance='subtle']:not([selected]):not([disabled]):active) {
  color: white;
}

.actions :deep(button[appearance='subtle']) {
  height: 36px;
}

.actions :deep(button[appearance='subtle'] .wrapper) {
  padding: 0 2px;
}

@keyframes loading {
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
