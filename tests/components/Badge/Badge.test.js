import { shallowMount } from '@vue/test-utils'
import KitBadge from '@components/Badge/KitBadge.vue'

describe('KitBadge', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitBadge)
    expect(component.exists()).toBe(true)
    expect(component.text()).toBe('-')
  })

  it('renders with string value', () => {
    const component = shallowMount(KitBadge, {
      propsData: { value: 'NEW' }
    })
    expect(component.text()).toBe('NEW')
  })

  it('renders with numeric value', () => {
    const component = shallowMount(KitBadge, {
      propsData: { value: 42 }
    })
    expect(component.text()).toBe('42')
  })

  it('renders with zero value', () => {
    const component = shallowMount(KitBadge, {
      propsData: { value: 0 }
    })
    expect(component.text()).toBe('0')
  })

  it('applies correct CSS class', () => {
    const component = shallowMount(KitBadge)
    expect(component.classes()).toContain('kit-badge')
  })

  it('has correct default appearance styling', () => {
    const component = shallowMount(KitBadge)
    const span = component.find('.kit-badge')
    expect(span.exists()).toBe(true)
  })

  it('renders as inline-block element', () => {
    const component = shallowMount(KitBadge)
    const span = component.find('.kit-badge')
    expect(span.element.tagName).toBe('SPAN')
  })
})
