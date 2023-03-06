<template>
  <KitIconMenu
    v-if="$scopedSlots.default"
    :title="title"
    :icon-size="iconSize"
    :is-disabled="isDisabled"
    :spacing="spacing"
    :appearance="appearance">
    <template #icon>
      <AwesomeIcon type="ellipsis-h" />
    </template>
    <template #default="isOpen">
      <slot :isOpen="isOpen" />
    </template>
  </KitIconMenu>
</template>

<script>
import Vue from 'vue'
import AwesomeIcon from '../Icon/KitIcon.vue'
import KitIconMenu from './KitIconMenu.vue'

export default Vue.extend({
  components: { AwesomeIcon, KitIconMenu },
  props: {
    title: {
      type: String,
      default: 'Select your action'
    },
    iconSize: {
      type: String,
      default: '1em'
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    spacing: {
      type: String,
      default: 'compact'
    },
    appearance: {
      type: String,
      default: 'subtle'
    }
  }
})
</script>
