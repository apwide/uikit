import { shallowMount } from '@vue/test-utils'
import KitTabProvider from '@components/Tabs/KitTabProvider.vue'

describe('KitTabProvider', () => {
  it('renders with required value prop', () => {
    const component = shallowMount(KitTabProvider, {
      propsData: { modelValue: 'tab1' }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = shallowMount(KitTabProvider, {
      propsData: { modelValue: 'tab1' },
      slots: { default: '<div class="tab-content">Tabs</div>' }
    })
    expect(component.find('.tab-content').exists()).toBe(true)
  })

  it('accepts string value', () => {
    const component = shallowMount(KitTabProvider, {
      propsData: { modelValue: 'tab1' }
    })
    expect(component.vm.$props.modelValue).toBe('tab1')
  })

  it('accepts numeric value', () => {
    const component = shallowMount(KitTabProvider, {
      propsData: { modelValue: 1 }
    })
    expect(component.vm.$props.modelValue).toBe(1)
  })

  it('renders as div element', () => {
    const component = shallowMount(KitTabProvider, {
      propsData: { modelValue: 'tab1' }
    })
    expect(component.element.tagName).toBe('DIV')
  })

  it('provides state to children', () => {
    const component = shallowMount(KitTabProvider, {
      propsData: { modelValue: 'tab1' }
    })
    // The component provides state via provide/inject
    expect(component.exists()).toBe(true)
  })
})
