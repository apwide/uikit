<template>
  <KitInlineEdit
    v-if="editable"
    :value="value"
    :confirm="confirm"
    :placement="placement"
    @save-requested="onSaveRequested">
    <template #editor="props">
      <KitSelect
        :value="props.value"
        :options="options"
        :normalizer="normalizer"
        :open-on-focus="true"
        :is-invalid="props.isInvalid"
        :is-focused="props.isFocused"
        :is-loading="props.isLoading"
        :placeholder="placeholder"
        :append-to-body="appendToBody"
        @input="props.input"
        @blur="props.blur"
        @confirm="props.confirm"
        @focus="props.focus"
        @cancel="props.cancel">
        <template #selected="{ selected }">
          <slot name="selected" :selected="selected" />
        </template>
        <template #option="{ option }">
          <slot name="option" :option="option" />
        </template>
      </KitSelect>
    </template>
    <slot />
  </KitInlineEdit>
  <div v-else class="slot">
    <slot />
  </div>
</template>

<script setup lang="ts" generic="T">
import { Value } from '@components/Select/types'
import { computed } from 'vue'
import KitSelect from '../Select/KitSelect.vue'
import KitInlineEdit from '../Form/KitInlineEdit.vue'

type Props = {
  editable?: boolean
  placement?: string
  value?: string | T
  allowedValues?: string[]
  placeholder?: string
  appendToBody?: boolean
  normalizer?: (value: T) => Value<T>
  confirm?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  editable: true,
  placement: 'right',
  value: '',
  allowedValues: () => [],
  placeholder: '',
  appendToBody: false,
  normalizer: (value) => ({
    id: value,
    label: value,
    value,
    disabled: false
  }),
  confirm: true
})

const emit = defineEmits<{
  (event: 'save-requested', value: Value<string>, callback: () => void)
}>()

const options = computed(() => props.allowedValues)
function onSaveRequested(option, callback) {
  const value = option || ''
  emit('save-requested', value, callback)
}
</script>
