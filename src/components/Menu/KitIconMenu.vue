<template>
  <KitDropdown
    v-if="slots.default && slots.icon"
    class="kit-icon-menu"
    :placement="placement"
    :close-on-click="closeOnClick"
    :close-on-outside-click="closeOnClickOutside"
    :is-disabled="isDisabled"
    @close="handleClose"
    @open="handleOpen">
    <template #trigger="{ toggle, isOpen, isDisabled }">
      <KitIconButton
        :is-selected="isOpen"
        :is-disabled="isDisabled"
        :style="{ fontSize: iconSize }"
        :title="title"
        :spacing="spacing"
        :appearance="appearance"
        @click="toggle">
        <slot name="icon" :is-open="isOpen" />
      </KitIconButton>
    </template>
    <template #default="{ toggle }">
      <slot v-if="isLocalOpen" :isOpen="isLocalOpen" :toggle="toggle" />
    </template>
  </KitDropdown>
</template>

<script lang="ts" setup>
import { ref, useSlots } from 'vue'
import KitDropdown from '../Dropdown/KitDropdown.vue'
import KitIconButton from '../Button/KitIconButton.vue'

type Props = {
  title?: string
  spacing?: string
  appearance?: string
  placement?: string
  iconSize?: string
  isDisabled?: boolean
  closeOnClick?: boolean
  closeOnClickOutside?: boolean
}

withDefaults(defineProps<Props>(), {
  title: 'Select your action',
  appearance: 'subtle',
  placement: 'bottom-end',
  iconSize: '1em',
  isDisabled: false,
  closeOnClick: true,
  closeOnClickOutside: true
})

const isLocalOpen = ref(false)
const slots = useSlots()

const emit = defineEmits<{
  (event: 'open')
  (event: 'close')
}>()

function handleOpen() {
  isLocalOpen.value = true
  emit('open')
}

function handleClose() {
  isLocalOpen.value = false
  emit('close')
}
</script>
<style scoped>
.kit-icon-menu {
  color: #091e42;
}
</style>
