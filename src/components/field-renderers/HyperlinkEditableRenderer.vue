<template>
  <KitInlineEdit v-if="editable" :value="link" :placement="placement" @save-requested="onSaveRequested">
    <slot>
      <HyperlinkRenderer :link="link" />
    </slot>
  </KitInlineEdit>
  <HyperlinkRenderer v-else :link="link" />
</template>

<script setup lang="ts">
import KitInlineEdit from '../Form/KitInlineEdit.vue'
import HyperlinkRenderer from './HyperlinkRenderer'

type Props = {
  link?: string
  editable?: boolean
  placement?: string
}

withDefaults(defineProps<Props>(), {
  editable: true,
  placement: 'right'
})

const emit = defineEmits<{
  (event: 'save-requested', data?: undefined, callback: (e: Error) => void)
}>()

function onSaveRequested(...args) {
  emit('save-requested', ...args)
}

</script>
