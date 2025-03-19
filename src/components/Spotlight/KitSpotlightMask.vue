<template>
  <div v-if="showMe" class="kit-spotlight-mask" @click.stop.prevent>
    <div class="kit-spotlight-mask__background kit-spotlight-mask__top" :style="top"></div>
    <div class="kit-spotlight-mask__background kit-spotlight-mask__right" :style="right"></div>
    <div class="kit-spotlight-mask__background kit-spotlight-mask__left" :style="left"></div>
    <div class="kit-spotlight-mask__background kit-spotlight-mask__bottom" :style="bottom"></div>
    <div class="kit-spotlight-mask__border" :style="border"></div>
    <div ref="textRef" class="kit-spotlight-mask__text" :style="text">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { calculateRectangle, Rectangle } from './spotlight-helpers'

type Props = {
  elements?: Element[]
  textWidth?: number
  margin?: [number, number]
}
const props = withDefaults(defineProps<Props>(), {
  textWidth: 300,
  margin: () => [10, 10]
})

const showMe = ref(true)

const top = ref<Partial<CSSStyleDeclaration>>()
const right = ref<Partial<CSSStyleDeclaration>>()
const left = ref<Partial<CSSStyleDeclaration>>()
const bottom = ref<Partial<CSSStyleDeclaration>>()
const border = ref<Partial<CSSStyleDeclaration>>()
const text = ref<Partial<CSSStyleDeclaration>>()

const textRef = ref<HTMLDivElement>()

watch(
  () => props.elements?.length,
  () => {
    redraw()
  },
  { immediate: true }
)

function spotlight(rect: Rectangle, margin: [number, number], borderWidth = 3) {
  let offsetFromTop = 0
  let height = rect.y - margin[0]

  top.value = {
    top: '0',
    left: '0',
    height: `${height}px`,
    right: '0'
  }

  offsetFromTop += height
  height = rect.height + 2 * margin[0]

  const widthRight = window.innerWidth - rect.x - rect.width - margin[1]

  right.value = {
    top: `${offsetFromTop}px`,
    right: '0',
    height: `${height}px`,
    width: widthRight > 0 ? `${widthRight}px` : '0'
  }

  const widthLeft = rect.x - margin[1]

  left.value = {
    top: `${rect.y - margin[0]}px`,
    left: '0',
    height: `${rect.height + 2 * margin[0]}px`,
    width: widthLeft > 0 ? `${rect.x - margin[1]}px` : '0'
  }

  offsetFromTop += height

  bottom.value = {
    top: `${offsetFromTop}px`,
    left: '0',
    right: '0',
    bottom: '0'
  }

  border.value = {
    top: `${rect.y - margin[0] - borderWidth}px`,
    left: `${rect.x - margin[1] - borderWidth}px`,
    width: `${rect.width + 2 * margin[1]}px`,
    height: `${rect.height + 2 * margin[0]}px`,
    borderWidth: `${borderWidth}px`
  }
}

function positionText(rectangle: Rectangle, margin) {
  let x = rectangle.x - props.textWidth - margin - 2 * 15 - 20
  const y = rectangle.y - margin - 3

  if (x < 0) {
    x = rectangle.x + rectangle.width + 2 * margin
  }

  text.value = {
    width: `${props.textWidth}px`,
    left: `${x}px`,
    top: `${y}px`
  }
}

function redraw() {
  const elements = props.elements || []
  if (elements.length) {
    const rectangle = calculateRectangle(elements as Element[])

    spotlight(rectangle, props.margin, 3)
    positionText(rectangle, 10)
    showMe.value = true
  } else {
    showMe.value = false
  }
}

function onClick(event: MouseEvent) {
  if (!textRef.value?.contains(event.target!)) {
    event.stopPropagation()
    event.preventDefault()
  }
}

onMounted(() => {
  document.addEventListener('click', onClick)
  window.addEventListener('resize', redraw)
})
onUnmounted(() => {
  document.removeEventListener('click', onClick)
  window.removeEventListener('resize', redraw)
})
</script>

<style scoped>
.kit-spotlight-mask {
  --kit-spotlight-border-color: #6e5dc6;
  --kit-spotlight-text-color: #ffffff;
  --kit-spotlight-bg-color: #6e5dc6;
}

.kit-dark .kit-spotlight-mask {
  --kit-spotlight-border-color: #9f8fef;
  --kit-spotlight-text-color: #1D2125;
  --kit-spotlight-bg-color: #9f8fef;
}

.kit-spotlight-mask {
  position: relative;
}
.kit-spotlight-mask__background {
  position: fixed;
  background-color: #091e427d;
  opacity: 1;
  z-index: 1000000;
  transition: all 150ms;
}

.kit-spotlight-mask__border {
  position: fixed;
  border: solid 10px var(--kit-spotlight-border-color);
  z-index: 1000001;
  transition: all 150ms;
  border-radius: 3px;
  color: var(--kit-spotlight-text-color);
}

.kit-spotlight-mask__text {
  position: fixed;
  z-index: 1000002;
  padding: 15px 20px;
  transition: all 150ms;
  background: var(--kit-spotlight-bg-color);
  border-radius: 0.25rem;
  color: var(--kit-spotlight-text-color);
}
</style>
