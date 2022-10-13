<template>
  <InlineEdit
    v-if="editable"
    :value="value"
    :icon="icon"
    pencil-style="floating"
    :placement="placement"
    :force-is-editing="forceIsEditing"
    :confirm="confirm"
    @save-requested="onSaveRequested"
    @start-editing="onStartEditing"
    @stop-editing="onStopEditing">
    <slot>
      <MultiLineRenderer :value="value" />
    </slot>
    <TextArea
      slot="editor"
      slot-scope="{ value, input, isFocused, isInvalid, isLoading, blur, focus, confirm, cancel }"
      :value="value"
      :is-focused="isFocused"
      :is-invalid="isInvalid"
      :is-loading="isLoading"
      :submit-on-enter="submitOnEnter"
      @confirm="confirm"
      @keydown.meta.enter="confirm"
      @keyup.esc="cancel"
      @input="onInput($event, input)"
      @blur="blur"
      @focus="focus" />
  </InlineEdit>
  <div v-else>
    <slot>
      <MultiLineRenderer :value="value" />
    </slot>
  </div>
</template>

<script>
import TextArea from '../Form/TextArea'
import InlineEdit from '../Form/InlineEdit'
import MultiLineRenderer from './MultiLineRenderer'

export default {
  name: 'KitMultiLineEditableRenderer',
  components: { MultiLineRenderer, InlineEdit, TextArea },
  props: {
    value: {
      type: String,
      default: undefined
    },
    editable: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'right'
    },
    icon: {
      type: Boolean,
      default: true
    },
    submitOnEnter: {
      type: Boolean,
      default: false
    },
    forceIsEditing: {
      type: Boolean,
      default: false
    },
    confirm: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onInput(value, inlineInput) {
      this.$emit('change', value)
      inlineInput(value)
    },
    onSaveRequested(...args) {
      this.$emit('save-requested', ...args)
    },
    onStartEditing() {
      this.$emit('start-editing')
    },
    onStopEditing() {
      this.$emit('stop-editing')
    }
  }
}
</script>
