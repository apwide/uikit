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

.kit-select-option[selected] {
  background-color: #42526e;
  color: #fff;
}

.kit-select-option[current] {
  background-color: #ebecf0;
  color: inherit;
}

.kit-select-option[isSelected] {
  background-color: #42526e;
}
</style>
