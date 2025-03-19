<template>
  <transition :name="leaveLeft ? 'flag-left' : 'flag'" appear>
    <div class="kit-flag" :appearance="appearance">
      <div class="header">
        <div class="icon">
          <CheckCircleIcon v-if="flag.name === 'success'" :primary-color="flag.primary" :secondary-color="flag.secondary" class="icon" />
          <InfoIcon v-else-if="flag.name === 'info'" :primary-color="flag.primary" :secondary-color="flag.secondary" class="icon" />
          <WarningIcon v-else-if="flag.name === 'warning'" :primary-color="flag.primary" :secondary-color="flag.secondary" class="icon" />
          <ErrorIcon v-else-if="flag.name === 'error'" :primary-color="flag.primary" :secondary-color="flag.secondary" class="icon" />
          <component v-else :is="flag.name" :primary-color="flag.primary" :secondary-color="flag.secondary" class="icon" />
        </div>
        <span class="title">{{ title }}</span>
        <ChevronDownIcon
          v-if="appearance !== 'default'"
          class="chevron"
          size="large"
          :expanded="expanded"
          @click.native="onExpand" />
        <EditorCloseIcon v-else class="close" @click.native="emit('close')" />
      </div>
      <slot>
        <div class="content" :expanded="expanded">
          <div class="description">
            {{ description }}
          </div>
          <div class="actions">
            <a v-for="action in actions" :key="action.content" class="action" @click="onClick(action)">{{
              action.content
            }}</a>
          </div>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import ChevronDownIcon from '../Icon/aui/ChevronDownIcon'
import CheckCircleIcon from '../Icon/aui/CheckCircleIcon'
import InfoIcon from '../Icon/aui/InfoIcon'
import WarningIcon from '../Icon/aui/WarningIcon'
import ErrorIcon from '../Icon/aui/ErrorIcon'
import EditorCloseIcon from '../Icon/aui/EditorCloseIcon'

import { computed, ref } from 'vue'

type Props = {
  title?: string
  description?: string
  actions?: Array
  appearance?: 'default' | 'success' | 'info' | 'error' | 'warning'
  type?: 'success' | 'info' | 'error' | 'warning'
  leaveLeft?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  description: '',
  actions: () => [],
  appearance: 'default',
  type: 'success',
  leaveLeft: false
})

const emit = defineEmits<{
  (event: 'close')
}>()

const expanded = ref(false)
const color = computed(() => {
  switch (props.type) {
    case 'info':
      return '#6554c0'
    case 'error':
      return '#de350a'
    case 'warning':
      return '#ffab00'
    case 'success':
      return '#36b37e'
    default:
      return '#6554c0'
  }
})
const flag = computed(() => {
  switch (props.appearance) {
    case 'info':
      return { name: props.appearance, primary: '#fff', secondary: '#42526E' }
    case 'error':
      return { name: props.appearance, primary: '#fff', secondary: '#DE350B' }
    case 'warning':
      return { name: props.appearance, primary: '', secondary: '#FFC400' }
    case 'success':
      return { name: props.appearance, primary: '#fff', secondary: '#00875A' }
    default:
      return { name: props.type, primary: color.value, secondary: '#fff' }
  }
})

function onExpand() {
  expanded.value = !expanded.value
}

function onClick(action) {
  if (action.href) {
    window.open(action.href, '_blank')
  }
  if (action.handler) {
    action.handler()
  }
}

</script>

<style scoped>
.kit-flag {
  --kit-flag-shadow: rgba(9, 30, 66, 0.31) 0 0 1px, rgba(9, 30, 66, 0.25) 0 20px 32px -8px;

  background-color: var(--kit-dialog-bg-color);
  box-sizing: border-box;
  box-shadow: var(--kit-flag-shadow);
  width: 100%;
  z-index: 600;
  border-radius: 3px;
  padding: 16px;
  max-width: 600px;
  transition: all 0.5s;
}

body.kit-dark .kit-flag {
  --kit-flag-shadow: 0px 0px 0px 1px #39424a, 0px 8px 12px #0304045C, 0px 0px 1px 1px #03040480;
}

.icon {
  margin-right: 8px;
  flex: 0 0 auto;
  vertical-align: middle;
}

.header {
  display: flex;
  height: 32px;
}

.title {
  font-weight: 600;
  flex: 1 1 0;
  line-height: 1.5;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  flex: 1 1 100%;
  padding: 0 0 0 40px;
}

.kit-flag:not([appearance='default']) .content {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.3s ease 0s, opacity 0.3s ease 0s;
}

.kit-flag:not([appearance='default']) .content[expanded='true'] {
  max-height: 150px;
  opacity: 1;
  overflow: visible;
}

.chevron {
  cursor: pointer;
}

.actions {
  padding-top: 8px;
}

.action ~ .action {
  margin-left: 8px;
}

[appearance='default'] .action {
  color: var(--apw-link-color);
  padding-left: 0;
}

.action {
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  display: inline-block;
  color: inherit;
  border-radius: 3px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
}

[appearance='warning'] .action {
  background: rgba(9, 30, 66, 0.08);
}

.action:last-of-type::before {
  text-align: center;
  vertical-align: middle;
  display: inline-block;
}

[appearance='error'] {
  background-color: rgb(222, 53, 11);
  color: #fff;
}

[appearance='info'] {
  background-color: rgb(66, 82, 110);
  color: #fff;
}

[appearance='success'] {
  background-color: rgb(0, 135, 90);
  color: #fff;
}

[appearance='warning'] {
  background-color: rgb(255, 196, 0);
}

.chevron[expanded='true'] {
  transform: rotateZ(180deg);
}

.flag-enter,
.flag-leave-active {
  opacity: 0;
  transform: translateX(300px);
}

.flag-left-enter,
.flag-left-leave-active {
  opacity: 0;
  transform: translateX(-300px);
}

.close {
  cursor: pointer;
}
</style>
