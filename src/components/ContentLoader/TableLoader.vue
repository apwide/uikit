<template>
  <div>
    <template v-if="isLoading">
      <ContentLoader
        v-for="row in rows"
        :key="row"
        v-bind="$attrs"
        :view-box="viewBox"
        :preserve-aspect-ratio="preserveAspectRatio"
        :width="width"
        :height="height">
        <rect x="30" y="13" rx="3" ry="3" width="23" height="12" />
        <rect x="70" y="13" rx="3" ry="3" width="78" height="12" />
        <rect x="210" y="13" rx="3" ry="3" :width="117 * random()" height="12" />
        <rect x="360" y="13" rx="3" ry="3" width="83" height="12" />
        <rect x="480" y="13" rx="3" ry="3" :width="250 * random()" height="12" />
        <rect x="750" y="13" rx="3" ry="3" :width="500 * random()" height="12" />
        <rect x="0" y="39" rx="3" ry="3" width="1260" height="0.5" />
      </ContentLoader>
    </template>
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import ContentLoader from './ContentLoader'

const random = () => Math.random() * (1 - 0.7) + 0.7

type Props = {
  rows?: number
  isLoading?: boolean
  viewBox?: string
  width?: string
  height?: string
  preserveAspectRatio?: string
}

withDefaults(defineProps<Props>(), {
  rows: 10,
  isLoading: false,
  viewBox: '0 0 1260 40',
  width: '100%',
  height: '40px',
  preserveAspectRatio: 'none'
})
</script>
