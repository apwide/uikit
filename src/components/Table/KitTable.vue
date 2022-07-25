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
      <TransitionGroup tag="tbody" type="transition">
        <TableRow
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
      </TransitionGroup>
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
            <KitButton appearance="subtle" style="width: 100%" @click="$emit('load-more')"> Load more </KitButton>
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
import TableRow from './TableRow'
import TableHeaderCell from './TableHeaderCell'

const draggableUnitSelector = 'tbody tr'

export default {
  components: {
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
      draggedElement: undefined,
      lastDragYposition: null,
      positionIndex: {}
    }
  },
  computed: {
    ghostElement() {
      const div = document.createElement('div')
      div.innerHTML = '&nbsp;'
      div.className = 'kit-drag-dropzone__border'
      const td = document.createElement('td')
      td.colSpan = this.actualColumns.length
      td.appendChild(div)
      const tr = document.createElement('tr')
      tr.appendChild(td)
      tr.className = 'kit-drag-dropzone'
      return tr
    },
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
    }
  },
  watch: {
    data() {
      this.setupDragRows()
    }
  },
  mounted() {
    this.createObserver()
    this.setupDragRows()
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
        if (entries[0].isIntersecting) {
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
    },
    // Drag specific
    async setupDragRows() {
      if (this.dragRows) {
        await this.$nextTick()
        const draggableElements = this.$el.querySelectorAll(draggableUnitSelector)
        if (draggableElements) {
          const now = Date.now()
          let order = 0
          Array.from(draggableElements).forEach((element) => {
            element.setAttribute('draggable', 'true')
            element.id = `o-${now}-${order}`
            order += 1
          })

          this.positionIndex = this.data.reduce((acc, row, index) => {
            acc[draggableElements[index].id] = row
            return acc
          }, {})
        }

        this.$el.addEventListener('dragstart', this.onDragStart)
      }
    },
    findDraggableParent(startNode) {
      let dragged = null
      let candidate = startNode

      while (!dragged && this.$el.contains(candidate)) {
        const filteredSiblings = candidate.parentNode.querySelectorAll(draggableUnitSelector)
        if (filteredSiblings && Array.from(filteredSiblings).includes(candidate)) {
          dragged = candidate
        } else {
          candidate = candidate.parentNode
        }
      }
      return dragged
    },
    async onDragStart(event) {
      this.draggedElement = this.findDraggableParent(event.target)

      if (!this.draggedElement) {
        return
      }

      this.draggedElement.style.opacity = 0.2
      this.lastDragYposition = event.clientY

      this.$el.addEventListener('dragover', this.onDragOver)
      this.$el.addEventListener('dragend', this.onDragEnd)
    },
    onDragOver(event) {
      event.preventDefault()

      const target = this.findDraggableParent(event.target)
      const parent = target?.parentElement
      event.dataTransfer.dropEffect = 'move'

      if (!parent || !target) {
        return
      }

      if (target !== this.draggedElement) {
        const deltaY = this.lastDragYposition - event.clientY
        // Sorting
        if (target === parent.firstChild) {
          parent.insertBefore(this.ghostElement, target)
        } else if (target === parent.lastChild) {
          parent.appendChild(this.ghostElement)
        } else {
          parent.insertBefore(this.ghostElement, deltaY > 0 ? target : target.nextSibling)
        }
      } else if (this.ghostElement.parentNode) {
        parent.removeChild(this.ghostElement)
      }
      this.lastDragYposition = event.clientY
    },
    onDragEnd(event) {
      event.preventDefault()
      this.$el.removeEventListener('dragover', this.onDragOver, false)
      this.$el.removeEventListener('dragend', this.onDragEnd, false)

      if (this.ghostElement.parentNode) {
        // a change happened
        this.ghostElement.replaceWith(this.draggedElement)

        const rows = Array.from(this.$el.querySelectorAll(draggableUnitSelector))
        const newDataOrder = rows.map((row) => this.positionIndex[row.id])
        this.$emit('rows-reordered', newDataOrder)
      }
      this.draggedElement.style.opacity = 1
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

>>> .kit-drag-dropzone__border {
  margin: 4px 1px;
  min-height: 40px;
  border: 2px #b3bac5 dashed;
}

.kit-table__grab-handle {
  color: #a5adba;
  margin: -10px 0;
  padding: 10px 10px 10px 5px;
  font-size: 0.68em;
  cursor: grab;
}
</style>
