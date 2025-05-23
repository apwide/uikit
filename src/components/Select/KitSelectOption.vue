<template>
  <div
    ref="optionRef"
    :selected="isSelected"
    class="kit-select-option"
    :current="current"
    @click.stop="onOptionSelected"
    @mouseover="onMouseOver">
    <slot name="option" :option="option.value" :is-current="current">
      {{ option.label }}
    </slot>
  </div>
</template>

<script setup lang="ts" generic="T extends { id: number | string }">
import { computed, nextTick, ref, watch } from 'vue'
import { Value } from '@components/Select/types'

type Props = {
  option: Value<T>
  index?: number
  selectedId?: number | string
  currentSuggestionIndex?: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (event: 'option-selected', option: Value<T>)
  (event: 'mouseover', index: number)
}>()
const optionRef = ref<HTMLDivElement>()
const isSelected = computed(() => props.selectedId === props.option.id)
const current = computed(() => props.currentSuggestionIndex === props.index)

function onOptionSelected() {
  emit('option-selected', props.option)
}

function onMouseOver() {
  emit('mouseover', props.index)
}

watch(current, async (isCurrent) => {
  if (isCurrent) {
    await nextTick()
    if (!optionRef.value) {
      return
    }
    const isMicrosoftBrowser = new RegExp(['MSIE ', 'Edge/'].join('|')).test(navigator.userAgent)
    if (isMicrosoftBrowser) {
      return
    }
    optionRef.value.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    })
  }
})
</script>

<style scoped>
.kit-select-option {
  cursor: pointer;
  display: block;
  font-size: inherit;
  width: 100%;
  box-sizing: border-box;
  padding: 6px 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.kit-select-option:hover {
   box-shadow: var(--kit-select-option-hover-shadow);
}

.kit-select-option[selected] {
  background-color: var(--kit-select-option-selected-bg);
  color: var(--kit-select-option-selected-text);
}

.kit-select-option[selected]:hover {
  background-color: var(--kit-select-option-selected-hover-bg);
  color: var(--kit-select-option-selected-hover-text);
}

.kit-select-option[current] {
  background-color: var(--kit-select-option-current-bg);
  color: inherit;
}

.kit-select-option[isSelected] {
  background-color: var(--kit-select-option-selected-bg);
}
</style>
