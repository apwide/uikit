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
  --kit-radio-border: #999;
  --kit-radio-selected-border: #6b778c;
  --kit-radio-selected-center: white;
  --kit-radio-hover-center: #ebecf0;
}

[data-color-mode="dark"] .kit-radio {
  --kit-radio-border: #738496;
  --kit-radio-selected-border: #579dff;
  --kit-radio-selected-center: var(--apw-page-background);
  --kit-radio-hover-center: #A1BDD914;
 }

.kit-radio {
  cursor: pointer;
  padding: 2px 0;
  margin-bottom: -2px;
}

.kit-radio,
.kit-radio input {
  cursor: pointer;
}

input {
  appearance: none;
  transition: 0.2s all linear;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--kit-radio-border);
  margin-right: 5px;
  position: relative;
  top: 3px;
}

input:active {
  border-color: #0066ff;
  background-color: #b3d4ff;
}

input:checked {
  background-color: var(--kit-radio-selected-center);
  border: 5px var(--kit-radio-selected-border) solid;
}

label[disabled],
label[disabled] input {
  cursor: not-allowed;
  color: rgb(151, 160, 175);
}

label:hover input[type='radio'] {
  background-color: var(--kit-radio-hover-center);
}
</style>
