<template>
  <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
    <slot />
  </transition>
</template>
<script setup lang="ts">
type Props = {
  enterTransition?: boolean
  leaveTransition?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  enterTransition: true,
  leaveTransition: true
})

function afterEnter(element: HTMLElement) {
  if (!props.enterTransition) {
    return
  }
  element.style.height = 'auto'
}

function enter(element: HTMLElement) {
  if (!props.enterTransition) {
    return
  }
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { width } = getComputedStyle(element)
  /* eslint-disable no-param-reassign */
  element.style.position = 'absolute'
  element.style.visibility = 'hidden'
  element.style.height = 'auto'
  /* eslint-enable */
  const { height } = getComputedStyle(element)
  /* eslint-disable no-param-reassign */
  element.style.position = null
  element.style.visibility = null
  element.style.height = '0'
  /* eslint-enable */
  // Force repaint to make sure the
  // animation is triggered correctly.
  // eslint-disable-next-line no-unused-expressions
  getComputedStyle(element).height
  requestAnimationFrame(() => {
    // eslint-disable-next-line no-param-reassign
    element.style.height = height
  })
}

function leave(element: HTMLElement) {
  if (!props.leaveTransition) {
    return
  }
  const { height } = getComputedStyle(element)
  // eslint-disable-next-line no-param-reassign
  element.style.height = height
  // Force repaint to make sure the
  // animation is triggered correctly.
  // eslint-disable-next-line no-unused-expressions
  getComputedStyle(element).height
  requestAnimationFrame(() => {
    // eslint-disable-next-line no-param-reassign
    element.style.height = '0'
  })
}
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease-in-out;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
