<template>
  <label :for="id" :disabled="disabled">
    <input
      :id="id"
      :disabled="disabled"
      type="checkbox"
      :checked="isChecked"
      :appearance="appearance"
      @change="toggle" />
    <div class="kit-toggle__slide" :size="size">
      <div class="kit-toggle__slide-inner">
        <EditorDoneIcon v-if="value" data-cy="done" :size="iconSize" :primary-color="color" class="kit-toggle__done" />
        <EditorCloseIcon v-else data-cy="cross" :size="iconSize" :primary-color="color" class="kit-toggle__close" />
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import EditorDoneIcon from '../Icon/aui/EditorDoneIcon'
import EditorCloseIcon from '../Icon/aui/EditorCloseIcon'
import { uniqueId } from '@/utils/dom'

type Props = {
  value?: number | string | boolean
  disabled?: boolean
  size?: 'regular' | 'large' | 'small' | 'xsmall'
  appearance?: 'default' | 'primary'
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  size: 'regular',
  appearance: 'default'
})
const emit = defineEmits<{
  (event: 'input', isChecked: boolean)
}>()

const isChecked = computed(() => Boolean(props.value))
const iconSize = computed(() => (props.size === 'large' ? 'small' : 'xsmall'))
const color = computed(() => (props.disabled ? 'rgb(165,173,183)' : 'white'))

const id = uniqueId()

function toggle() {
  if (!props.disabled) {
    emit('input', !props.value)
  }
}
</script>

<style scoped>
input {
  opacity: 0;
  position: absolute;
}

label {
  display: inline-block;
  padding: 2px;
}

.kit-toggle__slide {
  background-clip: content-box;
  background-color: rgb(107, 119, 140);
  display: block;
  height: 16px;
  position: relative;
  width: 32px;
  border-radius: 16px;
  border: 2px solid transparent;
  padding: 2px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
}

input:focus + .kit-toggle__slide {
  border: 2px solid rgb(76, 154, 255);
}

.kit-toggle__slide[size='large'] {
  height: 20px;
  width: 40px;
  border-radius: 20px;
}

.kit-toggle__slide::before {
  background-color: rgb(255, 255, 255);
  bottom: 4px;
  content: '';
  height: 12px;
  left: 4px;
  position: absolute;
  transform: initial;
  width: 12px;
  border-radius: 50%;
  transition: all 0.2s ease 0s;
}

.kit-toggle__slide[size='large']::before {
  height: 16px;
  width: 16px;
}

input:checked:not(:disabled)[appearance='default'] + .kit-toggle__slide {
  background-color: rgb(0, 135, 90);
}

input:checked:not(:disabled)[appearance='primary'] + .kit-toggle__slide {
  background-color: #0052cc;
}

input:checked + .kit-toggle__slide::before {
  transform: translateX(16px);
}

input:checked + .kit-toggle__slide[size='large']::before {
  transform: translateX(20px);
}

.kit-toggle__done {
  padding-left: 2px;
  padding-right: 0;
}

.kit-toggle__close {
  padding-left: 0;
  padding-right: 2px;
}

.kit-toggle__slide-inner {
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  align-items: center;
  width: 100%;
  transition: all 0.2s ease 0s;
}

input:checked + .kit-toggle__slide > .kit-toggle__slide-inner {
  flex-direction: row;
}

input:checked:not(:disabled)[appearance='default'] + .kit-toggle__slide:hover {
  background-color: rgb(54, 179, 126);
}

input:checked:not(:disabled)[appearance='primary'] + .kit-toggle__slide:hover {
  background-color: #0065ff;
}

input:not(:checked):not(:disabled) + .kit-toggle__slide:hover {
  background-color: rgb(165, 173, 186);
}

label[disabled] .kit-toggle__slide {
  cursor: not-allowed;
}

label[disabled] input + .kit-toggle__slide {
  background-color: rgb(244, 245, 247);
}
</style>
