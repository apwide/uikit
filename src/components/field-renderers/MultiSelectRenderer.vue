<template>
  <div ref="overflowContainer" class="multiselect overflow-container">
    <span v-for="(value, i) in visibleValues" :key="i" ref="tag" class="tag" :title="value">
      {{ value }}
    </span>
    <KitButton v-if="hiddenValues.length > 0" ref="target" spacing="none" :is-selected="isOpen" @click="toggleDropdown">
      +{{ hiddenValues.length }}
    </KitButton>
    <Popper v-if="isOpen" ref="popper" :target-element="$refs.target.$el" offset="0,5" placement="bottom-end">
      <div ref="dropdown" class="dropdown-list">
        <div v-for="(value, i) in hiddenValues" :key="i" class="item" :title="value">
          {{ value }}
        </div>
      </div>
    </Popper>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, onUpdated, ref } from 'vue'
import { debounce } from '@components/utils'
import Popper from '../Popper/Popper'
import KitButton from '../Button/KitButton.vue'

type Props = {
  selectedValues?: Array
}

const props = withDefaults(defineProps<Props>(), {
  selectedValues: () => []
})

const overflowContainer = ref<HTMLDivElement>()
const isOpen = ref(false)
const visibleCount = ref(0)
const breakPoints = []

const visibleValues = computed(() => props.selectedValues.slice(0, visibleCount.value))
const hiddenValues = computed(() => props.selectedValues.slice(visibleCount.value))

onMounted(() => {
  window.addEventListener('resize', handleResize)
  checkOverflow()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

onUpdated(() => {
  checkOverflow()
})

const handleResize = debounce(() => checkOverflow(), 100)

function checkOverflow() {
  if (!overflowContainer.value) {
    return
  }
  const hasOverflow = overflowContainer.value.scrollWidth > overflowContainer.value.clientWidth
  if (hasOverflow) {
    breakPoints[visibleCount.value] = overflowContainer.value.clientWidth
    visibleCount.value -= 1
  }
  while (
    overflowContainer.value.clientWidth > breakPoints[visibleCount.value + 1] &&
    visibleCount.value < selectedValues.value.length
    ) {
    visibleCount.value += 1
  }
}

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

(() => {
  visibleCount.value = props.selectedValues.length
})()

</script>

<style scoped>
.multiselect {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
}

.tag {
  display: block;
  font-size: 14px;
  font-weight: normal;
  flex-shrink: 0;
  vertical-align: middle;
  margin-left: 4px;
  margin-right: 4px;
  max-width: 180px;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 4px;
  overflow: hidden;
  background-color: rgba(9, 30, 66, 0.08);
  color: rgb(37, 56, 88);
  cursor: default;
  height: 20px;
  border-radius: 3px;
}

.multiselect > .tag:first-child {
  margin-left: 0;
}

.multiselect > .tag:last-child,
.ellipsis {
  margin-right: 0;
}

.ellipsis {
  background-color: rgba(9, 30, 66, 0.08);
}

.ellipsis:hover {
  background-color: rgba(9, 30, 66, 0.04);
  cursor: pointer;
}

.dropdown-list {
  top: 0;
  left: 0;
  position: absolute;
  z-index: 1;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
  box-sizing: border-box;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  padding: 4px 0px;
}

.item {
  padding: 6px 12px 6px;
}
</style>
