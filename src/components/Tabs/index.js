import TabContainer from './TabContainer'

const TabItem = (content) => ({
  ...content,
  render() {
    return this.$slots.default.filter((vnode) => vnode.tag !== undefined)
  }
})

const TabHeader = TabItem({
  name: 'KitTabHeader',
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    stretch: {
      type: Boolean,
      default: false
    },
    inactive: {
      type: Boolean,
      default: false
    }
  }
})
const TabContent = TabItem({
  name: 'KitTabContent',
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  }
})
export { TabContainer, TabHeader, TabContent }
