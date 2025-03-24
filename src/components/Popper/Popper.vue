<script lang="ts">
export default {
  render() {
    const [defaultSlot] = this.$slots.default
    return defaultSlot
  }
}
</script>
<script setup lang="ts">
import { arrow, autoPlacement, autoUpdate, computePosition, flip, limitShift, offset, shift } from '@floating-ui/dom'
import { getCurrentInstance, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

type Props = {
  targetElement: HTMLElement
  placement?: 'auto'
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
  offset?: number[] | string[]
  transitionDelay?: number
  // eslint-disable-next-line @typescript-eslint/ban-types
  boundariesElement?: string | HTMLElement | Function
  positionFixed?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placement: 'bottom-end',
  offset: () => [0, 5],
  transitionDelay: 0,
  boundariesElement: 'viewport',
  positionFixed: false
})

const popper = ref<Instance>()

onMounted(() => {
  nextTick(() => {
    initPopper()
  })
})

onBeforeUnmount(() => {
  setTimeout(() => popper.value(), props.transitionDelay)
})


const instance = getCurrentInstance()

function initPopper() {
  const [defaultSlot] = instance.proxy.$slots.default
  // const boundariesElement =
  //   typeof props.boundariesElement === 'function' ? props.boundariesElement() : props.boundariesElement
  const elm: HTMLElement = defaultSlot.elm
  const arrowElm: HTMLElement | null = elm.querySelector('[data-popper-arrow]')

  popper.value = autoUpdate(props.targetElement, elm, async () => {
    const { x, y, middlewareData, placement } = await computePosition(props.targetElement, elm, {
      placement: props.placement !== 'auto' ? props.placement : undefined,
      strategy: props.positionFixed ? 'fixed' : 'absolute',
      middleware: [
        ...props.placement === 'auto' ? [autoPlacement()] : [],
        flip(),
        shift(({ limiter: limitShift() })),
        offset({ mainAxis: 5,  crossAxis: 0 }),
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

</script>
