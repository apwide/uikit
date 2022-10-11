<template>
  <transition appear name="modal">
    <Blanket :z-index="zIndex" class="dialog" @click.native="clicked">
      <PositionerAbsolute :width="currentWidth">
        <form ref="form" class="kit-modal modal-container" novalidate @submit.prevent="onSubmit">
          <slot>
            <header v-if="!noHeader">
              <slot name="header">
                <Header :appearance="appearance" :heading="heading" />
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
                  :appearance="appearance"
                  :auto-focus="autoFocus"
                  :pending="pending"
                  :should-allow-submit="shouldAllowSubmit"
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

function collectAllChildRectangles(node, collector) {
  if (Object.hasOwnProperty.call(node, 'getBoundingClientRect')) {
    const { x, y, height, width } = node.getBoundingClientRect()
    collector.push({ x, y, height, width })
  }
  if (node.hasChildNodes()) {
    for (const childNode of node.childNodes) {
      collectAllChildRectangles(childNode, collector)
    }
  }
}

const validateIfInRectangle = (testedX, TestedY, { x, y, height, width }) =>
  x < testedX && testedX < x + width && y < TestedY && TestedY < y + height

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
      if (event.x === 0 && event.y === 0) {
        // This is a "false" click let's ignore it.
        // This solves the case of an inline edit present on the modal that is navigated with the keyboard.
        return false
      }

      if (event.target.classList.contains('blanket')) {
        return true
      }

      const { clientX, clientY } = event

      // If it is physically inside the modal box.
      if (validateIfInRectangle(clientX, clientY, this.$refs.form.getBoundingClientRect())) {
        return false
      }

      // If the target is an (in)direct child node of the modal.
      if (this.$refs.form.contains(event.target)) {
        return false
      }

      // Heavy artillery: if the click happen over a child node outside its parent boundaries.
      // This should solve most append-to-body component as the "floating element" should be on top
      // of its parent.
      const collector = []
      collectAllChildRectangles(this.$refs.form, collector)
      return !collector.some((rectangle) => validateIfInRectangle(clientX, clientY, rectangle))
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
