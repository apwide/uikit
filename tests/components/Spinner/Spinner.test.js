import { shallowMount } from '@vue/test-utils'
import KitSpinner from '@components/Spinner/KitSpinner.vue'

describe('KitSpinner', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitSpinner)
    expect(component.exists()).toBe(true)
  })

  it('renders SVG element', () => {
    const component = shallowMount(KitSpinner)
    const svg = component.find('svg')
    expect(svg.exists()).toBe(true)
  })

  it('renders circle element inside SVG', () => {
    const component = shallowMount(KitSpinner)
    const circle = component.find('circle')
    expect(circle.exists()).toBe(true)
  })

  it('applies default medium size', () => {
    const component = shallowMount(KitSpinner)
    const spinner = component.find('.kit-spinner')
    expect(spinner.attributes('size')).toBe('medium')
  })

  it('applies icon size', () => {
    const component = shallowMount(KitSpinner, {
      propsData: { size: 'icon' }
    })
    const spinner = component.find('.kit-spinner')
    expect(spinner.attributes('size')).toBe('icon')
  })

  it('applies small size', () => {
    const component = shallowMount(KitSpinner, {
      propsData: { size: 'small' }
    })
    const spinner = component.find('.kit-spinner')
    expect(spinner.attributes('size')).toBe('small')
  })

  it('applies large size', () => {
    const component = shallowMount(KitSpinner, {
      propsData: { size: 'large' }
    })
    const spinner = component.find('.kit-spinner')
    expect(spinner.attributes('size')).toBe('large')
  })

  it('calculates correct dimensions for icon size', () => {
    const component = shallowMount(KitSpinner, {
      propsData: { size: 'icon' }
    })
    const svg = component.find('svg')
    expect(svg.attributes('size')).toBe('14')
  })

  it('calculates correct dimensions for small size', () => {
    const component = shallowMount(KitSpinner, {
      propsData: { size: 'small' }
    })
    const svg = component.find('svg')
    expect(svg.attributes('size')).toBe('20')
  })

  it('calculates correct dimensions for medium size', () => {
    const component = shallowMount(KitSpinner, {
      propsData: { size: 'medium' }
    })
    const svg = component.find('svg')
    expect(svg.attributes('size')).toBe('30')
  })

  it('calculates correct dimensions for large size', () => {
    const component = shallowMount(KitSpinner, {
      propsData: { size: 'large' }
    })
    const svg = component.find('svg')
    expect(svg.attributes('size')).toBe('50')
  })

  it('has correct CSS class', () => {
    const component = shallowMount(KitSpinner)
    expect(component.classes()).toContain('kit-spinner')
  })

  it('renders as inline-block', () => {
    const component = shallowMount(KitSpinner)
    expect(component.element.tagName).toBe('DIV')
  })

  it('sets focusable false on SVG', () => {
    const component = shallowMount(KitSpinner)
    const svg = component.find('svg')
    expect(svg.attributes('focusable')).toBe('false')
  })
})
