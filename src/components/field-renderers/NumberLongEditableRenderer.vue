<template>
  <KitInlineEdit
    v-if="editable"
    :value="value"
    type="number"
    step="1"
    :placement="placement"
    @save-requested="onSaveRequested">
    <slot>
      <NumberLongRenderer :value="value" />
    </slot>
  </KitInlineEdit>
  <NumberLongRenderer v-else :value="value" />
</template>

<script setup lang="ts">
import KitInlineEdit from '../Form/KitInlineEdit.vue'
import NumberLongRenderer from './NumberLongRenderer'

type Props = {
  value?: number
  editable?: boolean
  placement?: string
}

withDefaults(defineProps<Props>(), {
  editable: true,
  placement: 'right'
})

const emit = defineEmits<{
  (event: 'save-requested', data?: number, callback?: (e?: Error) => void)
}>()

function onSaveRequested(...args) {
  emit('save-requested', ...args)
}
</script>
