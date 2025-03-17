<template>
  <td ref="cellElement" class="kit-table-row-cell">
    <slot :value="value" :is-active-row="isActiveRow" :cell-element="cellElement">
      <span class="kit-table-row-cell__value">
        {{ value }}
      </span>
    </slot>
  </td>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Props = {
  value?: unknown
  isActiveRow?: boolean
}

const cellElement = ref<HTMLTableCellElement>()

defineProps<Props>()
</script>

<style scoped>
td {
  box-sizing: border-box;
  min-height: 40px;
  color: var(--kit-body-text);
  line-height: 24px;
  padding: 7px 16px;
}

.kit-table-row-cell__value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
