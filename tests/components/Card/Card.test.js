import { shallowMount } from '@vue/test-utils'
import KitCard from '@components/Card/KitCard.vue'

describe('KitCard', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitCard)
    expect(component.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = shallowMount(KitCard, {
      slots: { default: '<div class="test-content">Card Content</div>' }
    })
    expect(component.find('.test-content').exists()).toBe(true)
    expect(component.text()).toContain('Card Content')
  })

  it('applies default elevation of 1', () => {
    const component = shallowMount(KitCard)
    const card = component.find('.kit-card')
    expect(card.attributes('elevation')).toBe('1')
  })

  it('applies elevation 2', () => {
    const component = shallowMount(KitCard, {
      propsData: { elevation: 2 }
    })
    const card = component.find('.kit-card')
    expect(card.attributes('elevation')).toBe('2')
  })

  it('applies elevation 3', () => {
    const component = shallowMount(KitCard, {
      propsData: { elevation: 3 }
    })
    const card = component.find('.kit-card')
    expect(card.attributes('elevation')).toBe('3')
  })

  it('applies elevation 4', () => {
    const component = shallowMount(KitCard, {
      propsData: { elevation: 4 }
    })
    const card = component.find('.kit-card')
    expect(card.attributes('elevation')).toBe('4')
  })

  it('applies elevation 5', () => {
    const component = shallowMount(KitCard, {
      propsData: { elevation: 5 }
    })
    const card = component.find('.kit-card')
    expect(card.attributes('elevation')).toBe('5')
  })

  it('accepts elevation as string', () => {
    const component = shallowMount(KitCard, {
      propsData: { elevation: '3' }
    })
    const card = component.find('.kit-card')
    expect(card.attributes('elevation')).toBe('3')
  })

  it('has correct CSS class', () => {
    const component = shallowMount(KitCard)
    expect(component.classes()).toContain('kit-card')
  })

  it('renders as a div element', () => {
    const component = shallowMount(KitCard)
    expect(component.element.tagName).toBe('DIV')
  })
})
