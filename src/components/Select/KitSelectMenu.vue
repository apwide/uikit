<template>
  <div ref="menuRef" class="kit-select-menu" tabindex="-1" @mousedown.prevent>
    <div class="kit-select-menu-inner">
      <KitSelectOption
        v-for="(item, index) in options"
        :key="`${item.id}-${index}`"
        :selected-id="selectedId"
        :option="item"
        :index="index"
        :current-suggestion-index="currentSuggestionIndex"
        data-cy="select-option"
        @mouseover="onMouseOver"
        @option-selected="onOptionSelected">
        <template #option="{ option, isCurrent }">
          <slot name="option" :is-current="isCurrent" :option="option" />
        </template>
      </KitSelectOption>
      <div v-if="!hasSuggestions" data-cy="no-options" class="kit-select-menu__no-options">
        {{ !containsQuery && async ? placeholder : noOptionsMessage }}
      </div>
    </div>
    <div v-if="$slots.default" @mouseover="resetIndex">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { Value } from '@components/Select/types'
import KitSelectOption from './KitSelectOption.vue'

type Props = {
  options?: Value<unknown>[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selected?: any /* Value<unknown> | Value<unknown>[] error on loading component */
  currentSuggestionIndex?: number
  hasSuggestions?: boolean
  containsQuery?: boolean
  async?: boolean
  appendToBody: boolean
  noOptionsMessage?: string
  placeholder?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (event: 'update-popper-position')
  (event: 'option-selected', selected: Value<unknown>)
  (event: 'mouseover', index: number | undefined)
}>()

const selectedId = computed(() => (!Array.isArray(props.selected) ? props.selected?.id : undefined))
const menuRef = ref<HTMLDivElement>()

onMounted(() => {
  if (props.appendToBody) {
    document.body.appendChild(menuRef.value)
    setTimeout(() => {
      emit('update-popper-position')
    }, 0)
  }
})

onBeforeUnmount(() => {
  if (props.appendToBody) {
    menuRef.value?.remove()
  }
})

function onOptionSelected(option: Value<unknown>) {
  emit('option-selected', option)
}

function onMouseOver(index) {
  emit('mouseover', index)
}

function resetIndex() {
  emit('mouseover', undefined)
}
</script>

<style scoped>
.kit-select-menu {
  background-color: var(--kit-select-menu-bg-color);
  box-shadow: var(--kit-overlay-shadow);
  border: var(--kit-overlay-border);
  margin-bottom: 8px;
  margin-top: 0;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
}

.kit-select-menu-inner {
  max-height: 300px;
  overflow-y: auto;
  padding-bottom: 8px;
  padding-top: 8px;
  box-sizing: border-box;
}

.kit-select-menu__no-options {
  padding: 6px 12px;
  text-align: center;
}
</style>
