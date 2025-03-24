<script lang="ts">
export default {
  render() {
    const [defaultSlot] = this.$slots.default
    return defaultSlot
  }
}
</script>
<script setup lang="ts">
import { createPopper, type Instance } from '@popperjs/core'
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

const contentWidth = ref(0)
const popper = ref<Instance>()
const interval = ref<number>()

onMounted(() => {
  nextTick(() => {
    initPopper()
  })
  interval.value = setInterval(updateBasedOnContent, 250)
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
  setTimeout(() => popper.value.destroy(), props.transitionDelay)
})


const instance = getCurrentInstance()

function initPopper() {
  const [defaultSlot] = instance.proxy.$slots.default
  const boundariesElement =
    typeof props.boundariesElement === 'function' ? props.boundariesElement() : props.boundariesElement

  popper.value = createPopper(props.targetElement, defaultSlot.elm, {
    placement: props.placement,
    positionFixed: props.positionFixed,
    modifiers: [
      {
        name: 'offset',
        options: { offset: props.offset }
      },
      {
        name: 'preventOverflow',
        options: { boundary: boundariesElement }
      }
    ]
  })
}

function updateBasedOnContent() {
  try {
    const [defaultSlot] = instance.proxy.$slots.default
    const currentContentWidth = defaultSlot.elm.getBoundingClientRect().width

    if (currentContentWidth !== contentWidth.value) {
      contentWidth.value = currentContentWidth
      popper.value.update()
    }
  } catch (e) {
    // ignore
  }
}

function update() {
  popper.value?.update()
}

</script>
