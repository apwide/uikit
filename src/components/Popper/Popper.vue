<script>
// import Popper from 'popper.js';
import { createPopper } from '@popperjs/core'

export default {
  name: 'KitPopper',
  props: {
    targetElement: {
      type: HTMLElement,
      required: true
    },
    placement: {
      type: String,
      default: 'bottom-end',
      validator(value) {
        return [
          'auto',
          'auto-start',
          'auto-end',
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'right',
          'right-start',
          'right-end',
          'left',
          'left-start',
          'left-end'
        ].includes(value)
      }
    },
    offset: {
      type: Array,
      default: () => [0, 5]
    },
    transitionDelay: {
      type: Number,
      default: 0
    },
    boundariesElement: {
      type: [String, HTMLElement, Function],
      default: 'viewport'
    },
    positionFixed: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initPopper()
    })
  },
  beforeDestroy() {
    setTimeout(() => this.popper.destroy(), this.transitionDelay)
  },
  methods: {
    initPopper() {
      const [defaultSlot] = this.$slots.default
      const boundariesElement =
        typeof this.boundariesElement === 'function' ? this.boundariesElement() : this.boundariesElement

      this.popper = createPopper(this.targetElement, defaultSlot.elm, {
        placement: this.placement,
        positionFixed: this.positionFixed,
        modifiers: [
          {
            name: 'offset',
            options: { offset: this.offset }
          },
          {
            name: 'preventOverflow',
            options: { boundary: boundariesElement }
          }
        ]
      })
    },
    update() {
      if (this.popper) {
        this.popper.update()
      }
    }
  },
  render() {
    const [defaultSlot] = this.$slots.default
    return defaultSlot
  }
}
</script>
