import { shallowMount } from '@vue/test-utils'
import KitTabButton from '@components/Tabs/KitTabButton.vue'

describe('KitTabButton', () => {
  it('renders with required id prop', () => {
    const component = shallowMount(KitTabButton, {
      propsData: { id: 'tab1' }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders as button element', () => {
    const component = shallowMount(KitTabButton, {
      propsData: { id: 'tab1' }
    })
    expect(component.element.tagName).toBe('BUTTON')
  })

  it('renders slot content', () => {
    const component = shallowMount(KitTabButton, {
      propsData: { id: 'tab1' },
      slots: { default: 'Tab Label' }
    })
    expect(component.text()).toContain('Tab Label')
  })

  it('has correct CSS class', () => {
    const component = shallowMount(KitTabButton, {
      propsData: { id: 'tab1' }
    })
    expect(component.classes()).toContain('kit-tab-button')
  })

  it('has type button', () => {
    const component = shallowMount(KitTabButton, {
      propsData: { id: 'tab1' }
    })
    expect(component.attributes('type')).toBe('button')
  })

  it('is not disabled by default', () => {
    const component = shallowMount(KitTabButton, {
      propsData: { id: 'tab1' }
    })
    expect(component.attributes('disabled')).toBeUndefined()
  })

  it('can be disabled', () => {
    const component = shallowMount(KitTabButton, {
      propsData: { id: 'tab1', disabled: true }
    })
    expect(component.attributes('disabled')).toBeDefined()
  })

  it('accepts string id', () => {
    const component = shallowMount(KitTabButton, {
      propsData: { id: 'tab1' }
    })
    expect(component.vm.$props.id).toBe('tab1')
  })

  it('accepts numeric id', () => {
    const component = shallowMount(KitTabButton, {
      propsData: { id: 1 }
    })
    expect(component.vm.$props.id).toBe(1)
  })

  it('has stretch prop', () => {
    const component = shallowMount(KitTabButton, {
      propsData: { id: 'tab1', stretch: true }
    })
    expect(component.vm.$props.stretch).toBe(true)
  })
})
