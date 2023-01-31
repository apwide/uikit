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
            @sorted="onSorted(column)" />
        </tr>
      </thead>
      <KitDraggable
        :enabled="dragEnabled"
        :list="data"
        draggable-class="kit-table-draggable"
        handle-selector=".kit-table__grab-handle"
        @reorder="$emit('rows-reordered', $event)">
        <tbody>
          <TableRow
            class="kit-table-draggable"
            v-for="row in data"
            :key="row.id"
            :columns="actualColumns"
            :row="row"
            @click="onRowClick(row, $event)">
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
          <td ref="infinite-scroll-loader" :colspan="columns.length" class="kit-infinite-scroll-loader">
            <Spinner size="small" />
          </td>
        </tr>
      </tfoot>
      <tfoot v-if="showLoadMore && !infiniteScroll">
        <tr>
          <td :colspan="columns.length">
            <KitButton appearance="subtle" style="width: 100%" @click="$emit('load-more')"> Load more</KitButton>
          </td>
        </tr>
      </tfoot>
    </table>
    <div :busy="busy" class="kit-busy-glass">
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from '../Spinner/Spinner'
import KitIcon from '../Icon/KitIcon'
import KitButton from '../Button/Button'
import KitDraggable from '../common/KitDraggable'
import TableRow from './TableRow'
import TableHeaderCell from './TableHeaderCell'

export default {
  components: {
    KitDraggable,
    KitIcon,
    TableHeaderCell,
    TableRow,
    Spinner,
    KitButton
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      default: () => []
    },
    stickyHeader: {
      type: Boolean,
      default: false
    },
    defaultColumnMinWidth: {
      type: [String, Number],
      default: 150
    },
    infiniteScroll: {
      type: Boolean,
      default: false
    },
    showLoadMore: {
      type: Boolean,
      default: false
    },
    busy: {
      type: Boolean,
      default: false
    },
    sortedBy: {
      type: String,
      default: undefined
    },
    sortedDesc: {
      type: Boolean,
      default: false
    },
    dragRows: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      observer: undefined,
      tableWidth: 0,
      activeRowId: undefined,
      positionIndex: {}
    }
  },
  computed: {
    actualColumns() {
      if (this.dragRows) {
        return [
          {
            id: 'kitDragHandle',
            width: 30
          },
          ...this.columns
        ]
      }
      return this.columns
    },
    dragEnabled() {
      return this.dragRows && !this.busy && this.data.length > 0
    }
  },
  mounted() {
    this.createObserver()
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    onRowClick(row, event) {
      this.$emit('row-click', {
        row,
        event
      })
    },
    createObserver() {
      if (this.observer) {
        this.observer.unobserve(this.$refs['infinite-scroll-loader'])
      }
      this.observer = new IntersectionObserver((entries) => {
        // TODO: investigate why we got some case of twice the same element in the
        // entries. Seems to be related to the change of size of the observed element
        if (entries.some(({ isIntersecting }) => isIntersecting)) {
          this.tableBottomReached()
        }
      })
      this.observer.observe(this.$refs['infinite-scroll-loader'])
    },
    tableBottomReached() {
      this.$emit('table-bottom-reached', () => {
        this.createObserver()
      })
    },
    onSorted(column) {
      this.$emit('sorted', {
        id: column.id,
        desc: this.sortedBy === column.id ? !this.sortedDesc : false
      })
    }
  }
}
</script>

<style scoped>
.kit-table-wrapper {
  /* to really hide the overflow */
  position: relative;
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
  background-color: white;
  /* required to stay above the eventual position: xxx in the content */
  z-index: 1;
}

table tbody {
  border: none;
}

thead {
  background-color: white;
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
