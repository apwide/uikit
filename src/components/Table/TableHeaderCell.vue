<template>
  <th :sortable="column.sortable" :style="style" class="kit-table-header-cell" @click="onClick">
    <span class="kit-table-header-cell__label-wrapper">
      <slot v-if="slots.header" name="header" :column="column" />
      <span v-else>
        {{ column.name }}
      </span>
      <template v-if="column.sortable">
        <ChevronDownIcon v-if="sorted && sortedDesc" size="small" />
        <ChevronUpIcon v-if="sorted && !sortedDesc" size="small" />
      </template>
    </span>
  </th>
</template>

<script setup lang="ts">
import { Column } from '@components/Table/types'
import { computed, useSlots } from 'vue'
import ChevronDownIcon from '../Icon/aui/ChevronDownIcon'
import ChevronUpIcon from '../Icon/aui/ChevronUpIcon'

type Props = {
  column: Column
  stickyHeader?: boolean
  stickyLeft?: boolean
  stickyRight?: boolean
  sorted?: boolean
  sortedDesc?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (event: 'sorted')
}>()
const slots = useSlots()
const style = computed(() => ({
  width: props.column.width ? `${props.column.width}px` : 'auto'
}))

function onClick() {
  if (props.column.sortable) {
    emit('sorted')
  }
}
</script>

<style scoped>
th {
  background-color: white;
  padding: 0;
}

.kit-table-header-cell__label-wrapper {
  box-sizing: border-box;
  min-height: 40px;
  font-weight: bold;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: -0.1px;
  color: rgb(94, 108, 132);
  display: flex;
  border-bottom: 2px solid #dfe1e6;
  padding: 9px 16px 7px;
}

th[sortable]:hover {
  background-color: rgb(244, 245, 247);
  cursor: pointer;
}

.kit-table-header-cell__label-wrapper {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
