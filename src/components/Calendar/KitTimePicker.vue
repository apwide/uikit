<template>
  <div ref="me" class="kit-time-picker" @click.stop>
    <KitTextField
      :is-focused="focused"
      :is-loading="isLoading"
      :disabled="disabled || isLoading"
      :is-invalid="isInvalid"
      select
      @keydown.down="onKeyDown"
      @mousedown="toggle">
      <input
        ref="input"
        :value="formattedTime"
        type="text"
        width="50%"
        :placeholder="placeholder"
        :disabled="disabled || isLoading"
        v-bind="forwardedAttrs"
        @input="onInput"
        @keyup.esc="onEsc"
        @focus="onFocus"
        @blur="onBlur" />
    </KitTextField>
    <Popup :is-open="isOpen" :target-element="me" placement="bottom-start" data-cy="select-menu">
      <TimePickerMenu :value="formattedTime" @time-selected="onTimeSelected" />
    </Popup>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, useAttrs, watch } from 'vue'
import KitTextField from '../Form/KitTextField.vue'
import Popup from '../common/Popup'
import TimePickerMenu from './TimePickerMenu'

type Props = {
  isLoading?: boolean
  isFocused?: boolean
  isInvalid?: boolean
  disabled?: boolean
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  isFocused: false,
  isInvalid: false,
  disabled: false,
  placeholder: 'e.g. 11:00'
})

const emit = defineEmits<{
  (event: 'focus'),
  (event: 'blur')
}>()

const modelValue = defineModel<string>()

const focused = ref(false)
const isOpen= ref(false)
const me = ref<HTMLDivElement>()
const input = ref<HTMLInputElement>()
const tempValue = ref()

const attrs = useAttrs()
const forwardedAttrs = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onFocus, onBlur, onInput, ...rest } = attrs
  return rest
})

const isValid = computed(() => modelValue.value)
const selectedTime = computed({
  get() {
    if (!isValid.value) {
      return undefined
    }
    return modelValue.value
  },
  set(date) {
    modelValue.value = date
  }
})
const formattedTime = computed(() => !isValid.value ? '' : modelValue.value)

watch (modelValue, value => {
  tempValue.value = value
}, {
  immediate: true
})

watch(() => props.isFocused, isFocused => {
  if (isFocused) {
    nextTick(() => input.value?.focus())
  }
}, {
  immediate: true
})

function onInput(e: InputEvent) {
  if (e.target.value.length === 0) {
    tempValue.value = undefined
  } else {
    tempValue.value = e.target.value
  }
}

function onKeyDown() {
  if (!isOpen.value) {
    toggle()
  }
}

function toggle() {
  isOpen.value = !isOpen.value
}

function onEsc() {
  isOpen.value = false
  tempValue.value = modelValue.value
}

function onFocus(e: FocusEvent) {
  if (!me.value.contains(e.relatedTarget)) {
    focused.value = true
    isOpen.value = true
    emit('focus', e)
  }
}

function onBlur(e) {
  if (!me.value.contains(e.relatedTarget)) {
    focused.value = false
    isOpen.value = false
    if (modelValue.value !== tempValue.value) {
      selectedTime.value = tempValue.value
    }
    emit('blur', e)
  } else if (e.relatedTarget.getAttribute('tabindex') === '-1') {
    input.value.focus()
  }
}

function onTimeSelected(time) {
  isOpen.value = false
  selectedTime.value = time
  input.value.focus()
}

</script>
