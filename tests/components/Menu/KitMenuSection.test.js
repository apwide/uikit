import { shallowMount } from '@vue/test-utils'
import KitMenuSection from '@components/Menu/KitMenuSection.vue'

describe('KitMenuSection', () => {
  it('does not render without a default slot', () => {
    const component = shallowMount(KitMenuSection)
    expect(component.find('.kit-menu-section').exists()).toBe(false)
  })

  it('renders when a default slot is provided', () => {
    const component = shallowMount(KitMenuSection, {
      slots: { default: '<div class="section-item">Item</div>' }
    })
    expect(component.find('.kit-menu-section').exists()).toBe(true)
    expect(component.find('.section-item').exists()).toBe(true)
  })

  it('does not render a title by default', () => {
    const component = shallowMount(KitMenuSection, {
      slots: { default: '<div>Item</div>' }
    })
    expect(component.find('.kit-menu-section__title').exists()).toBe(false)
  })

  it('renders title when provided', () => {
    const component = shallowMount(KitMenuSection, {
      propsData: { title: 'Section Title' },
      slots: { default: '<div>Item</div>' }
    })
    expect(component.find('.kit-menu-section__title').text()).toBe('Section Title')
  })
})
