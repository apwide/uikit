<template>
  <transition name="fade" appear>
    <Popper
      :transition-delay="300"
      :boundaries-element="boundariesElement"
      :target-element="targetElement"
      :placement="placement"
      :offset="offset"
      :with-delay="withDelay">
      <span class="label">
        {{ label }}
      </span>
    </Popper>
  </transition>
</template>

<script setup lang="ts">
import Popper from '../Popper/Popper.vue'

type Props = {
  label: string
  placement?: string
  offset?: number[]
  boundariesElement?: string
  targetElement: HTMLElement
  withDelay?: boolean
}

withDefaults(defineProps<Props>(), {
  placement: 'bottom',
  offset: () => [0, 5],
  boundariesElement: 'viewport',
  withDelay: true
})
</script>

<style scoped>
.label {
  box-sizing: border-box;
  position: absolute;
  z-index: 999999;
  padding: 2px 10px;
  font-size: 12px;
  font-weight: 400;
  box-shadow: var(--kit-tooltip-shadow);
  white-space: nowrap;
  pointer-events: none;
  background-color: #172b4d;
  border-radius: 3px;
  color: #ffffff;
  top: 0;
  left: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-active[with-delay] {
  transition-delay: 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
