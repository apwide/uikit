<template>
  <KitTextField :is-focused="isFocused">
    <input
      ref="inputField"
      v-model="input"
      :type="type"
      :placeholder="placeholder"
      :step="step"
      v-bind="$attrs"
      :maxlength="maxlength"
      @focus="onFocus"
      @blur="onBlur" />
  </KitTextField>
</template>

<script setup lang="ts">
import KitTextField from './KitTextField.vue'
import { computed, nextTick, ref, watch } from 'vue'

type Props = {
  value?: string | number
  maxlength?: number
  placeholder?: string
  autoFocus?: boolean
  width?: string
  type?: string
  step?: string
  allowedValues?: string
}

const props = withDefaults(defineProps<Props>(), {
  autoFocus: false,
  width: '100%',
  type: 'text',
  step: '1',
  allowedValues: ''
})

const emit = defineEmits<{
  (event: 'focus', data: FocusEvent)
  (event: 'blur', data: FocusEvent)
  (event: 'input', data?: string | number)
}>()

const isFocused = ref(false)
const inputField = ref<HTMLInputElement>()

const input = computed({
  get() {
    return props.value
  },
  set(val) {
    emit('input', val)
  }
})

watch(input, () => {
  if (props.allowedValues) {
    input.value = input.value.replace(new RegExp(props.allowedValues, 'g'), '')
  }
})

watch(() => props.autoFocus, isFocused => {
  if (isFocused) {
    nextTick(() => {
      if (inputField.value) {
        inputField.focus()
      }
    })
  }
}, {
  immediate: true
})

function onFocus(e) {
  isFocused.value = true
  emit('focus', e)
}

function onBlur(e) {
  isFocused.value = false
  emit('blur', e)
}
</script>
