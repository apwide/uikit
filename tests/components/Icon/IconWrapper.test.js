import { shallowMount } from '@vue/test-utils'
import IconWrapper from '@components/Icon/IconWrapper.vue'

describe('IconWrapper', () => {
  it('renders with default props', () => {
    const component = shallowMount(IconWrapper)
    expect(component.exists()).toBe(true)
  })

  it('renders as span element', () => {
    const component = shallowMount(IconWrapper)
    expect(component.element.tagName).toBe('SPAN')
  })

  it('has default size of medium', () => {
    const component = shallowMount(IconWrapper)
    expect(component.props('size')).toBe('medium')
  })

  it('accepts size prop', () => {
    const component = shallowMount(IconWrapper, {
      propsData: { size: 'large' }
    })
    expect(component.props('size')).toBe('large')
  })

  it('accepts xxsmall size', () => {
    const component = shallowMount(IconWrapper, {
      propsData: { size: 'xxsmall' }
    })
    expect(component.attributes('size')).toBe('xxsmall')
  })

  it('accepts xsmall size', () => {
    const component = shallowMount(IconWrapper, {
      propsData: { size: 'xsmall' }
    })
    expect(component.attributes('size')).toBe('xsmall')
  })

  it('accepts small size', () => {
    const component = shallowMount(IconWrapper, {
      propsData: { size: 'small' }
    })
    expect(component.attributes('size')).toBe('small')
  })

  it('accepts xlarge size', () => {
    const component = shallowMount(IconWrapper, {
      propsData: { size: 'xlarge' }
    })
    expect(component.attributes('size')).toBe('xlarge')
  })

  it('has default primaryColor of currentcolor', () => {
    const component = shallowMount(IconWrapper)
    expect(component.props('primaryColor')).toBe('currentcolor')
  })

  it('accepts primaryColor prop', () => {
    const component = shallowMount(IconWrapper, {
      propsData: { primaryColor: '#FF0000' }
    })
    expect(component.props('primaryColor')).toBe('#FF0000')
  })

  it('has default secondaryColor of #fff', () => {
    const component = shallowMount(IconWrapper)
    expect(component.props('secondaryColor')).toBe('#fff')
  })

  it('accepts secondaryColor prop', () => {
    const component = shallowMount(IconWrapper, {
      propsData: { secondaryColor: '#000000' }
    })
    expect(component.props('secondaryColor')).toBe('#000000')
  })

  it('renders slot content', () => {
    const component = shallowMount(IconWrapper, {
      slots: { default: '<svg class="test-svg"></svg>' }
    })
    expect(component.find('.test-svg').exists()).toBe(true)
  })

  it('applies color style', () => {
    const component = shallowMount(IconWrapper, {
      propsData: { primaryColor: 'red' }
    })
    expect(component.attributes('style')).toContain('color')
  })

  it('applies fill style', () => {
    const component = shallowMount(IconWrapper, {
      propsData: { secondaryColor: 'blue' }
    })
    expect(component.attributes('style')).toContain('fill')
  })
})
