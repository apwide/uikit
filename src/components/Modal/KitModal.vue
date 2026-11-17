<template>
  <Teleport to="body">
    <div class="kit-big-modal" v-bind="$attrs">
      <Transition appear name="kit-modal-transition">
        <KitBlanket ref="blanket" :z-index="zIndex" class="kit-dialog">
          <KitPositionerAbsolute :width="currentWidth">
            <form
              ref="form"
              :no-padding="noPadding || undefined"
              class="kit-modal kit-modal-container"
              role="dialog"
              aria-modal="true"
              tabindex="-1"
              novalidate
              @submit.prevent="onSubmit">
              <slot>
                <header v-if="!noHeader">
                  <slot name="header">
                    <KitHeader :appearance="appearance" :heading="heading" />
                  </slot>
                </header>
                <div class="kit-content">
                  <slot name="content" />
                </div>
                <footer v-if="!noFooter">
                  <slot name="footer">
                    <slot name="progress" />
                    <KitFooter
                      :actions="actions"
                      :appearance="appearance"
                      :auto-focus="autoFocus"
                      :pending="pending"
                      :should-allow-submit="shouldAllowSubmit"
                      @cancel="onCancel" />
                  </slot>
                </footer>
              </slot>
            </form>
          </KitPositionerAbsolute>
        </KitBlanket>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue'
import KitPositionerAbsolute from '@components/Modal/PositionerAbsolute.vue'
import KitFooter from '@components/Modal/Footer.vue'
import KitHeader from '@components/Modal/Header.vue'
import KitBlanket from '@components/Modal/Blanket.vue'
import { uniqueId } from '@/utils/dom'
export type Props = {
  heading?: string
  appearance?: string
  autoFocus?: boolean
  actions?: string[]
  pending?: boolean
  shouldAllowSubmit?: boolean
  width?: string
  zIndex?: number
  closeOnEsc?: boolean
  closeOnOutsideClick?: boolean
  noFooter?: boolean
  noHeader?: boolean
  noPadding?: boolean
}

defineOptions({ inheritAttrs: false })

const ESC = 27

const props = withDefaults(defineProps<Props>(), {
  heading: '',
  autoFocus: false,
  actions: () => ['Continue', 'Cancel'],
  pending: false,
  shouldAllowSubmit: true,
  width: '600px',
  zIndex: 999,
  closeOnEsc: true,
  closeOnOutsideClick: false,
  noFooter: false,
  noHeader: false,
  noPadding: false
})

const emit = defineEmits<{
  (event: 'cancel')
  (event: 'submit')
}>()

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), ' +
  'textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]'

const blanket = ref()
const form = ref<HTMLFormElement>()
const lastInitTime = ref(0)
let opener: HTMLElement | null = null

function focusables(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.getClientRects().length > 0)
}

function isTopmost() {
  const dialogs = document.querySelectorAll('.kit-modal-container')
  return dialogs[dialogs.length - 1] === form.value
}

// keeps Tab inside the topmost dialog (WAI-ARIA modal dialog pattern)
function onTab(e: KeyboardEvent) {
  const dialog = form.value
  if (e.key !== 'Tab' || !dialog || !isTopmost()) {
    return
  }
  const items = focusables(dialog)
  if (!items.length) {
    e.preventDefault()
    dialog.focus()
    return
  }
  const first = items[0]
  const last = items[items.length - 1]
  const active = document.activeElement
  if (!dialog.contains(active) || (e.shiftKey ? active === first || active === dialog : active === last)) {
    e.preventDefault()
    ;(e.shiftKey ? last : first).focus()
  }
}

async function focusOnOpen() {
  await nextTick()
  const dialog = form.value
  if (!dialog || dialog.contains(document.activeElement)) {
    return
  }
  const content = dialog.querySelector<HTMLElement>('.kit-content')
  const [firstField] = content ? focusables(content) : []
  ;(firstField || dialog).focus()
}
const currentWidth = computed(() => props.width)

function onEsc(e) {
  if (e.keyCode === ESC && props.closeOnEsc && !props.pending) {
    emit('cancel')
  }
}

function onCancel() {
  emit('cancel')
}

function onSubmit() {
  emit('submit')
}

let lastMousedownWasOnBlanket = false

function onMousedown(event: PointerEvent) {
  if (props.closeOnOutsideClick && Date.now() > lastInitTime.value + 500) {
    lastMousedownWasOnBlanket = event.target === blanket.value?.$el
  }
}

function onMouseup() {
  if (lastMousedownWasOnBlanket) {
    emit('cancel')
  }
}

onMounted(() => {
  document.body.classList.add('kit-modal-is-open')
  document.addEventListener('keyup', onEsc)
  lastInitTime.value = Date.now()
  /*
   We cannot rely on click as Firefox puts the mousedown element as target
   and Chrome puts the mouseup element as target
   */
  blanket.value.$el.addEventListener('mousedown', onMousedown)
  blanket.value.$el.addEventListener('mouseup', onMouseup)

  opener = document.activeElement as HTMLElement | null
  const heading = form.value?.querySelector('h1, h2, h3, h4, h5, h6, [role="heading"]')
  if (heading) {
    heading.id ||= uniqueId()
    form.value.setAttribute('aria-labelledby', heading.id)
  }
  document.addEventListener('keydown', onTab)
  focusOnOpen()
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onTab)
  const focusWasInside = !document.activeElement || document.activeElement === document.body ||
    form.value?.contains(document.activeElement)
  if (focusWasInside && opener?.isConnected) {
    opener.focus()
  }
  document.removeEventListener('keyup', onEsc)
  blanket.value?.$el.removeEventListener('mousedown', onMousedown)
  blanket.value?.$el.removeEventListener('mouseup', onMouseup)
})

onUnmounted(() => {
  // make sure that there is no modal on the current page before removing the scroll lock class
  const modals = document.querySelectorAll('.kit-modal')
  if (!modals.length) {
    document.body.classList.remove('kit-modal-is-open')
  }
})
</script>

<style scoped>
.kit-modal-container {
  background-color: var(--kit-modal-container-bg-color);
  box-shadow: var(--kit-overlay-shadow);
  border: var(--kit-overlay-border);
  color: var(--kit-modal-container-text-color);
  display: flex;
  flex-direction: column;
  max-height: 100%;
  pointer-events: auto;
  border-radius: 3px;
  outline: 0;
  overflow: hidden;
  padding: 0 28px;
}

.kit-modal-container[no-padding] {
  padding: 0;
}

.kit-content {
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1 1 auto;
  padding: 2px 10px 2px 0;
}

.kit-modal-transition-enter-from {
  opacity: 0;
}

.kit-modal-transition-leave-active {
  opacity: 0;
}

.kit-modal-transition-enter-from .kit-positioner {
  opacity: 0;
  transform: translateY(20px);
}

.kit-modal-transition-leave-active .kit-positioner {
  opacity: 0;
  transform: translateY(-20px);
}

header,
footer {
  align-items: center;
  display: flex;
  z-index: 1;
  box-shadow: none;
  flex: 0 0 auto;
  transition: box-shadow 200ms ease 0s;
  padding: 20px 0 14px;
}

footer {
  justify-content: flex-end;
}
</style>
<style>
body.kit-modal-is-open {
  overflow: hidden !important;
}
</style>
