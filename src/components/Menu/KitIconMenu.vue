<template>
  <KitDropdown
    v-if="$scopedSlots.default && $scopedSlots.icon"
    class="kit-icon-menu"
    placement="bottom-end"
    :close-on-click="closeOnClick"
    :close-on-outside-click="closeOnClickOutside"
    :is-disabled="isDisabled"
    @close="isLocalOpen = false"
    @open="isLocalOpen = true">
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
    <slot :isOpen="isLocalOpen" />
  </KitDropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import KitDropdown from '../Dropdown/KitDropdown.vue'
import KitIconButton from '../Button/KitIconButton.vue'

type Props = {
  title?: string
  spacing?: string
  appearance?: string
  iconSize?: string
  isDisabled?: boolean
  closeOnClick?: boolean
  closeOnClickOutside?: boolean
}

withDefaults(defineProps<Props>(), {
  title: 'Select your action',
  appearance: 'subtle',
  iconSize: '1em',
  isDisabled: false,
  closeOnClick: true,
  closeOnClickOutside: true
})

const isLocalOpen = ref(false)
</script>
<style scoped>
.kit-icon-menu {
  color: #091e42;
}
</style>
