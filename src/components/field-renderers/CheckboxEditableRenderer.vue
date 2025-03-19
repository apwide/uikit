<template>
  <KitInlineEdit
    v-if="editable"
    :value="value"
    :offset="[0, 0]"
    class="checkbox-edit"
    :placement="placement"
    @save-requested="onSaveRequested">
    <template #editor="props">
      <KitCheckbox
        size="large"
        class="checkbox"
        :checked="props.value"
        :is-focused="props.isFocused"
        :is-invalid="props.isInvalid"
        :disabled="props.isLoading"
        @input="props.input"
        @focus="props.focus"
        @blur="props.blur"
        @confirm="props.confirm"
        @keyup.esc="props.cancel" />
    </template>
    <slot>
      <CheckboxRenderer :value="value" />
    </slot>
  </KitInlineEdit>
  <CheckboxRenderer v-else :value="value" />
</template>

<script setup lang="ts">
import KitCheckbox from '../Checkbox/KitCheckbox.vue'
import KitInlineEdit from '../Form/KitInlineEdit.vue'
import CheckboxRenderer from './CheckboxRenderer.vue'

type Props = {
  value?: boolean
  editable?: boolean
  placement?: string
}

withDefaults(defineProps<Props>(), {
  value: false,
  editable: true,
  placement: 'right'
})

const emit = defineEmits<{
  (event: 'save-requested', value: boolean, callback: () => boolean)
}>()

function onSaveRequested(value, callback) {
  emit('save-requested', value, callback)
}
</script>
<style scoped>
.checkbox-edit {
  width: 44px;
}

.checkbox {
  box-sizing: border-box;
  padding: 6px;
}
</style>
