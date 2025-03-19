<template>
  <div class="kit-progress-bar-wrapper">
    <div v-if="showLabels" ref="labels" class="labels">
      <span class="label">{{ label }}</span>
      <span>{{ progress }}%</span>
    </div>
    <div class="kit-progress-bar">
      <span ref="progress" class="progress" :style="{ width: `${progress}%`, transitionDuration }" />
    </div>
  </div>
</template>

<script setup lang="ts">

type Props = {
  progress?: number
  showLabels?: boolean
  label?: string
  transitionDuration?: string
}

const props = withDefaults(defineProps<Props>(), {
  progress: 0,
  showLabels: true,
  label: 'Processing'
})
</script>

<style scoped>
.kit-progress-bar {
  background: rgba(9, 30, 66, 0.13);
  border-radius: 3px;
  height: 6px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.labels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.labels .label::first-letter {
  text-transform: capitalize;
}

.kit-progress-bar .progress {
  left: 0;
  width: 0%;
  background: #42526e;
  border-radius: 3px;
  transition: width 0.5s;
  display: block;
  height: 6px;
  position: absolute;
}
</style>
