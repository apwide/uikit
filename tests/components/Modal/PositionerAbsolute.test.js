import { shallowMount } from '@vue/test-utils'
import PositionerAbsolute from '@components/Modal/PositionerAbsolute.vue'

describe('PositionerAbsolute', () => {
  it('renders with default props', () => {
    const component = shallowMount(PositionerAbsolute)
    expect(component.exists()).toBe(true)
  })

  it('renders with kit-positioner class', () => {
    const component = shallowMount(PositionerAbsolute)
    expect(component.classes()).toContain('kit-positioner')
  })

  it('renders slot content', () => {
    const component = shallowMount(PositionerAbsolute, {
      slots: { default: '<div class="positioner-content">Content</div>' }
    })
    expect(component.find('.positioner-content').exists()).toBe(true)
  })

  it('has default width of 600px', () => {
    const component = shallowMount(PositionerAbsolute)
    expect(component.element.style.width).toBe('600px')
    expect(component.element.style.minWidth).toBe('600px')
  })

  it('accepts custom width', () => {
    const component = shallowMount(PositionerAbsolute, {
      propsData: { width: '800px' }
    })
    expect(component.element.style.width).toBe('800px')
    expect(component.element.style.minWidth).toBe('800px')
  })
})
