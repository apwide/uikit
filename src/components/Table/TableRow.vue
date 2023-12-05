<template>
  <tr class="kit-table-row" @click="onClick">
    <TableRowCell v-for="column in columns" :key="column.id" :value="row[column.id]">
      <slot slot-scope="props" :name="column.id" :row="row" :is-active-row="isActiveRow" v-bind="props">
        <span class="table-row-cell__value">
          {{ row[column.id] }}
        </span>
      </slot>
    </TableRowCell>
  </tr>
</template>

<script>
import TableRowCell from './TableRowCell.vue'

export default {
  components: { TableRowCell },
  props: {
    columns: {
      type: Array,
      required: true
    },
    row: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isActiveRow: false
    }
  },
  mounted() {
    this.$el.addEventListener('mouseenter', this.onMouseEnter)
    this.$el.addEventListener('mouseleave', this.onMouseLeave)
  },
  beforeDestroy() {
    this.$el.removeEventListener('mouseenter', this.onMouseEnter)
    this.$el.removeEventListener('mouseleave', this.onMouseLeave)
  },
  methods: {
    onMouseEnter() {
      this.isActiveRow = true
    },
    onMouseLeave() {
      this.isActiveRow = false
    },

    onClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped>
.kit-table-row:hover > .kit-table-row-cell {
  background-color: #f4f5f7;
}
</style>
