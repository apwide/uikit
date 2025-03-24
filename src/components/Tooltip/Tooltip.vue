<template>
  <div class="kit-tooltip">
    <div ref="target" class="target" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <slot />
    </div>
    <TooltipContent
      v-if="show"
      ref="popper"
      :target-element="target"
      :boundaries-element="boundariesElement"
      :placement="placement"
      :offset="offset"
      :label="label" />
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import TooltipContent from './TooltipContent.vue'

type Props = {
  label: string
  placement?: string
  disabled?: boolean
  offset?: number[]
  appendToBody?: boolean
  boundariesElement?: string
}

const props = withDefaults(defineProps<Props>(), {
  placement: 'top',
  disabled: false,
  offset: () => [0, 5],
  appendToBody: false,
  boundariesElement: 'viewport'
})

const target = ref<HTMLDivElement>()
const popper = ref<InstanceType<TooltipContent>>()
const show = ref(false)

function onMouseEnter() {
  if (props.disabled) {
    return
  }
  show.value = true
  if (props.appendToBody) {
    nextTick(() => {
      append()
    })
  }
}

function onMouseLeave() {
  if (props.appendToBody) {
    if (popper.value) {
      document.body.removeChild(popper.value.$el)
    }
  }
  show.value = false
}

function append() {
  if (popper.value) {
    document.body.appendChild(popper.value.$el)
  }
}

</script>

<style scoped>
.kit-tooltip {
  display: inline-block;
  min-width: 20px;
}
</style>
