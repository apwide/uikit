<template>
  <label :for="id">
    <input :id="id" type="checkbox" :checked="value" @change="toggle" />
    <div class="slide" :size="size">
      <div class="slide-inner">
        <LockFilledIcon v-if="value" :size="iconSize" primary-color="White" class="done" />
        <UnlockFilledIcon v-else :size="iconSize" primary-color="White" class="close" />
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, ref } from 'vue'
import LockFilledIcon from '../Icon/aui/LockFilledIcon'
import UnlockFilledIcon from '../Icon/aui/UnlockFilledIcon'

type Props = {
  value?: number | string | boolean
  disabled?: boolean
  size?: 'regular' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  value: false,
  disabled: false,
  size: 'regular'
})

const id = ref()
const iconSize = computed(() => props.size === 'large' ? 'xsmall' : 'xxsmall')

const emit = defineEmits<{
  (event: 'input', data?: boolean)
}>()

function toggle() {
  if (props.disabled) return
  emit('input', !props.value)
}

const instance = getCurrentInstance()

(() => {
  // eslint-disable-next-line
  id.value = instance. instance.proxy._uuid
})()

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

.slide {
  background-clip: content-box;
  background-color: #6b778c;
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

input:focus + .slide {
  border: 2px solid rgb(76, 154, 255);
}

.slide[size='large'] {
  height: 20px;
  width: 40px;
  border-radius: 20px;
}

.slide::before {
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

.slide[size='large']::before {
  height: 16px;
  width: 16px;
}

input:checked + .slide {
  background-color: #0052cc;
}

input:checked + .slide::before {
  transform: translateX(16px);
}

input:checked + .slide[size='large']::before {
  transform: translateX(20px);
}

.done {
  padding-left: 2px;
  padding-right: 0;
}

.close {
  padding-left: 0;
  padding-right: 3px;
}

.slide-inner {
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  align-items: center;
  width: 100%;
  transition: all 0.2s ease 0s;
}

input:checked + .slide > .slide-inner {
  flex-direction: row;
}

input:checked + .slide:hover {
  background-color: #0065ff;
}

input:not(:checked) + .slide:hover {
  background-color: rgb(165, 173, 186);
}
</style>
