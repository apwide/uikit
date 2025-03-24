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
      :disabled="disabled"
      @focus="onFocus"
      @blur="onBlur" />
    <KitIconButton :title="title" @click.stop.prevent="toggleFieldType">
      <KitIcon v-if="obfuscated" type="eye" />
      <KitIcon v-else type="eye-slash" />
    </KitIconButton>
  </KitTextField>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import KitIconButton from '../Button/KitIconButton'
import KitIcon from '../Icon/KitIcon'
import KitTextField from './KitTextField.vue'

type Props = {
  value?: number | string
  maxlength?: number
  placeholder?: string
  autoFocus?: boolean
  width?: string
  step?: string
  allowedValues?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoFocus: false,
  width: '100%',
  step: '1',
  allowedValues: '',
  disabled: false
})

const emit = defineEmits<{
  (event: 'input', data?: number | string)
  (event: 'blur', data: FocusEvent)
  (event: 'focus', data: FocusEvent)
}>()

const inputField = ref<HTMLInputElement>()
const isFocused = ref(false)
const obfuscated = ref(true)
const justClickedOnTypeSwitch = ref(false)

const input = computed({
  get() {
    return props.value
  },
  set(val) {
    emit('input', val)
  }
})

const type = computed(() => obfuscated.value ? 'password' : 'text')
const title = computed(() => obfuscated.value ? 'Reveal' : 'Hide')

function onFocus(e) {
  isFocused.value = true
  emit('focus', e)
}

function onBlur(data) {
  if (!justClickedOnTypeSwitch.value) {
    originalBlur(data)
  }
  justClickedOnTypeSwitch.value = false
}

function originalBlur(e) {
  isFocused.value = false
  emit('blur', e)
}

function toggleFieldType() {
  obfuscated.value = !obfuscated.value
  justClickedOnTypeSwitch.value = true
}

watch(input, () => {
  if (props.allowedValues) {
    input.value = input.value.replace(new RegExp(props.allowedValues, 'g'), '')
  }
})

watch(() => props.autoFocus, isFocused => {
  if (isFocused) {
    nextTick(() => {
      if (inputField.value) {
        inputField.value.focus()
      }
    })
  }
}, {
  immediate: true
})
</script>
