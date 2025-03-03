<template>
  <div ref="me" class="kit-time-picker" @click.stop>
    <TextField
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
        v-on="listeners"
        @input="onInput"
        @keyup.esc="onEsc"
        @focus="onFocus"
        @blur="onBlur" />
    </TextField>
    <Popup :is-open="isOpen" :target-element="me" placement="bottom-start" data-cy="select-menu">
      <TimePickerMenu :value="formattedTime" @time-selected="onTimeSelected" />
    </Popup>
  </div>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, nextTick, ref, watch } from 'vue'
import TextField from '../Form/TextField'
import Popup from '../common/Popup'
import TimePickerMenu from './TimePickerMenu'

type Props = {
  value?: string
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
  (event: 'confirm'),
  (event: 'focus'),
  (event: 'blur'),
  (event: 'input', data?: string)
}>()

const focused = ref(false)
const isOpen= ref(false)
const me = ref<HTMLDivElement>()
const input = ref<HTMLInputElement>()
const instance = getCurrentInstance()

const listeners = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { focus, blur, input, ...listeners } = instance.proxy.$listeners
  return listeners
})

const isValid = computed(() => props.value)
const selectedTime = computed({
  get() {
    if (!isValid.value) {
      return undefined
    }
    return props.value
  },
  set(date) {
    emit('input', date)
  }
})
const formattedTime = computed(() => !isValid.value ? '' : props.value)

function onInput(e: InputEvent) {
  if (e.target.value.length === 0) {
    selectedTime.value = undefined
  } else {
    selectedTime.value = e.target.value
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

watch(() => props.isFocused, isFocused => {
  if (isFocused) {
    nextTick(() => input.value?.focus())
  }
}, {
  immediate: true
})

</script>
