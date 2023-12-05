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

<script>
import Popper from '../Popper/Popper.vue'

export default {
  name: 'KitPopup',
  components: { Popper },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    withoutArrow: {
      type: Boolean,
      default: false
    },
    withLightShadows: {
      type: Boolean,
      default: false
    },
    targetElement: {
      type: HTMLElement,
      default: undefined
    },
    placement: {
      type: String,
      default: 'bottom-end'
    },
    flipBehavior: {
      type: [String, Array],
      default: 'flip'
    },
    offset: {
      type: Array,
      default: () => [0, 5]
    },
    transitionDelay: {
      type: Number,
      default: 0
    },
    boundariesElement: {
      type: [String, HTMLElement, Function],
      default: 'viewport'
    },
    positionFixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.kit-popup {
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 20px 4px rgb(154 161 177 / 15%), 0 4px 80px -8px rgb(36 40 47 / 25%),
    0 4px 4px -2px rgb(91 94 105 / 15%);
  box-sizing: border-box;
  display: block;
  z-index: 400;
  border-radius: 4px;
  flex: 1 1 auto;
  padding: 4px;
}

.kit-popup[data-light-shadows] {
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
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
