<template>
  <label ref="radio" class="kit-radio">
    <input
      ref="input"
      :checked="isChecked"
      :name="name"
      type="radio"
      @blur="onBlur"
      @change="isChecked = value"
      @focus="onFocus" />
    {{ value.label }}
  </label>
</template>

<script setup lang="ts">

import { computed, ref } from 'vue'

type Props = {
  value: any
  name?: string
  checked?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  checked: true
})

const radio = ref<HTMLLabelElement>()

const emit = defineEmits<{
  (event: 'input', data?: any)
  (event: 'blur', data: FocusEvent)
  (event: 'focus', data: FocusEvent)
}>()

const isChecked = computed({
  get() {
    return props.checked
  },
  set(value) {
    emit('input', value)
  }
})

function onBlur(e) {
  if (!radio.value.contains(e.relatedTarget)) {
    emit('blur', e)
  }
}

function onFocus(e) {
  emit('focus', e)
}
</script>

<style scoped>
.kit-radio {
  cursor: pointer;
  padding: 2px 0;
  margin-bottom: -2px;
}

input {
  appearance: none;
  transition: 0.2s all linear;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #999;
  margin-right: 5px;
  position: relative;
  top: 3px;
}

input:active {
  border-color: #0066ff;
  background-color: #b3d4ff;
}

input:checked {
  background-color: white;
  border: 5px #6b778c solid;
}

label[disabled],
label[disabled] input {
  cursor: not-allowed;
  color: rgb(151, 160, 175);
}

label:hover input[type='radio'] {
  background-color: rgb(235, 236, 240);
}
</style>
