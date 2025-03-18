<template>
  <div ref="containerRef" class="kit-color-picker">
    <button type="button" :style="{ cursor: editable ? 'pointer' : 'default' }" @click="handleClickOnTrigger">
      <div class="kit-color-picker__color" :style="style" />
    </button>
    <Popup :is-open="open" :offset="[0, 8]" :target-element="containerRef" placement="bottom-start">
      <div class="kit-color-picker__content" :style="{ gridTemplateColumns: `repeat(${columns}, 1fr)` }">
        <KitColorCard
          v-for="color in colors"
          :key="color"
          :color="color"
          :selected="selected"
          @color-selected="handleColorSelection" />
      </div>
    </Popup>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Popup from '../common/Popup.vue'
import KitColorCard from './KitColorCard.vue'

type Props = {
  value?: string
  // list of color codes
  colors?: string[]
  editable?: boolean
  columns?: number
}

const props = withDefaults(defineProps<Props>(), {
  editable: true,
  value: '#DFE1E1',
  columns: 8,
  colors: () => ['#000', '#0052CC', '#172B4D', '#FF5630', '#FFAB00', '#36B37E', '#00B8D9', '#6554C0']
})

const emit = defineEmits<{
  (event: 'input', newColor: string)
}>()

const open = ref(false)
const containerRef = ref<HTMLDivElement>()

const selected = computed({
  get() {
    return props.value
  },
  set(color: string) {
    emit('input', color)
  }
})
const style = computed(() => ({
  backgroundColor: selected.value
}))

function handleClickOnTrigger() {
  if (props.editable) {
    open.value = !open.value
  }
}

function handleColorSelection(color: string) {
  selected.value = color
  open.value = false
}
</script>

<style scoped>
.kit-color-picker {
  --kit-color-picker-border: #dedede;
}

.kit-dark .kit-color-picker {
  --kit-color-picker-border: #313a41;
}

button {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 6px;
  transition: border-color 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
  padding: 0;
  outline: none;
}

.kit-color-picker__color {
  width: 24px;
  height: 24px;
  border-radius: 3px;
  border: 1px solid var(--kit-color-picker-border);
}

.kit-color-picker__content {
  display: grid;
}
</style>
