<template>
  <div class="kit-avatar__outer" :style="`zIndex: ${zIndex}`">
    <slot name="avatar-header" />
    <component :is="tag" :href="link" target="_blank" class="kit-avatar__wrapper" :square="`${square}`" :size="size" :style="style">
      <img v-if="avatar && !error" draggable="false" :src="avatar" alt="avatar" @error="error = true" />
      <svg v-else viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="64" cy="64" r="64" fill="rgb(193, 199, 208)" />
          <g>
            <path
              d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z" />
            <path
              d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24" />
          </g>
        </g>
      </svg>
      <slot name="status">
        <Approved v-if="statusComponent === 'approved'" class="kit-avatar__status" :size="size"/>
        <Declined v-if="statusComponent === 'declined'" class="kit-avatar__status" :size="size"/>
      </slot>
      <slot name="presence">
        <Busy v-if="presenceComponent === 'busy'" class="kit-avatar__presence" primary-color="green" :size="size" />
        <Online v-else-if="presenceComponent === 'online'" class="kit-avatar__presence" primary-color="green" :size="size" />
        <Offline v-else-if="presenceComponent === 'offline'" class="kit-avatar__presence" primary-color="green" :size="size" />
        <Focus v-else-if="presenceComponent === 'focus'" class="kit-avatar__presence" primary-color="green" :size="size" />
      </slot>
      <slot name="avatar-footer" />
    </component>
  </div>
</template>

<script setup lang="ts">
import { Online, Busy, Offline, Focus, Approved, Declined } from './Icons'
import { computed, ref } from 'vue'

type Props = {
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  presence?: string
  avatar?: string
  zIndex?: number
  tag?: string
  link?: string
  outline?: string
  status?: string
  square?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  presence: '',
  avatar: '',
  zIndex: 0,
  tag: 'div',
  link: '#',
  outline: '#fff',
  status: '',
  square: false
})

const error = ref(false)
const style = computed(() => ({
  'background-color': props.outline
}))
const statusComponent = computed(() => props.status.toLocaleLowerCase())
const presenceComponent = computed(() => props.presence.toLocaleLowerCase())

</script>

<style scoped>
.kit-avatar__outer {
  display: inline-block;
}

.kit-avatar__wrapper {
  padding: 2px;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  border-radius: 50%;
  z-index: 999;
  outline: none;
}

.kit-avatar__wrapper::after {
  background-color: transparent;
  bottom: 2px;
  content: ' ';
  left: 2px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 2px;
  top: 2px;
  border-radius: 50%;
  transition: opacity 200ms ease 0s;
}

a.kit-avatar__wrapper:hover::after {
  background-color: rgba(9, 30, 66, 0.36);
  opacity: 1;
}

img {
  height: 100%;
  width: 100%;
  background: rgba(9, 30, 66, 0.13);
  user-select: none;
}

.kit-avatar__wrapper[square='false'] img {
  border-radius: 50%;
}

.kit-avatar__wrapper[square='true'] img {
  border-radius: 10%;
}

.kit-avatar__wrapper[square='false'] img {
  border-radius: 50%;
}

.kit-avatar__wrapper[square='true'] {
  border-radius: 10%;
}

.kit-avatar__wrapper[size='xxlarge'] {
  height: 132px;
  width: 132px;
}

.kit-avatar__wrapper[size='xlarge'] {
  height: 100px;
  width: 100px;
}

.kit-avatar__wrapper[size='large'] {
  height: 44px;
  width: 44px;
}

.kit-avatar__wrapper[size='medium'] {
  height: 36px;
  width: 36px;
}

.kit-avatar__wrapper[size='small'] {
  height: 28px;
  width: 28px;
}

.kit-avatar__wrapper[size='xsmall'] {
  height: 20px;
  width: 20px;
}

svg {
  background: transparent;
  border-radius: 50%;
}

g {
  fill: rgb(255, 255, 255);
}

.kit-avatar__presence,
.kit-avatar__status {
  pointer-events: none;
  position: absolute;
  z-index: 2;
}

[size='xxlarge'] .kit-avatar__presence,
[size='xxlarge'] .kit-avatar__status,
[size='xsmall'] .kit-avatar__presence,
[size='xsmall'] .kit-avatar__status {
  display: none;
}

[size='xlarge'] .kit-avatar__presence {
  bottom: 7px;
  right: 7px;
}

[size='xlarge'] .kit-avatar__status {
  top: 7px;
  right: 7px;
}

[size='large'] .kit-avatar__presence {
  bottom: 1px;
  right: 1px;
}

[size='large'] .kit-avatar__status {
  top: 1px;
  right: 1px;
}

[size='medium'] .kit-avatar__presence,
[size='small'] .kit-avatar__presence {
  bottom: 0;
  right: 0;
}

[size='medium'] .kit-avatar__status,
[size='small'] .kit-avatar__status {
  top: 0;
  right: 0;
}
</style>
