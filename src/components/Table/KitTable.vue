<template>
  <div class="kit-table-wrapper">
    <table ref="table">
      <thead :sticky-header="stickyHeader">
        <tr class="kit-table-header-row">
          <TableHeaderCell v-if="dragRows" :column="actualColumns[0]" />
          <TableHeaderCell
            v-for="column in columns"
            :key="column.id"
            :column="column"
            :sorted="sortedBy === column.id"
            :sorted-desc="sortedDesc"
            :sticky-header="stickyHeader"
            @sorted="onSorted(column)">
            <template #header v-if="slots[`header-${column.id}`]">
              <slot :name="`header-${column.id}`" :column="column" />
            </template>
          </TableHeaderCell>
        </tr>
      </thead>
      <KitDraggable
        :enabled="dragEnabled"
        :list="data"
        draggable-class="kit-table-draggable"
        handle-selector=".kit-table__grab-handle"
        @reorder="emit('rows-reordered', $event)">
        <tbody>
          <TableRow
            class="kit-table-draggable"
            v-for="row in data"
            :key="row.id"
            :columns="actualColumns"
            :row="row"
            @dblclick="emit('row-dblclick', { row, event: $event })"
            @click="emit('row-click', { row, event: $event })">
            <template #kitDragHandle>
              <span class="kit-table__grab-handle">
                <KitIcon type="grip-vertical" />
              </span>
            </template>
            <template v-for="column in columns" #[column.id]="props">
              <slot :name="column.id" v-bind="props" />
            </template>
          </TableRow>
        </tbody>
      </KitDraggable>
      <tfoot v-show="infiniteScroll && !showLoadMore">
        <tr>
          <td ref="scrollLoaderRef" :colspan="columns.length" class="kit-infinite-scroll-loader">
            <KitSpinner size="small" />
          </td>
        </tr>
      </tfoot>
      <tfoot v-if="showLoadMore && !infiniteScroll">
        <tr>
          <td :colspan="columns.length">
            <KitButton appearance="subtle" style="width: 100%" @click="emit('load-more')"> Load more</KitButton>
          </td>
        </tr>
      </tfoot>
    </table>
    <div :busy="busy" class="kit-busy-glass">
      <KitSpinner />
    </div>
  </div>
</template>

<script setup lang="ts" generic="T extends BasicRow">
import { BasicRow, Column } from '@components/Table/types'
import { computed, onMounted, ref, useSlots } from 'vue'
import KitSpinner from '../Spinner/KitSpinner.vue'
import KitIcon from '../Icon/KitIcon.vue'
import KitButton from '../Button/KitButton.vue'
import KitDraggable from '../common/KitDraggable'
import TableRow from './TableRow.vue'
import TableHeaderCell from './TableHeaderCell.vue'

type Props = {
  columns: Column[]
  data: T[]
  stickyHeader?: boolean
  defaultColumnMinWidth?: string | number
  infiniteScroll?: boolean
  showLoadMore?: boolean
  busy?: boolean
  sortedBy?: string
  sortedDesc?: boolean
  dragRows?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  defaultColumnMinWidth: 150
})
const emit = defineEmits<{
  (event: 'row-click', payload: { row: T; event: MouseEvent })
  (event: 'row-dblclick', payload: { row: T; event: MouseEvent })
  (event: 'table-bottom-reached', cb: () => void)
  (event: 'sorted', payload: { id: number | string; desc: boolean })
  (event: 'load-more')
  (event: 'rows-reordered', rows: T[])
}>()
const slots = useSlots()

const observer = ref()

const scrollLoaderRef = ref<HTMLTableCellElement>()

const actualColumns = computed<Column[]>(() =>
  props.dragRows ? [{ id: 'kitDragHandle', width: 30 }, ...props.columns] : props.columns
)

const dragEnabled = computed(() => props.dragRows && !props.busy && props.data.length > 0)

function createObserver() {
  if (observer.value) {
    observer.value.unobserve(scrollLoaderRef.value)
  }
  observer.value = new IntersectionObserver((entries) => {
    // TODO: investigate why we got some case of twice the same element in the
    // entries. Seems to be related to the change of size of the observed element
    if (entries.some(({ isIntersecting }) => isIntersecting)) {
      tableBottomReached()
    }
  })
  observer.value.observe(scrollLoaderRef.value)
}

function tableBottomReached() {
  emit('table-bottom-reached', () => {
    createObserver()
  })
}

function onSorted(column) {
  emit('sorted', {
    id: column.id,
    desc: props.sortedBy === column.id ? !props.sortedDesc : false
  })
}

onMounted(() => {
  createObserver()
})
</script>

<style>

</style>

<style scoped>
.kit-table-wrapper {
  --kit-table-bg-color: var(--kit-page-bg-color);
  --kit-table-busy-bg-color: rgba(255, 255, 255, 0.5);
}

body.kit-dark .kit-table-wrapper {
  --kit-table-bg-color: var(--kit-page-bg-color);
  --kit-table-busy-bg-color: rgba(255, 255, 255, 0.5);
}

.kit-table-wrapper {
  width: 100%;
  max-height: 100%;
  overflow: auto;
}

table {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-collapse: collapse;
}

table thead[sticky-header] tr {
  inset-block-start: 0;
  position: sticky;
  background-color: var(--kit-table-bg-color);
  /* required to stay above the eventual position: xxx in the content */
  z-index: 1;
}

table tbody {
  border: none;
}

thead {
  background-color: var(--kit-table-bg-color);
  border: none;
}

table .kit-infinite-scroll-loader {
  box-sizing: border-box;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 5px;
}

.kit-table-wrapper .kit-busy-glass {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  z-index: 200;
}

.kit-table-wrapper .kit-busy-glass[busy] {
  display: flex;
  align-items: center;
  justify-content: center;
}

.kit-table__grab-handle {
  color: #a5adba;
  margin: -10px 0;
  padding: 10px 10px 10px 5px;
  font-size: 0.68em;
  cursor: grab;
}
</style>
