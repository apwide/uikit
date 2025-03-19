<template>
  <KitTextField :is-focused="focused" :is-invalid="isInvalid" :is-loading="isLoading" :disabled="isLoading">
    <textarea
      ref="textarea"
      v-model="text"
      v-bind="$attrs"
      :rows="rows"
      :disabled="isLoading"
      :style="{ height: currentHeight, width, maxHeight }"
      :auto="height === 'auto'"
      v-on="listeners"
      @keydown="resize"
      @input="resize"
      @focus="onFocus"
      @blur="onBlur" />
  </KitTextField>
</template>

<script setup lang="ts">
import KitTextField from './KitTextField.vue'
import { computed, getCurrentInstance, nextTick, onMounted, ref, watch } from 'vue'

const ENTER = 13

type Props = {
  value?: string
  isFocused?: boolean
  isInvalid?: boolean
  isLoading?: boolean
  height?: number | string
  maxHeight?: number | string
  width?: number | string
  rows?: string
  submitOnEnter?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isFocused: false,
  isInvalid: false,
  isLoading: false,
  height: 'auto',
  maxHeight: 'auto',
  width: '100%',
  rows: '1',
  submitOnEnter: false
})

const emit = defineEmits<{
  (event: 'input', data?: string)
  (event: 'blur', data: FocusEvent)
  (event: 'focus', data: FocusEvent)
  (event: 'confirm')
}>()

const textarea = ref<HTMLTextAreaElement>()
const currentHeight = ref(props.height)
const focused = ref(props.isFocused)

const instance = getCurrentInstance()
const listeners = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { input, ...listeners } = instance.proxy.$listeners
  return listeners
})
const text = computed({
  get() {
    return props.value
  },
  set(value) {
    emit('input', value)
  }
})

watch(() => props.isFocused, () => {
  focused.value = props.isFocused
  if (focused.value) {
    nextTick(() => textarea.value.focus())
  }
}, {
  immediate: true
})

onMounted(() => {
  if (props.height === 'auto') {
    currentHeight.value = `${textarea.value.scrollHeight}px`
  }
})

function onBlur(event) {
  focused.value = false
  emit('blur', event)
}

function onFocus(event) {
  focused.value = true
  emit('focus', event)
}

function resize(e) {
  if (props.submitOnEnter && e.keyCode === ENTER) {
    emit('confirm')
    return
  }
  if (props.height === 'auto') {
    currentHeight.value = 'auto'
    nextTick(() => {
      if (textarea.value) {
        currentHeight.value = `${textarea.value.scrollHeight}px`
      }
    })
  }
}

</script>

<style scoped>
textarea {
  overflow: auto;
  resize: vertical;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  color: inherit;
}

textarea[auto] {
  resize: none;
}
</style>
