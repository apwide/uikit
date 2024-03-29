<template>
  <div ref="dialog-container" class="kit-dialog-container">
    <slot :is-open="open" :toggle="onTriggerClick" name="trigger" />
    <Popup
      ref="dialog"
      :boundaries-element="boundariesElement"
      :is-open="open"
      :offset="offset"
      :placement="placement"
      :position-fixed="positionFixed"
      :target-element="$refs['dialog-container']">
      <div ref="dialog-content" class="kit-dialog-content">
        <slot :toggle="onTriggerClick" />
      </div>
    </Popup>
  </div>
</template>

<script>
import Popup from '../common/Popup'

export default {
  components: {
    Popup
  },
  props: {
    boundariesElement: {
      type: [String, HTMLElement, Function],
      default: 'viewport'
    },
    placement: {
      type: String,
      default: 'right'
    },
    offset: {
      type: Array,
      default: () => [8, 8]
    },
    closeOnOutsideClick: {
      type: Boolean,
      default: true
    },
    closeOnEsc: {
      type: Boolean,
      default: true
    },
    positionFixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: false
    }
  },
  watch: {
    open(value) {
      if (value) {
        document.addEventListener('click', this.onOutsideClick)
        document.addEventListener('keydown', this.onKeyDown)
        this.$emit('open')
        // eslint-disable-next-line no-underscore-dangle
        const openEvent = new Event('apw::inlinedialog-open')
        document.dispatchEvent(openEvent)
        document.addEventListener('apw::inlinedialog-open', this.onOtherInlineDialogOpen)
      } else {
        document.removeEventListener('click', this.onOutsideClick)
        document.removeEventListener('apw::inlinedialog-open', this.onOtherInlineDialogOpen)
        document.removeEventListener('keydown', this.onKeyDown)
        this.$emit('close')
      }
    }
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onOutsideClick)
    document.removeEventListener('apw::inlinedialog-open', this.onOtherInlineDialogOpen)
    document.removeEventListener('keydown', this.onKeyDown)
  },
  methods: {
    onTriggerClick() {
      this.open = !this.open
    },
    onOutsideClick(event) {
      if (this.$refs['dialog-container'].contains(event.target)) return
      if (this.closeOnOutsideClick) {
        this.open = false
      }
    },
    onKeyDown(event) {
      if (event.keyCode === 27 && this.closeOnEsc) {
        this.open = false
      }
    },
    onOtherInlineDialogOpen() {
      this.open = false
    }
  }
}
</script>

<style scoped>
.kit-dialog-container {
  display: inline-block;
}

.kit-dialog-content {
  background-color: white;
  max-width: 300px;
  max-height: 400px;
  overflow: auto;
}
</style>
