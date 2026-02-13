<template>
  <div class="kit-tooltip">
    <div ref="target" class="target" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <slot />
    </div>
    <Teleport to="body" :disabled="!appendToBody">
      <TooltipContent
        v-if="show"
        :target-element="target"
        :boundaries-element="boundariesElement"
        :placement="placement"
        :offset="offset"
        :label="label" />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
const show = ref(false)

function onMouseEnter() {
  if (props.disabled) {
    return
  }
  show.value = true
}

function onMouseLeave() {
  show.value = false
}
</script>

<style scoped>
.kit-tooltip {
  display: inline-block;
  min-width: 20px;
}
</style>
