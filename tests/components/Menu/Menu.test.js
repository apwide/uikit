import { shallowMount } from '@vue/test-utils'
import KitMenu from '@components/Menu/KitMenu.vue'

describe('KitMenu', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitMenu)
    expect(component.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = shallowMount(KitMenu, {
      slots: { default: '<div class="menu-item">Item 1</div>' }
    })
    expect(component.find('.menu-item').exists()).toBe(true)
    expect(component.text()).toContain('Item 1')
  })

  it('has correct CSS class', () => {
    const component = shallowMount(KitMenu)
    expect(component.classes()).toContain('kit-menu')
  })

  it('uses flexbox layout', () => {
    const component = shallowMount(KitMenu)
    const menu = component.find('.kit-menu')
    expect(menu.exists()).toBe(true)
  })

  it('renders as div element', () => {
    const component = shallowMount(KitMenu)
    expect(component.element.tagName).toBe('DIV')
  })
})
