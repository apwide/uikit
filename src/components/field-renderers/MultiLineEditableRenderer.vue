<template>
  <InlineEdit
    v-if="editable"
    :value="value"
    :icon="icon"
    pencil-style="floating"
    :placement="placement"
    :force-is-editing="forceIsEditing"
    :confirm="confirm"
    @save-requested="onSaveRequested"
    @start-editing="onStartEditing"
    @stop-editing="onStopEditing">
    <slot>
      <MultiLineRenderer :value="value" />
    </slot>
    <KitTextArea
      slot="editor"
      slot-scope="{ value, input, isFocused, isInvalid, isLoading, blur, focus, confirm, cancel }"
      :value="value"
      :is-focused="isFocused"
      :is-invalid="isInvalid"
      :is-loading="isLoading"
      :submit-on-enter="submitOnEnter"
      @confirm="confirm"
      @keydown.meta.enter="confirm"
      @keyup.esc="cancel"
      @input="onInput($event, input)"
      @blur="blur"
      @focus="focus" />
  </InlineEdit>
  <div v-else>
    <slot>
      <MultiLineRenderer :value="value" />
    </slot>
  </div>
</template>

<script setup lang="ts">
import KitTextArea from '../Form/KitTextArea.vue'
import InlineEdit from '../Form/InlineEdit'
import MultiLineRenderer from './MultiLineRenderer'

type Props = {
  value?: string
  editable?: boolean
  placement?: string
  icon?: boolean
  submitOnEnter?: boolean
  forceIsEditing?: boolean
  confirm?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  editable: true,
  placement: 'right',
  icon: true,
  submitOnEnter: false,
  forceIsEditing: false,
  confirm: true
})

const emit = defineEmits<{
  (event: 'change', data?: string)
  (event: 'save-requested', data?: any)
  (event: 'start-editing')
  (event: 'stop-editing')
}>()

function onInput(value, inlineInput) {
  emit('change', value)
  inlineInput(value)
}

function onSaveRequested(...args) {
  emit('save-requested', ...args)
}

function onStartEditing() {
  emit('start-editing')
}

function onStopEditing() {
  emit('stop-editing')
}
</script>
