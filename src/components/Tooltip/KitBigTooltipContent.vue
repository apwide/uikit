<template>
  <Transition name="fade" appear>
    <Popup
      ref="popup"
      :placement="placement"
      :target-element="targetElement"
      :transition-delay="300"
      :is-open="true"
    >
      <slot></slot>
    </Popup>
  </Transition>
</template>
<script setup lang="ts">
import Popup from '@components/common/Popup.vue'

type Props = {
  placement?: string
  targetElement: HTMLElement
}

withDefaults(defineProps<Props>(), {
  placement: 'right'
})

</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-active[with-delay] {
  transition-delay: 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>