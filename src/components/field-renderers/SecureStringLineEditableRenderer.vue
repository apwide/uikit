<template>
  <InlineEdit
    v-if="editable"
    :align="align"
    :confirm="confirm"
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
      <TextField
        :compact="props.compact"
        :is-disabled="props.isLoading"
        :is-focused="props.isFocused"
        :is-invalid="!!props.error"
        :is-loading="props.isLoading"
        style="width: 100%"
        @click.stop>
        <input
          ref="input"
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
      </TextField>
    </template>
    <slot>
      <SecureStringLineRenderer :html-value="htmlValue" :value="value" />
    </slot>
  </InlineEdit>
  <div v-else>
    <slot>
      <SecureStringLineRenderer :html-value="htmlValue" :value="value" />
    </slot>
  </div>
</template>

<script>
import InlineEdit from '../Form/InlineEdit'
import TextField from '../Form/TextField'
import KitIconButton from '../Button/KitIconButton'
import KitIcon from '../Icon/KitIcon'
import SecureStringLineRenderer from './SecureStringLineRenderer'

export default {
  name: 'KitSecureSingleLineEditableRenderer',
  components: {
    KitIcon,
    KitIconButton,
    SecureStringLineRenderer,
    TextField,
    InlineEdit
  },
  props: {
    value: {
      type: String,
      default: undefined
    },
    htmlValue: {
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
    confirm: {
      type: Boolean,
      default: true
    },
    icon: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: undefined
    },
    pattern: {
      type: String,
      default: ''
    },
    forceIsEditing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      obfuscated: true,
      isEditing: false,
      justClickedOnTypeSwitch: false
    }
  },
  computed: {
    type() {
      return this.obfuscated ? 'password' : 'text'
    },
    title() {
      return this.obfuscated ? 'Reveal' : 'Hide'
    }
  },
  methods: {
    onStartEditing() {
      this.isEditing = true
      this.$nextTick(() => {
        if (this.$refs.input) {
          this.$refs.input.focus()
        }
      })
      this.$emit('start-editing')
    },
    onStopEditing() {
      this.isEditing = false
      this.$emit('stop-editing')
    },
    onBlur(originalBlur, data) {
      originalBlur(data)
    },
    onSaveRequested(...args) {
      this.$emit('save-requested', ...args)
    },
    toggleFieldType() {
      this.obfuscated = !this.obfuscated
      if (this.$refs.input) {
        this.$refs.input.focus()
      }
    }
  }
}
</script>
