import { shallowMount } from '@vue/test-utils'
import KitInlineDialog from '@components/InlineDialog/KitInlineDialog.vue'

describe('KitInlineDialog', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitInlineDialog)
    expect(component.exists()).toBe(true)
  })

  it('renders dialog container', () => {
    const component = shallowMount(KitInlineDialog)
    const container = component.find('.kit-dialog-container')
    expect(container.exists()).toBe(true)
  })

  it('is closed by default', () => {
    const component = shallowMount(KitInlineDialog)
    // Dialog should render with anonymous-stub (shallowMount stubs child components)
    expect(component.html()).toContain('anonymous-stub')
    expect(component.find('.kit-dialog-container').exists()).toBe(true)
  })

  it('provides toggle function to trigger slot', () => {
    const component = shallowMount(KitInlineDialog, {
      scopedSlots: {
        trigger: function (props) {
          return this.$createElement('button', {
            on: { click: props.toggle }
          }, 'Toggle')
        }
      }
    })
    const button = component.find('button')
    expect(button.exists()).toBe(true)
  })

  it('provides isOpen state to trigger slot', () => {
    const component = shallowMount(KitInlineDialog, {
      scopedSlots: {
        trigger: function (props) {
          return this.$createElement('div', props.isOpen.toString())
        }
      }
    })
    expect(component.text()).toContain('false')
  })

  it('uses default placement right', () => {
    const component = shallowMount(KitInlineDialog)
    expect(component.vm.$props.placement).toBe('right')
  })

  it('accepts custom placement', () => {
    const component = shallowMount(KitInlineDialog, {
      propsData: { placement: 'bottom' }
    })
    expect(component.vm.$props.placement).toBe('bottom')
  })

  it('accepts closeOnOutsideClick prop', () => {
    const component = shallowMount(KitInlineDialog, {
      propsData: { closeOnOutsideClick: false }
    })
    expect(component.vm.$props.closeOnOutsideClick).toBe(false)
  })

  it('accepts closeOnEsc prop', () => {
    const component = shallowMount(KitInlineDialog, {
      propsData: { closeOnEsc: false }
    })
    expect(component.vm.$props.closeOnEsc).toBe(false)
  })

  it('renders dialog content element', () => {
    const component = shallowMount(KitInlineDialog)
    const content = component.find('.kit-dialog-content')
    expect(content.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = shallowMount(KitInlineDialog, {
      slots: { default: '<div class="test-content">Content</div>' }
    })
    expect(component.find('.test-content').exists()).toBe(true)
  })
})
