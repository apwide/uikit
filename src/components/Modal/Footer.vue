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

<script>
import KitButton from '../Button/KitButton.vue'

export default {
  name: 'KitFooter',
  components: { KitButton },
  props: {
    appearance: {
      type: String,
      default: 'primary'
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default: () => ['Continue', 'Cancel']
    },
    pending: {
      type: Boolean,
      default: false
    },
    shouldAllowSubmit: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      submit: 'Continue',
      cancel: 'Cancel'
    }
  },
  watch: {
    actions: {
      handler(actions = ['Continue', 'Cancel']) {
        const [submit, cancel] = actions
        this.submit = submit
        this.cancel = cancel
      },
      immediate: true
    }
  },
  methods: {
    onCancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped>
.kit-modal-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
