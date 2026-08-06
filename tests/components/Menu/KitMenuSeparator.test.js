import { shallowMount } from '@vue/test-utils'
import KitMenuSeparator from '@components/Menu/KitMenuSeparator.vue'

describe('KitMenuSeparator', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitMenuSeparator)
    expect(component.exists()).toBe(true)
  })

  it('renders with kit-menu-separator class', () => {
    const component = shallowMount(KitMenuSeparator)
    expect(component.classes()).toContain('kit-menu-separator')
  })

  it('renders as div element', () => {
    const component = shallowMount(KitMenuSeparator)
    expect(component.element.tagName).toBe('DIV')
  })
})
