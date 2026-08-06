<template>
  <KitInlineEdit v-if="editable" :value="link" :placement="placement" @save-requested="onSaveRequested">
    <slot>
      <KitHyperlinkRenderer :link="link" />
    </slot>
  </KitInlineEdit>
  <KitHyperlinkRenderer v-else :link="link" />
</template>

<script setup lang="ts">
import KitInlineEdit from '../Form/KitInlineEdit.vue'
import KitHyperlinkRenderer from './KitHyperlinkRenderer'

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
