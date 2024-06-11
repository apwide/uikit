<template>
  <div ref="dropdownContainer" :full-width="fullWidth" class="dropdown-container">
    <slot v-if="slots.trigger" :is-disabled="isDisabled" :is-open="open" :toggle="onTriggerClick" name="trigger" />
    <KitButton v-else :appearance="appearance" :is-disabled="isDisabled" :is-selected="open" @click="onTriggerClick">
      {{ label }}
      <template #icon-after>
        <ChevronDownIcon />
      </template>
    </KitButton>

    <Popup
      ref="menu"
      :boundaries-element="boundariesElement"
      :is-open="open"
      :offset="[0, 4]"
      :placement="placement"
      :position-fixed="positionFixed"
      :target-element="dropdownContainer"
      with-light-shadows
      without-arrow
      @click.native="onMenuClick">
      <slot :toggle="onTriggerClick" name="dropdown-menu">
        <div class="dropdown-menu">
          <slot />
        </div>
      </slot>
    </Popup>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, useSlots, watch } from 'vue'
import KitButton from '../Button/KitButton.vue'
import ChevronDownIcon from '../Icon/aui/ChevronDownIcon'
import Popup from '../common/Popup.vue'

type Props = {
  label?: string
  appearance?: string
  boundariesElement?: string | HTMLElement
  closeOnClick?: boolean
  closeOnOutsideClick?: boolean
  closeOnEsc?: boolean
  positionFixed?: boolean
  placement?: string
  appendToBody?: boolean
  fullWidth?: boolean
  isDisabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Dropdown',
  appearance: 'default',
  boundariesElement: 'viewport',
  closeOnClick: true,
  closeOnOutsideClick: true,
  closeOnEsc: true,
  positionFixed: false,
  placement: 'bottom-start',
  appendToBody: false,
  fullWidth: false,
  isDisabled: false
})

const emit = defineEmits<{
  (event: 'close')
  (event: 'open')
}>()
const open = ref(false)
const lastOpen = ref(0)
const DEFAULT_OPEN_TRIGGER_THRESHOLD = 200
const menu = ref()
const dropdownContainer = ref<HTMLDivElement>()

const slots = useSlots()

watch(open, (newValue) => {
  if (newValue) {
    lastOpen.value = Date.now()
  }
})

function onKeyDown(event) {
  if (event.keyCode === 27 && props.closeOnEsc) {
    open.value = false
  }
}

function onOutsideClick(event: MouseEvent) {
  /**
   * When props.closeOnOutsideClick is true, we allow some time after
   * the opening before checking if the dropdown should be closed.
   * This avoid some strange cases where the trigger is removed from the
   * DOM on opening and thus is not contained by dropdownContainer,
   * triggering a false close of the dropdown
   */
  if (
    props.closeOnOutsideClick &&
    Date.now() > lastOpen.value + DEFAULT_OPEN_TRIGGER_THRESHOLD &&
    !dropdownContainer.value?.contains(event.target as Node)
  ) {
    open.value = false
  }
}

function updatePopperPosition() {
  if (menu.value) {
    const [popper] = menu.value.$children
    popper.update()
  }
}

function onTriggerClick() {
  open.value = !open.value
}

function onMenuClick() {
  if (props.closeOnClick) {
    open.value = false
  }
}

watch(open, async (current) => {
  document.removeEventListener('click', onOutsideClick)
  document.removeEventListener('keydown', onKeyDown)
  if (current) {
    await nextTick()
    document.addEventListener('click', onOutsideClick)
    document.addEventListener('keydown', onKeyDown)
    if (props.appendToBody && menu.value) {
      document.body.appendChild(menu.value.$el)
      updatePopperPosition()
    }
    emit('open')
  } else {
    emit('close')
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onOutsideClick)
  document.removeEventListener('keydown', onKeyDown)
})
</script>

<style scoped>
.dropdown-container {
  display: inline-block;
}

.dropdown-menu {
  max-height: 400px;
  overflow: auto;
}

.dropdown-container[full-width],
.dropdown-container[full-width] >>> button,
.dropdown-container[full-width] >>> .kit-button__label {
  width: 100%;
}
</style>
