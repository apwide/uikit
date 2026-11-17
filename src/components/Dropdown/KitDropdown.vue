<template>
  <div ref="dropdownContainer" :full-width="fullWidth || undefined" class="dropdown-container">
    <slot
      v-if="slots.trigger"
      :is-disabled="isDisabled"
      :is-open="open"
      :toggle="onTriggerClick"
      :trigger-attrs="triggerAttrs"
      name="trigger" />
    <KitButton
      v-else
      v-bind="triggerAttrs"
      :appearance="appearance"
      :is-disabled="isDisabled"
      :is-selected="open"
      @click="onTriggerClick">
      {{ label }}
      <template #icon-after>
        <ChevronDownIcon />
      </template>
    </KitButton>

    <Teleport to="body" :disabled="!appendToBody">
      <Popup
        :boundaries-element="boundariesElement"
        :is-open="open"
        :offset="[0, 4]"
        :placement="placement"
        :position-fixed="positionFixed"
        :target-element="dropdownContainer"
        :role="hasItems ? 'menu' : null"
        with-light-shadows
        without-arrow
        @click="onMenuClick">
        <div ref="menuEl" class="kit-dropdown__menu-items">
          <slot :toggle="onTriggerClick" name="dropdown-menu">
            <div class="dropdown-menu">
              <slot :toggle="onTriggerClick" />
            </div>
          </slot>
        </div>
      </Popup>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, useSlots, watch } from 'vue'
import KitButton from '../Button/KitButton.vue'
import ChevronDownIcon from '../Icon/aui/ChevronDownIcon.vue'
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
const dropdownContainer = ref<HTMLDivElement>()
const menuEl = ref<HTMLDivElement>()
const hasItems = ref(false)
const triggerAttrs = computed(() => ({ 'aria-haspopup': 'menu' as const, 'aria-expanded': open.value }))
const ITEMS = '[role^="menuitem"]:not([aria-disabled="true"])'
const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'

const slots = useSlots()

watch(open, (newValue) => {
  if (newValue) {
    lastOpen.value = Date.now()
  }
})

// WAI-ARIA menu button pattern: arrows move between items, Escape closes, Tab leaves the menu
function onKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    if (props.closeOnEsc) open.value = false
    return
  }
  if (event.key === 'Tab') {
    // a menu is one Tab stop; other content (checkboxes, fields) keeps Tab between its controls
    if ((document.activeElement as HTMLElement)?.closest?.(ITEMS) && menuEl.value?.contains(document.activeElement))
      open.value = false
    return
  }
  // keep arrows, Home and End for text fields placed in a menu (search, filters)
  if ((event.target as HTMLElement)?.closest?.('input, textarea, select, [contenteditable="true"]')) return
  const items = Array.from(menuEl.value?.querySelectorAll<HTMLElement>(ITEMS) ?? [])
  if (!items.length || !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
  event.preventDefault()
  const current = items.indexOf((document.activeElement as HTMLElement)?.closest?.(ITEMS) as HTMLElement)
  const next = {
    ArrowDown: (current + 1) % items.length,
    ArrowUp: current <= 0 ? items.length - 1 : current - 1,
    Home: 0,
    End: items.length - 1
  }[event.key]
  items[next].focus()
}

function focusTrigger() {
  dropdownContainer.value?.querySelector<HTMLElement>(FOCUSABLE)?.focus()
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
    emit('open')
    // items may render on 'open' (KitIconMenu); leave focus alone if the menu already took it (autofocus field)
    await nextTick()
    hasItems.value = !!menuEl.value?.querySelector(ITEMS)
    // a text field trigger (search picker) keeps focus so typing goes on
    const active = document.activeElement as HTMLElement | null
    const typingInTrigger = !!active?.matches?.('input, textarea') && dropdownContainer.value?.contains(active)
    if (!typingInTrigger && !menuEl.value?.contains(active))
      menuEl.value?.querySelector<HTMLElement>(`${ITEMS}, ${FOCUSABLE}`)?.focus()
  } else {
    // the menu is about to be removed: give focus back to its button instead of losing it to the page
    if (menuEl.value?.contains(document.activeElement)) focusTrigger()
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

.kit-dropdown__menu-items {
  display: contents;
}

.dropdown-menu {
  max-height: 400px;
  overflow: auto;
}

.dropdown-container[full-width],
.dropdown-container[full-width] :deep(button),
.dropdown-container[full-width] :deep(.kit-button__label) {
  width: 100%;
}
</style>
