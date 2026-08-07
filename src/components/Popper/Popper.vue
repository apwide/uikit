<script lang="ts">
import { arrow, autoPlacement, autoUpdate, computePosition, flip, limitShift, offset as foffset, shift } from '@floating-ui/dom'
import { computed, defineComponent, getCurrentInstance, nextTick, onBeforeUnmount, onMounted, PropType, ref } from 'vue'

type Placement = 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end'

export default defineComponent({
  name: 'Popper',
  props: {
    targetElement: { type: null as unknown as PropType<HTMLElement>, required: true },
    placement: { type: String as PropType<Placement>, default: 'bottom-end' },
    offset: { type: Array as PropType<number[] | string[]>, default: () => [0, 5] },
    transitionDelay: { type: Number, default: 0 },
    // eslint-disable-next-line @typescript-eslint/ban-types
    boundariesElement: { type: [String, Function] as PropType<string | HTMLElement | Function>, default: 'viewport' },
    positionFixed: { type: Boolean, default: false }
  },
  // `render` is a plain function returned from `setup()` (not a template, not an Options API `render()`
  // method) specifically so this stays a transparent wrapper - no wrapper DOM element around the slot's
  // own root - without ever touching `this`. A `<script setup>` component would work for the props/logic
  // half, but Vue wraps `this` in a dev-mode warning proxy for any manually-written render function on a
  // `<script setup>` component (`setupState.__isScriptSetup`), and a `<template><slot /></template>
  // wraps the slot output in a Fragment instead of exposing the slot's real single root element, which
  // floating-ui needs directly.
  setup(props, { slots }) {
    const popper = ref<() => void>()
    const translatedOffset = computed(() => {
      const [crossAxis, mainAxis] = props.offset
      return { crossAxis, mainAxis }
    })

    const instance = getCurrentInstance()

    function initPopper() {
      const elm: HTMLElement = instance.proxy.$el
      const arrowElm: HTMLElement | null = elm.querySelector('[data-popper-arrow]')

      popper.value = autoUpdate(props.targetElement, elm, async () => {
        const { x, y, middlewareData, placement } = await computePosition(props.targetElement, elm, {
          placement: props.placement !== 'auto' ? props.placement : undefined,
          strategy: props.positionFixed ? 'fixed' : 'absolute',
          middleware: [
            ...props.placement === 'auto' ? [autoPlacement()] : [],
            flip(),
            shift(({ limiter: limitShift() })),
            foffset(translatedOffset.value),
            ...arrowElm ? [arrow({ element: arrowElm })] : [],
          ]
        })

        const side = placement.split("-")[0];

        const staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[side];

        if (middlewareData.arrow && arrowElm) {
          const xArrow = middlewareData.arrow.x
          const yArrow = middlewareData.arrow.y
          Object.assign(arrowElm.style, {
            left: xArrow != null ? `${xArrow}px` : '',
            top: yArrow != null ? `${yArrow}px` : '',
            [staticSide]: `${-(arrowElm.offsetWidth / 2)}px`
          })
        }

        Object.assign(elm.style, {
          left: `${x}px`,
          top: `${y}px`
        })
      })
    }

    onMounted(() => {
      nextTick(() => {
        initPopper()
      })
    })

    onBeforeUnmount(() => {
      setTimeout(() => popper.value(), props.transitionDelay)
    })

    return () => {
      const [defaultSlot] = slots.default()
      return defaultSlot
    }
  }
})
</script>
