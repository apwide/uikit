<template>
  <Popper
    v-if="isOpen && targetElement"
    :target-element="targetElement"
    :placement="placement"
    :offset="offset"
    :boundaries-element="boundariesElement"
    :position-fixed="positionFixed"
    spotlight-skip>
    <div class="kit-popup" role="tooltip" :data-light-shadows="withLightShadows">
      <slot />
      <div v-if="!withoutArrow" class="kit-popup-arrow" data-popper-arrow />
    </div>
  </Popper>
</template>

<script setup lang="ts">
import Popper from '../Popper/Popper'

type Props = {
  isOpen?: boolean
  withoutArrow?: boolean
  withLightShadows?: boolean
  targetElement?: HTMLElement
  placement?: string
  flipBehavior?: string | string[]
  offset?: number[] | string
  transitionDelay?: number
  // eslint-disable-next-line @typescript-eslint/ban-types
  boundariesElement?: string | HTMLElement | Function
  positionFixed?: boolean
}

withDefaults(defineProps<Props>(), {
  isOpen: false,
  withoutArrow: false,
  withLightShadows: false,
  placement: 'bottom-end',
  flipBehavior: 'flip',
  offset: () => [0, 5],
  transitionDelay: 0,
  boundariesElement: 'viewport',
  positionFixed: false
})
</script>

<style scoped>
.kit-popup {
  width: max-content;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--kit-popup-bg-color);
  box-shadow: var(--kit-overlay-shadow);
  box-sizing: border-box;
  display: block;
  z-index: 400;
  border-radius: 4px;
  flex: 1 1 auto;
  padding: 4px;
  border: var(--kit-overlay-border);
}

.kit-popup[data-light-shadows] {
  box-shadow: var(--kit-popup-light-shadow);
}

.kit-popup-arrow,
.kit-popup-arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

.kit-popup-arrow {
  visibility: hidden;
}

.kit-popup-arrow::before {
  visibility: visible;
  content: '';
  transform: rotate(45deg);
}

.kit-popup[data-popper-placement^='top'] > .kit-popup-arrow {
  bottom: -4px;
}

.kit-popup[data-popper-placement^='bottom'] > .kit-popup-arrow {
  top: -4px;
}

.kit-popup[data-popper-placement^='left'] > .kit-popup-arrow {
  right: -4px;
}

.kit-popup[data-popper-placement^='right'] > .kit-popup-arrow {
  left: -4px;
}
</style>
