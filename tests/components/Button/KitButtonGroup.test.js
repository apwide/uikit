import { shallowMount } from '@vue/test-utils'
import KitButtonGroup from '@components/Button/KitButtonGroup.vue'

describe('KitButtonGroup', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitButtonGroup)
    expect(component.exists()).toBe(true)
  })

  it('renders with kit-button-group class', () => {
    const component = shallowMount(KitButtonGroup)
    expect(component.classes()).toContain('kit-button-group')
  })

  it('renders slot content', () => {
    const component = shallowMount(KitButtonGroup, {
      slots: { default: '<button>Click</button>' }
    })
    expect(component.find('button').exists()).toBe(true)
  })

  it('uses default spacing normal', () => {
    const component = shallowMount(KitButtonGroup)
    expect(component.attributes('data-spacing')).toBe('normal')
  })

  it('accepts wide spacing', () => {
    const component = shallowMount(KitButtonGroup, {
      propsData: { spacing: 'wide' }
    })
    expect(component.attributes('data-spacing')).toBe('wide')
  })

  it('accepts narrow spacing', () => {
    const component = shallowMount(KitButtonGroup, {
      propsData: { spacing: 'narrow' }
    })
    expect(component.attributes('data-spacing')).toBe('narrow')
  })
})
