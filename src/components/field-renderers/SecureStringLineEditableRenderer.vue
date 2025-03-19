<template>
  <InlineEdit
    v-if="editable"
    :align="align"
    :confirm="confirm"
    :blur-to-save="blurToSave"
    :force-is-editing="forceIsEditing"
    :icon="icon"
    :pattern="pattern"
    :placement="placement"
    :value="value"
    type="text"
    @start-editing="onStartEditing"
    @stop-editing="onStopEditing"
    @save-requested="onSaveRequested">
    <template #editor="props">
      <KitTextField
        :is-disabled="props.isLoading"
        :is-focused="props.isFocused"
        :is-loading="props.isLoading"
        style="width: 100%"
        @click.stop>
        <input
          ref="inputRef"
          v-model="props.value"
          :disabled="props.isLoading"
          :type="type"
          class="input"
          @focus="props.focus"
          @input="props.input($event.target.value)"
          @blur.stop.prevent="onBlur(props.blur, $event)"
          @keydown.meta.enter="props.confirm"
          @keydown.exact.esc="props.cancel" />

        <KitIconButton :title="title" @click.stop.prevent="toggleFieldType">
          <KitIcon v-if="obfuscated" type="eye" />
          <KitIcon v-else type="eye-slash" />
        </KitIconButton>
      </KitTextField>
    </template>
    <template #default>
      <slot>
        <SecureStringLineRenderer :html-value="htmlValue" :value="value" />
      </slot>
    </template>
  </InlineEdit>
  <div v-else>
    <slot>
      <SecureStringLineRenderer :html-value="htmlValue" :value="value" />
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import InlineEdit from '../Form/InlineEdit.vue'
import KitTextField from '../Form/KitTextField.vue'
import KitIconButton from '../Button/KitIconButton.vue'
import KitIcon from '../Icon/KitIcon.vue'
import SecureStringLineRenderer from './SecureStringLineRenderer.vue'

type Props = {
  value?: string
  htmlValue?: string
  editable?: boolean
  placement?: string
  confirm?: boolean
  blurToSave?: boolean
  icon?: boolean
  align?: string
  pattern?: string
  forceIsEditing?: boolean
  emptyPlaceholder?: string
}

withDefaults(defineProps<Props>(), {
  editable: true,
  placement: 'right',
  confirm: true,
  icon: true,
  pattern: '',
  forceIsEditing: false
})

const emit = defineEmits<{
  (event: 'start-editing')
  (event: 'stop-editing')
  (event: 'save-requested', value: string, callback: any)
}>()

const obfuscated = ref(true)
const isEditing = ref(false)
const inputRef = ref<HTMLInputElement>()

const type = computed(() => (obfuscated.value ? 'password' : 'text'))
const title = computed(() => (obfuscated.value ? 'Reveal' : 'Hide'))

async function onStartEditing() {
  isEditing.value = true
  await nextTick()
  if (inputRef.value) {
    inputRef.value.focus()
  }
  emit('start-editing')
}

function onStopEditing() {
  isEditing.value = false
  emit('stop-editing')
}

function onBlur(originalBlur, data) {
  originalBlur(data)
}

function onSaveRequested(value: string, callback: CallableFunction) {
  emit('save-requested', value, callback)
}

function toggleFieldType() {
  obfuscated.value = !obfuscated.value
  if (inputRef.value) {
    inputRef.value.focus()
  }
}
</script>
