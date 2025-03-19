<template>
  <KitInlineEdit
    v-if="editable"
    :value="value"
    :confirm="confirm"
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
          :is-fetching="isFetching"
          :placeholder="placeholder"
          :no-options-message="noOptionsMessage"
          :append-to-body="appendToBody"
          :normalizer="normalizer"
          :is-clearable="isClearable"
          style="flex: 1"
          :fixed-select-width="fixedSelectWidth"
          :multi="true"
          :async="async"
          :confirm="confirm"
          :keep-open-on-select="keepOpenOnSelect"
          @input="
            props.input($event)
            emit('input', $event)
          "
          @search-change="emit('search-change', $event)"
          @blur="
            props.blur($event)
            emit('blur', $event)
          "
          @confirm="props.confirm"
          @focus="props.focus"
          @cancel="props.cancel">
        <template v-if="$scopedSlots.tag" #tag="{ tag }">
          <slot name="tag" :tag="tag" />
        </template>
        <template #option="{ option, isCurrent }">
          <slot name="option" :option="option" :isCurrent="isCurrent" />
        </template>
        <template #custom-action>
          <slot name="custom-action" />
        </template>
        <template #icon>
          <slot name="icon" />
        </template>
      </KitSelect>
    </template>
    <slot>
      <MultiSelectRenderer :selected-values="selectedValueLabels" />
    </slot>
  </KitInlineEdit>
  <div v-else>
    <slot>
      <MultiSelectRenderer :selected-values="selectedValueLabels" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import {ConfirmationCallback, Normalizer} from '@components/Select/types'
import {computed} from 'vue'
import KitSelect from '../Select/KitSelect.vue'
import KitInlineEdit from '../Form/KitInlineEdit.vue'
import MultiSelectRenderer from './MultiSelectRenderer'

type Props = {
  value?: Array
  editable?: boolean
  placement?: string
  allowedValues?: Array
  placeholder?: string
  noOptionsMessage?: string
  isClearable?: boolean
  isFetching?: boolean
  async?: boolean
  forceIsEditing?: boolean
  appendToBody?: boolean
  confirm?: boolean
  blurToSave?: boolean
  normalizer?: Normalizer<unknown>
  fixedSelectWidth?: string
  keepOpenOnSelect?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  value: () => [],
  editable: true,
  placement: 'right',
  allowedValues: () => [],
  placeholder: '',
  noOptionsMessage: 'No options',
  forceIsEditing: false,
  appendToBody: false,
  confirm: true,
  normalizer: () => (value) => ({
    id: value,
    value,
    label: value,
    disabled: false
  }),
})

const emit = defineEmits<{
  (event: 'save-requested', value: Array, callback: ConfirmationCallback<Array>)
  (event: 'start-editing')
  (event: 'stop-editing')
  (event: 'input', value: Array)
  (event: 'search-change', searchTerm: string)
  (event: 'blur', e: FocusEvent)
}>()

const selectedValueLabels = computed(() => props.value.map(props.normalizer).map(({ label }) => label))

function onSaveRequested(value, callback) {
  try {
    if (Array.isArray(value)) {
      emit('save-requested', value, callback)
    } else {
      callback(new Error('Value should be an array'))
    }
  } catch (error) {
    callback(error)
  }
}
</script>
