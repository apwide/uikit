<template>
  <div class="kit-big-tooltip">
    <span ref="trigger"
          @mouseenter="show"
          @mouseleave="requestHide">
      <slot name="trigger"></slot>
    </span>
    <Teleport to="body" :disabled="!appendToBody">
      <KitBigTooltipContent
        v-if="visible"
        ref="popper"
        :placement="placement"
        :target-element="trigger"
        @mouseleave="requestHide"
      >
        <slot :hide="hide"></slot>
      </KitBigTooltipContent>
    </Teleport>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import KitBigTooltipContent from '@components/Tooltip/KitBigTooltipContent.vue'

type Props = {
  placement?: string
  disabled?: boolean
  appendToBody?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placement: 'right',
  disabled: false,
  appendToBody: false
})

const trigger = ref<HTMLSpanElement>()
const popper = ref<InstanceType<KitBigTooltipContent>>()
const visible = ref(false)

function show() {
  if (props.disabled) {
    return
  }
  visible.value = true
}

function isInside(e: MouseEvent, rect: DOMRect) {
  if (rect.x <= e.x && e.x <= rect.x + rect.width) {
    if (rect.y <= e.y && e.y <= rect.y + rect.height) {
      return true
    }
  }
  return false
}

function requestHide(e: MouseEvent) {
  if (isInside(e, trigger.value.getBoundingClientRect()) || isInside(e, popper.value.$el.getBoundingClientRect())) {
    return
  }
  return hide()
}

function hide() {
  visible.value = false
}

</script>
<style scoped>
</style>