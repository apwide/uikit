import { shallowMount } from '@vue/test-utils'
import KitMenuItem from '@components/Menu/KitMenuItem.vue'

describe('KitMenuItem', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitMenuItem)
    expect(component.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = shallowMount(KitMenuItem, {
      slots: { default: 'Menu Item Text' }
    })
    expect(component.text()).toContain('Menu Item Text')
  })

  it('emits click event on click', async () => {
    const component = shallowMount(KitMenuItem, {
      slots: { default: 'Test' }
    })
    // Find the stubbed KitDropdownItem and trigger click
    const dropdownItem = component.find('anonymous-stub')
    await dropdownItem.vm.$emit('click', new MouseEvent('click'))
    expect(component.emitted('click')).toBeTruthy()
  })

  it('has correct CSS class', () => {
    const component = shallowMount(KitMenuItem)
    expect(component.classes()).toContain('kit-menu-item')
  })

  it('wraps content in KitDropdownItem', () => {
    const component = shallowMount(KitMenuItem, {
      slots: { default: 'Test' }
    })
    // KitDropdownItem is stubbed by shallowMount (shows as anonymous-stub)
    expect(component.html()).toContain('anonymous-stub')
    expect(component.text()).toContain('Test')
  })
})
