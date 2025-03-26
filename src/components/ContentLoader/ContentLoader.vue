<template>
  <svg
    style="display: flex"
    :viewBox="viewBox"
    :width="width"
    :height="height"
    version="1.1"
    :preserveAspectRatio="preserveAspectRatio">
    <rect :style="fill" color="yellow" :clip-path="clipPath" x="0" y="0" width="100%" height="100%" />

    <defs>
      <clipPath :id="idClip">
        <rect v-if="!$slots['default']" x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
        <slot />
      </clipPath>

      <linearGradient :id="idGradient">
        <stop offset="0%" :stop-color="primaryColor" :stop-opacity="primaryOpacity">
          <animate v-if="animate" attributeName="offset" values="-2; 1" :dur="speed" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" :stop-color="secondaryColor" :stop-opacity="secondaryOpacity">
          <animate v-if="animate" attributeName="offset" values="-1.5; 1.5" :dur="speed" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" :stop-color="primaryColor" :stop-opacity="primaryOpacity">
          <animate v-if="animate" attributeName="offset" values="-1; 2" :dur="speed" repeatCount="indefinite" />
        </stop>
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const uid = () => Math.random().toString(36).substring(2)

type Props = {
  speed?: number
  preserveAspectRatio?: string
  baseUrl?: string
  primaryColor?: string
  secondaryColor?: string
  primaryOpacity?: number
  secondaryOpacity?: number
  uniqueKey?: string
  animate?: boolean
  viewBox?: string
  width?: string | number
  height?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  speed: 2,
  preserveAspectRatio: 'none',
  baseUrl: '',
  primaryColor: '#f9f9f9',
  secondaryColor: '#ecebeb',
  primaryOpacity: 1,
  secondaryOpacity: 1,
  uniqueKey: '',
  animate: true,
  width: '300px',
  height: '20px',
})

const fill = computed(() => {
  return { fill: `url(${props.baseUrl}#${idGradient.value})` }
})

const idClip = computed(() => {
  return props.uniqueKey ? `${props.uniqueKey}-idClip` : uid()
})

const idGradient = computed(() => {
  return props.uniqueKey ? `${props.uniqueKey}-idGradient` : uid()
})

const clipPath = computed(() => {
  return `url(${props.baseUrl}#${idClip.value})`
})
</script>
