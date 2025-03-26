<template>
  <KitInlineEdit v-if="editable" :value="value" type="number" :placement="placement" @save-requested="onSaveRequested">
    <slot>
      <NumberFloatRenderer :value="value" />
    </slot>
  </KitInlineEdit>
  <NumberFloatRenderer v-else :value="value" />
</template>

<script setup lang="ts">
import KitInlineEdit from '../Form/KitInlineEdit.vue'
import NumberFloatRenderer from './NumberFloatRenderer'

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
