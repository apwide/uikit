<template>
  <KitModal
    class="kit-modal"
    :no-footer="!slots['footer']"
    :appearance="appearance"
    :auto-focus="autoFocus"
    :actions="actions"
    :pending="pending"
    :z-index="zIndex"
    :close-on-esc="closeOnEsc"
    :close-on-outside-click="closeOnOutsideClick"
    :width="modalWidth"
    v-bind="$attrs"
    v-on="$listeners"
    no-padding>
    <template #header>
      <div class="kit-modal__header-pre-title">
        <slot name="breadcrumb" class="" />
        <KitButtonGroup spacing="normal">
          <slot name="actions" />
          <KitIconButton
            class="kit-modal__close"
            title="close"
            @click="cancel">
            <KitIcon type="times" style="font-size: 1.2rem" />
          </KitIconButton>
        </KitButtonGroup>
      </div>
      <div class="kit-modal__header-title">
        <slot name="title">
          <Header :heading="heading" />
        </slot>
      </div>
    </template>
    <template #content>
      <div class="kit-modal__content">
        <slot />
      </div>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </KitModal>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useSlots } from 'vue'
import KitButtonGroup from '../Button/KitButtonGroup.vue'
import KitIconButton from '../Button/KitIconButton.vue'
import KitIcon from '../Icon/KitIcon.vue'
import KitModal from './KitModal.vue'
import Header from './Header.vue'

type Props = {
  heading?: string
  // copied from Modal as defineProps does not allow to use imported types
  appearance?: string
  autoFocus?: boolean
  actions?: string[]
  pending?: boolean
  zIndex?: number
  closeOnEsc?: boolean
  closeOnOutsideClick?: boolean
  noFooter?: boolean
  noHeader?: boolean
}

withDefaults(defineProps<Props>(), {
  heading: ''
})

const emit = defineEmits<{
  /* @deprecated */
  (event: 'cancel')
  (event: 'close')
}>()
const slots = useSlots()
const modalWidth = ref('')

function cancel() {
  emit('cancel')
  emit('close')
}

function resize() {
  const { width } = document.body.getBoundingClientRect()
  if (width > 1200) {
    modalWidth.value = '80%'
  } else {
    modalWidth.value = '900px'
  }
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
})
onBeforeUnmount(() => {
  window.addEventListener('resize', resize)
})
</script>
<style scoped>
.kit-modal__content {
  padding-bottom: 10px;
}

.kit-modal__header-pre-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}

.kit-modal__header-pre-title,
.kit-modal__header-title {
  padding: 0 10px 0 20px;
}

.kit-modal :deep(header) {
  display: block;
}
</style>
