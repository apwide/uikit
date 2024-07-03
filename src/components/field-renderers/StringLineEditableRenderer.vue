<template>
  <InlineEdit
    v-if="editable"
    :value="value"
    :confirm="confirm"
    :blur-to-save="blurToSave"
    :icon="icon"
    :align="align"
    :pattern="pattern"
    :type="type"
    :placement="placement"
    :force-is-editing="forceIsEditing"
    @start-editing="emit('start-editing')"
    @stop-editing="emit('stop-editing')"
    @save-requested="onSaveRequested">
    <slot>
      <StringLineRenderer :value="value" />
    </slot>
  </InlineEdit>
  <div v-else>
    <slot>
      <StringLineRenderer :value="value" />
    </slot>
  </div>
</template>

<script setup lang="ts" generic="T">
import { ConfirmationCallback } from '@components/Select/types'
import InlineEdit from '../Form/InlineEdit.vue'
import StringLineRenderer from './StringLineRenderer.vue'

type Props = {
  value?: string
  editable?: boolean
  placement?: string
  confirm?: boolean
  blurToSave?: boolean
  icon?: boolean
  align?: string
  pattern?: string
  type?: string
  forceIsEditing?: boolean
}

withDefaults(defineProps<Props>(), {
  editable: true,
  placement: 'right',
  confirm: true,
  icon: true,
  pattern: '',
  type: 'text',
  forceIsEditing: false
})

const emit = defineEmits<{
  (event: 'save-requested', value: T, callback: ConfirmationCallback<T>)
  (event: 'start-editing')
  (event: 'stop-editing')
}>()

function onSaveRequested(value: T, callback: ConfirmationCallback<T>) {
  emit('save-requested', value, callback)
}
</script>
