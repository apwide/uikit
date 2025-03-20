<template>
  <div ref="me" class="kit-big-modal">
    <Transition appear name="kit-modal-transition">
      <KitBlanket ref="blanket" :z-index="zIndex" class="kit-dialog">
        <KitPositionerAbsolute :width="currentWidth">
          <form
            ref="form"
            :no-padding="noPadding"
            class="kit-modal kit-modal-container"
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
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue'
import KitPositionerAbsolute from '@components/Modal/PositionerAbsolute.vue'
import KitFooter from '@components/Modal/Footer.vue'
import KitHeader from '@components/Modal/Header.vue'
import KitBlanket from '@components/Modal/Blanket.vue'
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

const me = ref()
const blanket = ref()
const lastInitTime = ref(0)
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
  document.body.appendChild(me.value)
  document.body.classList.add('kit-modal-is-open')
  document.addEventListener('keyup', onEsc)
  lastInitTime.value = Date.now()
  /*
   We cannot rely on click as Firefox puts the mousedown element as target
   and Chrome puts the mouseup element as target
   */
  blanket.value.$el.addEventListener('mousedown', onMousedown)
  blanket.value.$el.addEventListener('mouseup', onMouseup)
})

onBeforeUnmount(() => {
  document.removeEventListener('keyup', onEsc)
  try {
    document.body.removeChild(me.value)
    blanket.value.$el.removeEventListener('mousedown', onMousedown)
    blanket.value.$el.removeEventListener('mouseup', onMouseup)
  } catch (error) {
    if (error.name === 'NotFoundError') {
      // already removed https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
      return
    }
    throw error
  }
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
  --kit-modal-container-bg-color: rgb(255, 255, 255);
  --kit-modal-container-shadow: rgba(9, 30, 66, 0.08) 0 0 0 1px, rgba(9, 30, 66, 0.08) 0 2px 1px, rgba(9, 30, 66, 0.31) 0 0 20px -6px;
  --kit-modal-container-text-color: rgb(9, 30, 66);
}

[data-color-mode="dark"] .kit-modal-container {
  --kit-modal-container-bg-color: #282e33;
  --kit-modal-container-shadow: 0px 0px 0px 1px #39424a, 0px 8px 12px #0304045C, 0px 0px 1px 1px #03040480;
  --kit-modal-container-text-color: #b6c2cf;
}

.kit-modal-container {
  background-color: var(--kit-modal-container-bg-color);
  box-shadow: var(--kit-modal-container-shadow);
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

.kit-modal-transition-enter {
  opacity: 0;
}

.kit-modal-transition-leave-active {
  opacity: 0;
}

.kit-modal-transition-enter .kit-positioner {
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
