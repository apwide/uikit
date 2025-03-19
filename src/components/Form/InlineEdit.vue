<template>
  <div ref="wrapperContainer" :editing="isEditing" class="kit-inline-edit__wrapper">
    <div ref="container" :compact="compact" :is-invalid="!!error" class="kit-inline-edit">
      <InlineEditViewContent
        v-if="!isEditing || keepReadonlyViewOnEdit"
        ref="valueView"
        :align="align"
        :compact="compact"
        :icon="icon"
        @edit-requested="onEditRequested">
        <slot />
      </InlineEditViewContent>
      <div v-if="isEditing" style="display: flex" :class="{ 'kit-inline-edit--has-general-error': isGeneralError }">
        <slot
          :blur="onBlur"
          :cancel="cancelInlineEdit"
          :confirm="confirmEditedValue"
          :content-height="contentHeight"
          :content-width="contentWidth"
          :focus="onFocus"
          :input="onInput"
          :is-focused="isFocused"
          :is-invalid="!!error"
          :is-loading="isLoading"
          :value="editingValue"
          name="editor">
          <KitTextField
            :compact="compact"
            :is-disabled="isLoading"
            :is-focused="isFocused"
            :is-invalid="!!error"
            :is-loading="isLoading"
            :style="{ minWidth: `${contentWidth}px` }"
            @click.stop
            @hook:beforeMount="beforeTextFieldMount">
            <input
              ref="input"
              v-model="editingValue"
              :align="align"
              :disabled="isLoading"
              :maxlength="maxlength"
              :step="step"
              :type="type"
              class="input"
              @blur="onBlur"
              @focus="onFocus"
              @keyup="onKeyUp"
              @keydown.meta.enter="onKeyUp"
              @keydown.exact="validate" />
          </KitTextField>
        </slot>
        <div v-if="isGeneralError" class="kit-inline-edit__general-error">
          <KitIconButton
            ref="generalErrorTrigger"
            title="Click to see the error"
            @click="showGeneralError = !showGeneralError">
            <KitIcon class="kit-inline-edit__general-error-icon" type="exclamation-triangle" />
          </KitIconButton>
        </div>
      </div>
    </div>
    <Popper
      v-if="elementToAlignButtonsTo && isEditing && !isLoading && !hideConfirmButtons"
      ref="buttons"
      :offset="offset"
      :target-element="elementToAlignButtonsTo">
      <InlineEditButtons @blur="onBlur" @cancel="cancelInlineEdit" @confirm="confirmEditedValue" />
    </Popper>
    <InlineErrorMessage
      v-if="isValidationError"
      :error="error"
      :placement="placement"
      :target-element="elementToAlignButtonsTo" />
    <Popper
      v-if="isGeneralError && generalErrorTrigger && showGeneralError"
      :target-element="generalErrorTrigger.$el"
      :placement="buttonsPlacement"
      appearance="top">
      <div class="kit-inline-edit__general-error-dialog">
        <SectionMessage appearance="error">
          {{ error.generalError }}
        </SectionMessage>
        <KitIconButton
          spacing="compact"
          class="kit-inline-edit__general-error-close"
          title="Close"
          @click="showGeneralError = false">
          <KitIcon type="times" />
        </KitIconButton>
      </div>
    </Popper>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch, watchEffect } from 'vue'
import GeneralError from '@components/Form/GeneralError'
import Popper from '../Popper/Popper.vue'
import KitIcon from '../Icon/KitIcon.vue'
import KitIconButton from '../Button/KitIconButton.vue'
import SectionMessage from '../SectionMessage/KitSectionMessage.vue'
import KitTextField from './KitTextField.vue'
import InlineEditButtons from './InlineEditButtons.vue'
import InlineEditViewContent from './InlineEditViewContent.vue'
import InlineErrorMessage from './InlineErrorMessage.vue'

const ENTER = 13
const ESC = 27
const BACKSPACE = 8
const TAB = 9
const Status = { VALIDATION_ERROR: 422 }

type Props = {
  value: any
  type?: string
  step?: string
  maxlength?: number
  compact?: boolean
  offset?: [number, number]
  confirm?: boolean
  blurToSave?: boolean
  elementToPositionConfirmButtonsTo?: HTMLElement
  hideConfirmButtons?: boolean
  icon?: boolean
  align?: string
  pattern?: string
  placement?: string
  forceIsEditing?: boolean
  buttonsPlacement?: string
  keepReadonlyViewOnEdit?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  type: 'text',
  step: 'any',
  compact: false,
  offset: () => [0, 5],
  confirm: true,
  blurToSave: false,
  hideConfirmButtons: false,
  icon: true,
  pattern: '',
  placement: 'top',
  forceIsEditing: false,
  buttonsPlacement: 'bottom-end'
})

const showGeneralError = ref(false)
const isFocused = ref(false)
const isEditing = ref(props.forceIsEditing)
const isLoading = ref(false)
const editingValue = ref(props.value)
const error = ref<Error | GeneralError>()
const isDirty = ref(false)
const contentWidth = ref(0)
const contentHeight = ref(0)

