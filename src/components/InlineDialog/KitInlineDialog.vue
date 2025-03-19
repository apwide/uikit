<template>
  <div ref="dialogContainer" class="kit-dialog-container">
    <slot :is-open="open" :toggle="onTriggerClick" name="trigger" />
    <Popup
      ref="dialog"
      :boundaries-element="boundariesElement"
      :is-open="open"
      :offset="offset"
      :placement="placement"
      :position-fixed="positionFixed"
      :target-element="dialogContainer">
      <div ref="dialog-content" class="kit-dialog-content">
        <slot :toggle="onTriggerClick" />
      </div>
    </Popup>
  </div>
</template>

<script setup lang="ts">
import Popup from '../common/Popup'
import { onBeforeUnmount, ref, watch } from 'vue'

type Props = {
  boundariesElement?: string | HTMLElement | Function
  placement?: string
  offset?: number[]
  closeOnOutsideClick?: boolean
  closeOnEsc?: boolean
  positionFixed?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  boundariesElement: 'viewport',
  placement: 'right',
  offset: () => [8, 8],
  closeOnOutsideClick: true,
  closeOnEsc: true,
  positionFixed: false
})

const emit = defineEmits<{
  (event: 'open')
  (event: 'close')
}>()

const dialogContainer = ref<HTMLDivElement>()
const open = ref(false)

function onTriggerClick() {
  open.value = !open.value
}

function onOutsideClick(event) {
  if (dialogContainer.value.contains(event.target)) return
  if (props.closeOnOutsideClick) {
    open.value = false
  }
}

function onKeyDown(event) {
  if (event.keyCode === 27 && props.closeOnEsc) {
    open.value = false
  }
}

function onOtherInlineDialogOpen() {
  open.value = false
}

watch(open, value => {
  if (value) {
    document.addEventListener('click', onOutsideClick)
    document.addEventListener('keydown', onKeyDown)
    emit('open')
    // eslint-disable-next-line no-underscore-dangle
    const openEvent = new Event('apw::inlinedialog-open')
    document.dispatchEvent(openEvent)
    document.addEventListener('apw::inlinedialog-open', onOtherInlineDialogOpen)
  } else {
    document.removeEventListener('click', onOutsideClick)
    document.removeEventListener('apw::inlinedialog-open', onOtherInlineDialogOpen)
    document.removeEventListener('keydown', onKeyDown)
    emit('close')
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onOutsideClick)
  document.removeEventListener('apw::inlinedialog-open', onOtherInlineDialogOpen)
  document.removeEventListener('keydown', onKeyDown)
})

</script>

<style scoped>
.kit-dialog-container {
  display: inline-block;
}

.kit-dialog-content {
  background-color: white;
  max-width: 300px;
  max-height: 400px;
  overflow: auto;
}
</style>
