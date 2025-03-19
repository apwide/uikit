<template>
  <KitProgressBar :progress="progress" />
</template>

<script setup lang="ts">
import KitProgressBar from '@components/ProgressBar/KitProgressBar.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const progress = ref(0)
const timer = ref()

onMounted(() => {
  timer.value = updateProgress()
})

onBeforeUnmount(() => {
  clearTimeout(timer.value)
})

function updateProgress() {
  if (progress.value >= 100) {
    progress.value = 0
  }
  progress.value = progress.value + 5
  return setTimeout(() => {
    updateProgress()
  }, Math.floor(Math.random() * 500) + 200)
}
</script>

<style scoped></style>
