<template>
  <div class="kit-modal-footer">
    <KitButton
      :auto-focus="autoFocus"
      type="submit"
      :is-disabled="pending || !shouldAllowSubmit"
      :is-loading="pending"
      :appearance="appearance">
      {{ submit }}
    </KitButton>
    <KitButton v-if="cancel" appearance="subtle" :is-disabled="pending" @click="onCancel">
      {{ cancel }}
    </KitButton>
  </div>
</template>

<script setup lang="ts">
import KitButton from '../Button/KitButton.vue'
import { ref, watch } from 'vue'

type Props = {
  appearance?: string
  autoFocus?: boolean
  actions?: string[]
  pending?: boolean
  shouldAllowSubmit?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  appearance: 'primary',
  autoFocus: false,
  actions: () => ['Continue', 'Cancel'],
  pending: false,
  shouldAllowSubmit: true
})

const emit = defineEmits<{
  (event: 'cancel')
}>()

const submit = ref('Continue')
const cancel = ref('Cancel')

watch(() => props.actions, ([ s, c ] = ['Continue', 'Cancel']) => {
  submit.value = s
  cancel.value = c
}, {
  immediate: true
})

function onCancel() {
  emit('cancel')
}
</script>

<style scoped>
.kit-modal-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
