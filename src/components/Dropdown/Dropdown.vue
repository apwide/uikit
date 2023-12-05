<template>
  <div ref="dropdown-container" :full-width="fullWidth" class="dropdown-container">
    <slot
      v-if="$scopedSlots.trigger"
      :is-disabled="isDisabled"
      :is-open="open"
      :toggle="onTriggerClick"
      name="trigger" />
    <Button v-else :appearance="appearance" :is-disabled="isDisabled" :is-selected="open" @click="onTriggerClick">
      {{ label }}
      <ChevronDownIcon slot="icon-after" />
    </Button>

    <Popup
      ref="menu"
      :boundaries-element="boundariesElement"
      :is-open="open"
      :offset="[0, 4]"
      :placement="placement"
      :position-fixed="positionFixed"
      :target-element="$refs['dropdown-container']"
      with-light-shadows
      without-arrow
      @click.native="onMenuClick">
      <slot :toggle="onTriggerClick" name="dropdown-menu">
        <div class="dropdown-menu">
          <slot />
        </div>
      </slot>
    </Popup>
  </div>
</template>

<script>
import Button from '../Button/Button.vue'
import ChevronDownIcon from '../Icon/ChevronDownIcon.ts'
import Popup from '../common/Popup.vue'

export default {
  name: 'KitDropdown',
  components: {
    Button,
    ChevronDownIcon,
    Popup
  },
  props: {
    label: {
      type: String,
      default: 'Dropdown'
    },
    appearance: {
      type: String,
      default: 'default'
    },
    boundariesElement: {
      type: [String, HTMLElement, Function],
      default: 'viewport'
    },
    closeOnClick: {
      type: Boolean,
      default: true
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
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    isDisabled: {
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
        setTimeout(() => {
          document.addEventListener('click', this.onOutsideClick)
          document.addEventListener('keydown', this.onKeyDown)
          if (this.appendToBody) {
            document.body.appendChild(this.$refs.menu.$el)
            this.updatePopperPosition()
          }
          this.$emit('open')
        }, 0)
      } else {
        document.removeEventListener('click', this.onOutsideClick)
        document.removeEventListener('keydown', this.onKeyDown)
        this.$emit('close')
      }
    }
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onOutsideClick)
  },
  methods: {
    onTriggerClick() {
      this.open = !this.open
    },
    onMenuClick() {
      if (this.closeOnClick) {
        this.open = false
      }
    },
    onOutsideClick(event) {
      if (this.$refs['dropdown-container'].contains(event.target)) return
      if (this.closeOnOutsideClick) {
        this.open = false
      }
    },
    onKeyDown(event) {
      if (event.keyCode === 27 && this.closeOnEsc) {
        this.open = false
      }
    },
    updatePopperPosition() {
      if (this.$refs.menu) {
        const [popper] = this.$refs.menu.$children
        popper.update()
      }
    }
  }
}
</script>

<style scoped>
.dropdown-container {
  display: inline-block;
}

.dropdown-menu {
  max-height: 400px;
  overflow: auto;
}

.dropdown-container[full-width],
.dropdown-container[full-width] >>> button,
.dropdown-container[full-width] >>> .kit-button__label {
  width: 100%;
}
</style>
