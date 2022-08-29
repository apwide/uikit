<template>
  <transition name="modal" appear>
    <Blanket class="dialog" :z-index="zIndex" @click.native="clicked">
      <PositionerAbsolute :width="currentWidth">
        <form class="kit-modal modal-container" novalidate @submit.prevent="onSubmit" ref="form">
          <slot>
            <header v-if="!noHeader">
              <slot name="header">
                <Header :heading="heading" :appearance="appearance" />
              </slot>
            </header>
            <div class="content">
              <slot name="content" />
            </div>
            <footer v-if="!noFooter">
              <slot name="footer">
                <slot name="progress" />
                <Footer
                  :actions="actions"
                  :auto-focus="autoFocus"
                  :appearance="appearance"
                  :should-allow-submit="shouldAllowSubmit"
                  :pending="pending"
                  @cancel="onCancel" />
              </slot>
            </footer>
          </slot>
        </form>
      </PositionerAbsolute>
    </Blanket>
  </transition>
</template>

<script>
import Blanket from './Blanket'
import PositionerAbsolute from './PositionerAbsolute'
import Header from './Header'
import Footer from './Footer'

const ESC = 27
export default {
  name: 'KitModal',
  components: {
    Blanket,
    PositionerAbsolute,
    Header,
    Footer
  },
  props: {
    heading: {
      type: String,
      default: ''
    },
    appearance: {
      type: String,
      default: undefined
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
    },
    width: {
      type: String,
      default: '600px'
    },
    zIndex: {
      type: Number,
      default: 999
    },
    closeOnEsc: {
      type: Boolean,
      default: true
    },
    closeOnOutsideClick: {
      type: Boolean,
      default: false
    },
    noFooter: {
      type: Boolean,
      default: false
    },
    noHeader: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mounted: false
    }
  },
  computed: {
    currentWidth() {
      return String(this.width)
    }
  },
  mounted() {
    document.body.appendChild(this.$el)
  },
  beforeMount() {
    document.body.classList.add('kit-modal-is-open')
    document.addEventListener('keyup', this.onEsc)
  },
  destroyed() {
    // make sure that there is no modal on the current page before removing the scroll lock class
    const modals = document.querySelectorAll('.kit-modal')
    if (!modals.length) {
      document.body.classList.remove('kit-modal-is-open')
    }
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.onEsc)
    try {
      document.body.removeChild(this.$el)
    } catch (error) {
      if (error.name === 'NotFoundError') {
        // already removed https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
        return
      }
      throw error
    }
  },
  methods: {
    onEsc(e) {
      if (e.keyCode === ESC && this.closeOnEsc && !this.pending) {
        this.$emit('cancel')
      }
    },
    onCancel() {
      this.$emit('cancel')
    },
    onSubmit() {
      this.$emit('submit')
    },
    clicked(event) {
      if (this.closeOnOutsideClick && this.isClickedOutside(event)) {
        this.onCancel()
      }
    },
    isClickedOutside(event) {
      const { x, y, width, height } = this.$refs.form.getBoundingClientRect()
      const x1 = x + width
      const y1 = y + height
      const { clientX, clientY } = event
      return clientX < x || x1 < clientX || clientY < y || y1 < clientY
    }
  }
}
</script>

<style scoped>
.modal-container {
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(9, 30, 66, 0.08) 0 0 0 1px, rgba(9, 30, 66, 0.08) 0 2px 1px, rgba(9, 30, 66, 0.31) 0 0 20px -6px;
  color: rgb(9, 30, 66);
  display: flex;
  flex-direction: column;
  max-height: 100%;
  pointer-events: auto;
  border-radius: 3px;
  outline: 0;
  overflow: hidden;
  padding: 0px 28px;
}

.content {
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1 1 auto;
  padding: 2px 0px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .positioner {
  opacity: 0;
  transform: translateY(20px);
}

.modal-leave-active .positioner {
  opacity: 0;
  transform: translateY(-20px);
}

header,
footer {
  align-items: center;
  display: flex;
  z-index: 1;
  box-shadow: none;
  flex: 0 0 auto;
  transition: box-shadow 200ms ease 0s;
  padding: 20px 0px 14px;
}

footer {
  justify-content: flex-end;
}
</style>
<style>
body.kit-modal-is-open {
  overflow: hidden !important;
}
</style>
