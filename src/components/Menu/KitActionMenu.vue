<template>
  <KitIconMenu
    v-if="$scopedSlots.default"
    :title="title"
    :icon-size="iconSize"
    :is-disabled="isDisabled"
    :spacing="spacing"
    :appearance="appearance"
    @open="handleOpen"
    @close="handleClose">
    <template #icon>
      <AwesomeIcon type="ellipsis-h" />
    </template>
    <template #default="isOpen">
      <slot :isOpen="isOpen" />
    </template>
  </KitIconMenu>
</template>

<script setup lang="ts">
import AwesomeIcon from '../Icon/KitIcon.vue'
import KitIconMenu from './KitIconMenu.vue'

type Props = {
  title?: string
  iconSize?: string
  isDisabled?: boolean
  spacing?: string
  appearance?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Select your action',
  iconSize: '1em',
  isDisabled: false,
  spacing: 'compact',
  appearance: 'subtle'
})

const emit = defineEmits<{
  (event: 'open')
  (event: 'close')
}>()

function handleOpen() {
  emit('open')
}

function handleClose() {
  emit('close')
}
</script>
