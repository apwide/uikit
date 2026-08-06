import { shallowMount } from '@vue/test-utils'
import KitMenuItem from '@components/Menu/KitMenuItem.vue'
import KitDropdownItem from '@components/Dropdown/KitDropdownItem.vue'

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
    const dropdownItem = component.findComponent(KitDropdownItem)
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
    expect(component.findComponent(KitDropdownItem).exists()).toBe(true)
    expect(component.text()).toContain('Test')
  })
})
