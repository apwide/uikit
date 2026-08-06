import { shallowMount } from '@vue/test-utils'
import MenuSection from '@components/Menu/MenuSection.vue'

describe('MenuSection', () => {
  it('renders with default props', () => {
    const component = shallowMount(MenuSection)
    expect(component.exists()).toBe(true)
  })

  it('renders with menu-section class', () => {
    const component = shallowMount(MenuSection)
    expect(component.classes()).toContain('menu-section')
  })

  it('renders slot content', () => {
    const component = shallowMount(MenuSection, {
      slots: { default: '<div class="section-item">Item</div>' }
    })
    expect(component.find('.section-item').exists()).toBe(true)
  })

  it('does not render a label by default', () => {
    const component = shallowMount(MenuSection)
    expect(component.find('.menu-section-label').exists()).toBe(false)
  })

  it('renders label when provided', () => {
    const component = shallowMount(MenuSection, {
      propsData: { label: 'Section Label' }
    })
    expect(component.find('.menu-section-label').text()).toBe('Section Label')
  })

  it('is not a separator by default', () => {
    const component = shallowMount(MenuSection)
    expect(component.vm.$props.separator).toBe(false)
  })

  it('accepts separator prop', () => {
    const component = shallowMount(MenuSection, {
      propsData: { separator: true }
    })
    expect(component.vm.$props.separator).toBe(true)
  })
})
