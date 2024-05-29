<template>
  <tr
    class="kit-table-row"
    @click="emit('click', $event)"
    @dblclick="emit('dblclick', $event)"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <TableRowCell v-for="column in columns" :key="column.id" :value="row[column.id]">
      <template #default="p">
        <slot :name="column.id" :row="row" :is-active-row="isActiveRow" v-bind="p">
          <span class="table-row-cell__value">
            {{ row[column.id] }}
          </span>
        </slot>
      </template>
    </TableRowCell>
  </tr>
</template>

<script setup lang="ts" generic="T extends BasicRow">
import { ref } from 'vue'
import { BasicRow, Column } from '@components/Table/types'
import TableRowCell from './TableRowCell.vue'

type Props = {
  columns: Column[]
  row: T
}

defineProps<Props>()

const emit = defineEmits<{
  (event: 'click', payload: PointerEvent)
  (event: 'dblclick', payload: PointerEvent)
}>()

const isActiveRow = ref(false)

function handleMouseEnter() {
  isActiveRow.value = true
}

function handleMouseLeave() {
  isActiveRow.value = false
}
</script>

<style scoped>
.kit-table-row:hover > .kit-table-row-cell {
  background-color: #f4f5f7;
}
</style>
