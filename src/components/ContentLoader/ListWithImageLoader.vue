<template>
  <div>
    <ContentLoader v-for="item in items" :key="item" view-box="0 0 140 54" height="54px" width="140px">
      <rect x="0" y="7" :rx="3" :ry="3" :width="24" :height="24" />
      <rect :x="32" y="2" :rx="3" :ry="3" :width="80" :height="12" />
      <rect :x="32" :y="19" :rx="3" :ry="3" :width="100" :height="16" />
    </ContentLoader>
  </div>
</template>

<script setup lang="ts">
import ContentLoader from './ContentLoader'

type Props = {
  items?: number
}

withDefaults(defineProps<Props>(), {
  items: 3
})
</script>
