<template>
  <KitInlineEdit v-if="editable" :value="timestamp" type="date" :placement="placement" @save-requested="onSaveRequested">
    <template #editor="{ props }">
      <KitDatePicker
        :value="props.value"
        :is-invalid="props.isInvalid"
        :is-focused="props.isFocused"
        :is-loading="props.isLoading"
        @input="props.input"
        @blur="props.blur"
        @focus="props.focus"
        @confirm="props.confirm"
        @keyup.esc="props.cancel" />
      <DateRenderer :date="timestamp" />
    </template>
  </KitInlineEdit>
  <DateRenderer v-else :date="timestamp" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import KitDatePicker from '../Calendar/KitDatePicker.vue'
import KitInlineEdit from '../Form/KitInlineEdit.vue'
import DateRenderer from './DateRenderer'

type Props = {
  date?: number | string
  editable?: boolean
  placement?: string
}

const props = withDefaults(defineProps<Props>(), {
  editable: true,
  placement: 'right'
})

const emit = defineEmits<{
  (event: 'save-requested', data?: string, callback: (e: Error) => void)
}>()

const timestamp = computed(() => props.date && parseInt(props.date, 10))

function onSaveRequested(value, callback: CallableFunction) {
  emit('save-requested', value.toString(), callback)
}
</script>
