<template>
  <div>
    <KitButton appearance="primary" @click="start"> Start </KitButton>
    <KitButton @click="finish"> Finish </KitButton>
  </div>
</template>

<script setup lang="ts">
import KitButton from '@components/Button/KitButton.vue'
import { onMounted, ref } from 'vue'
import Progress from '@/components/Progress/progress'

const progress = ref<Progress>()

function start() {
  progress.value.start()
}

function finish() {
  progress.value.finish()
}

onMounted(() => {
  progress.value = new Progress()
})
</script>

<style scoped></style>
