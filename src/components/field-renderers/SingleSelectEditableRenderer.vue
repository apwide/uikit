<template>
  <KitInlineEdit
    v-if="editable"
    :value="value"
    :confirm="confirm"
    :icon="icon"
    :placement="placement"
    :force-is-editing="forceIsEditing"
    :blur-to-save="blurToSave"
    :hide-confirm-buttons="!confirm"
    @start-editing="emit('start-editing')"
    @stop-editing="emit('stop-editing')"
    @save-requested="onSaveRequested">
    <template #editor="props">
      <KitSelect
        :value="props.value"
        :options="allowedValues"
        :open-on-focus="true"
        :is-invalid="props.isInvalid"
        :is-focused="props.isFocused"
        :is-loading="props.isLoading"
        :placeholder="placeholder"
        :noOptionsMessage="noOptionsMessage"
        :append-to-body="appendToBody"
        :normalizer="normalizer"
        :is-clearable="isClearable"
        :filter-predicate="filterPredicate"
        style="flex: 1"
        :fixed-select-width="fixedSelectWidth"
        :confirm="confirm"
        @input="onInput(props, $event)"
        @search-change="emit('search-change', $event)"
        @blur="onBlur(props, $event)"
        @confirm="props.confirm"
        @focus="props.focus"
        @cancel="props.cancel">
        <template v-if="$scopedSlots.selected" #selected="{ selected }">
          <slot name="selected" :selected="selected" />
        </template>
        <template #option="{ option, isCurrent }">
          <slot name="option" :option="option" :isCurrent="isCurrent" />
        </template>
        <template #custom-action>
          <slot name="custom-action" />
        </template>
      </KitSelect>
    </template>
    <slot>
      <StringLineRenderer :value="normalizedValueLabel" />
    </slot>
  </KitInlineEdit>
  <div v-else>
    <slot>
      <StringLineRenderer :value="normalizedValueLabel" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { ConfirmationCallback, FilterPredicate, Normalizer } from '@components/Select/types'
import { computed } from 'vue'
import KitSelect from '../Select/KitSelect.vue'
import KitInlineEdit from '../Form/KitInlineEdit.vue'
import StringLineRenderer from './StringLineRenderer.vue'

type Props = {
  editable?: boolean
  placement?: string
  value?: string | object
  allowedValues: string[] | object[]
  placeholder?: string
  noOptionsMessage?: string
  appendToBody?: boolean
  confirm?: boolean
  blurToSave?: boolean
  normalizer?: Normalizer<unknown>
  icon?: boolean
  isClearable?: boolean
  forceIsEditing?: boolean
  filterPredicate?: FilterPredicate
  fixedSelectWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
  editable: true,
  placement: 'right',
  value: '',
  allowedValues: () => [],
  placeholder: '',
  noOptionsMessage: 'No options',
  appendToBody: false,
  confirm: true,
  normalizer: () => (value) => ({
    id: value,
    value,
    label: value,
    disabled: false
  }),
  icon: true,
  forceIsEditing: false
})

const emit = defineEmits<{
  (event: 'save-requested', value: string | T, callback: ConfirmationCallback<string | T>)
  (event: 'start-editing')
  (event: 'stop-editing')
  (event: 'input', value: string | T | string[] | T[])
  (event: 'search-change', searchTerm: string)
  (event: 'blur', e: FocusEvent)
}>()

const normalizedValueLabel = computed(() => {
  if (typeof props.value === 'object') {
    return props.normalizer(props.value).label
  }

  return props.value
})

function onSaveRequested(option, callback) {
  const value = option || ''
  emit('save-requested', value, callback)
}

function onInput(props, data) {
  props.input(data)
  emit('input', data)
}

function onBlur(props, data) {
  props.blur(data)
  emit('blur', data)
}
</script>
