import { shallowMount } from '@vue/test-utils'
import MenuItem from '@components/Menu/MenuItem.vue'

describe('MenuItem (plain, non-Kit variant)', () => {
  it('renders with default props', () => {
    const component = shallowMount(MenuItem)
    expect(component.exists()).toBe(true)
  })

  it('renders with menu-item class', () => {
    const component = shallowMount(MenuItem)
    expect(component.classes()).toContain('menu-item')
  })

  it('renders slot content as the label', () => {
    const component = shallowMount(MenuItem, {
      slots: { default: 'Item label' }
    })
    expect(component.find('.menu-item-label').text()).toBe('Item label')
  })

  it('is not active by default', () => {
    const component = shallowMount(MenuItem)
    expect(component.attributes('active')).toBeUndefined()
  })

  it('reflects the active prop', () => {
    const component = shallowMount(MenuItem, {
      propsData: { active: true }
    })
    expect(component.attributes('active')).toBe('true')
  })

  it('does not render an icon-before wrapper by default', () => {
    const component = shallowMount(MenuItem)
    expect(component.find('.menu-item-icon-before').exists()).toBe(false)
  })

  it('renders the icon-before slot when provided', () => {
    const component = shallowMount(MenuItem, {
      slots: { 'icon-before': '<svg class="my-icon"></svg>' }
    })
    const iconWrapper = component.find('.menu-item-icon-before')
    expect(iconWrapper.exists()).toBe(true)
    expect(iconWrapper.find('.my-icon').exists()).toBe(true)
  })

  it('forwards click events via $listeners', async () => {
    const clickHandler = jest.fn()
    const component = shallowMount(MenuItem, {
      listeners: { click: clickHandler }
    })
    await component.trigger('click')
    expect(clickHandler).toHaveBeenCalled()
  })
})
