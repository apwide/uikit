import { shallowMount } from '@vue/test-utils'
import KitDropdownSeparator from '@components/Dropdown/KitDropdownSeparator.vue'

describe('KitDropdownSeparator', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitDropdownSeparator)
    expect(component.exists()).toBe(true)
  })

  it('renders with kit-dropdown-separator class', () => {
    const component = shallowMount(KitDropdownSeparator)
    expect(component.classes()).toContain('kit-dropdown-separator')
  })

  it('renders as div element', () => {
    const component = shallowMount(KitDropdownSeparator)
    expect(component.element.tagName).toBe('DIV')
  })
})
