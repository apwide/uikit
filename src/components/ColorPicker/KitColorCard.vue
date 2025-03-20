<template>
  <div class="kit-color-card__wrapper" @click="handleClick">
    <div class="kit-color-card" :data-cy-color="color" :style="styles">
      <KitIcon v-if="selected === color" type="check" style="color: white" />
    </div>
  </div>
</template>

<script setup lang="ts">
import KitIcon from '@components/Icon/KitIcon.vue'
import { computed } from 'vue'

type Props = {
  color?: string
  selected?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: '#000000',
  selected: '#000000'
})
const emit = defineEmits<{
  (event: 'color-selected', newColor: string)
}>()

const styles = computed(() => ({ backgroundColor: props.color }))

function handleClick() {
  emit('color-selected', props.color)
}
</script>

<style scoped>
.kit-color-card {
  --kit-color-card-border: #dedede;
}

[data-color-mode="dark"] .kit-color-card {
  --kit-color-card-border: #313a41;
}

.kit-color-card__wrapper {
  display: flex;
  margin: 2px;
  box-sizing: border-box;
}

.kit-color-card__wrapper:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: transform 100ms;
}

.kit-color-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  border: 1px solid var(--kit-color-card-border);
}
</style>