const container = ref<HTMLDivElement>()
const buttons = ref()
const input = ref()
const wrapperContainer = ref<HTMLDivElement>()
const valueView = ref()
const generalErrorTrigger = ref()

const emit = defineEmits<{
  (event: 'start-editing')
  (event: 'stop-editing')
  (event: 'save-requested', value: any, callback: (e: Error) => void)
}>()

const elementToAlignButtonsTo = computed(() => props.elementToPositionConfirmButtonsTo || container.value)

const isValidationError = computed(() => {
  if (!error.value) {
    return false
  }
  if (error.value.status) {
    return error.value.status === Status.VALIDATION_ERROR
  }
  return !(error.value as GeneralError).generalError
})
const isGeneralError = computed(() => error.value && (error.value as GeneralError).generalError)

watch(isEditing, () => {
  if (isEditing.value) {
    emit('start-editing')
  } else {
    if (container.value) {
      container.value.style['min-width'] = 'auto'
    }
    error.value = undefined
    emit('stop-editing')
  }
})

async function editingRequested() {
  await nextTick()
  isEditing.value = props.forceIsEditing
  // as we might pass data, we must set is as dirty to make sure it will propose to save
  isDirty.value = true
  await nextTick()

  if (input.value && typeof input.value.focus === 'function') {
    input.value.focus()
  }
}

function onInput(value: string) {
  editingValue.value = value

  if (buttons.value) {
    buttons.value.update()
  }
}

async function onBlur(event) {
  const focusWithinComponent = wrapperContainer.value.contains(event.relatedTarget)
  if (!focusWithinComponent && (!props.confirm || props.blurToSave)) {
    confirmEditedValue()
  }

  if (!isEditing.value || isLoading.value) return
  if (!focusWithinComponent && !props.forceIsEditing) {
    await nextTick()
    cancelInlineEdit()
  }
  isFocused.value = false
}

function onFocus() {
  isFocused.value = true
}

function onKeyUp(e) {
  if (e.keyCode === ENTER) confirmEditedValue()
  if (e.keyCode === ESC) cancelInlineEdit()
}

async function onEditRequested() {
  isEditing.value = true
  isFocused.value = true
  await nextTick()

  if (input.value) {
    input.value.focus()
  }
}

function saveInlineEdit(err) {
  isDirty.value = false
  if (err) {
    onValidateError(err)
    return
  }
  isLoading.value = false
  isEditing.value = false
  editingValue.value = props.value
}

function cancelInlineEdit() {
  isEditing.value = false
  editingValue.value = props.value
}

async function onValidateError(err) {
  isLoading.value = false
  isFocused.value = false
  error.value = err
  await nextTick()
  isFocused.value = true
  if (input.value) {
    input.value.focus()
  }
}

function confirmEditedValue() {
  // in the case of forceEditing, value might not change
  if (!props.forceIsEditing && props.value === editingValue.value) {
    isEditing.value = false
    error.value = undefined
    return
  }
  if (!isLoading.value) {
    if (isDirty.value) {
      isLoading.value = true
      emit('save-requested', editingValue.value, saveInlineEdit)
    } else if (error.value) {
      onValidateError(error.value)
    }
  }
}

function beforeTextFieldMount() {
  if (valueView.value) {
    const { width, height } = valueView.value.$el.getBoundingClientRect()
    contentWidth.value = width
    contentHeight.value = height
  }
}

function validate(e) {
  if (!props.pattern) return
  if (![TAB, BACKSPACE].includes(e.keyCode) && !isValidId(e.key)) {
    e.preventDefault()
  }
}

function isValidId(key) {
  const pattern = new RegExp(props.pattern)
  return pattern.test(key)
}

watch(editingValue, async () => {
  isDirty.value = true
  await nextTick()
  if (buttons.value) {
    buttons.value.update()
  }
})
watchEffect(() => (editingValue.value = props.value))
watchEffect(() => {
  if (props.forceIsEditing) {
    editingRequested()
  }
})
</script>
<style scoped>
.kit-inline-edit {
  margin: -8px;
}

.kit-inline-edit[compact] {
  margin: -2px;
}

input {
  font-family: inherit;
}

input[align='end'] {
  text-align: right;
}

.kit-inline-edit__general-error-dialog {
  z-index: 500;
  max-width: 400px;
  min-width: 200px;
  font-size: inherit;
  font-weight: inherit;
}

/* Clearly a hack */
.kit-inline-edit--has-general-error >>> .kit-text-field {
  padding-right: 25px;
}

.kit-inline-edit__general-error {
  position: relative;
  right: 0;
  margin-bottom: -2px;
  margin-left: -35px;
  display: flex;
}

.kit-inline-edit__general-error-icon {
  color: rgb(191, 38, 0);
}

.kit-inline-edit__general-error-close {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
