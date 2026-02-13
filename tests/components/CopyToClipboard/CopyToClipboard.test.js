import { shallowMount } from '@vue/test-utils'
import KitCopyToClipboard from '@components/CopyToClipboard/KitCopyToClipboard.vue'

describe('KitCopyToClipboard', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitCopyToClipboard)
    expect(component.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = shallowMount(KitCopyToClipboard, {
      slots: { default: '<button class="custom-btn">Copy</button>' }
    })
    expect(component.find('.custom-btn').exists()).toBe(true)
  })

  it('uses default label "Copy to clipboard"', () => {
    const component = shallowMount(KitCopyToClipboard)
    expect(component.vm.$props.label).toBe('Copy to clipboard')
  })

  it('accepts custom label', () => {
    const component = shallowMount(KitCopyToClipboard, {
      propsData: { label: 'Copy link' }
    })
    expect(component.vm.$props.label).toBe('Copy link')
  })

  it('uses default placement top', () => {
    const component = shallowMount(KitCopyToClipboard)
    expect(component.vm.$props.placement).toBe('top')
  })

  it('accepts custom placement', () => {
    const component = shallowMount(KitCopyToClipboard, {
      propsData: { placement: 'bottom' }
    })
    expect(component.vm.$props.placement).toBe('bottom')
  })

  it('uses default iconType clone', () => {
    const component = shallowMount(KitCopyToClipboard)
    expect(component.vm.$props.iconType).toBe('clone')
  })

  it('accepts custom iconType', () => {
    const component = shallowMount(KitCopyToClipboard, {
      propsData: { iconType: 'copy' }
    })
    expect(component.vm.$props.iconType).toBe('copy')
  })

  it('accepts text prop', () => {
    const component = shallowMount(KitCopyToClipboard, {
      propsData: { text: 'Text to copy' }
    })
    expect(component.vm.$props.text).toBe('Text to copy')
  })

  it('renders content div', () => {
    const component = shallowMount(KitCopyToClipboard)
    const content = component.find('.content')
    expect(content.exists()).toBe(true)
  })

  it('wraps content in Tooltip component', () => {
    const component = shallowMount(KitCopyToClipboard)
    // Tooltip is stubbed by shallowMount (shows as anonymous-stub)
    expect(component.html()).toContain('anonymous-stub')
    expect(component.html()).toContain('label="Copy to clipboard"')
  })

  it('provides copied state to slot', () => {
    const component = shallowMount(KitCopyToClipboard, {
      scopedSlots: {
        default: function (props) {
          return this.$createElement('div', { class: 'test' }, props.copied.toString())
        }
      }
    })
    expect(component.find('.test').exists()).toBe(true)
  })
})
