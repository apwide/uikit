import { shallowMount } from '@vue/test-utils'
import KitDropdownGroup from '@components/Dropdown/KitDropdownGroup.vue'

describe('KitDropdownGroup', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitDropdownGroup)
    expect(component.exists()).toBe(true)
  })

  it('renders group container', () => {
    const component = shallowMount(KitDropdownGroup)
    expect(component.find('.kit-dropdown-group').exists()).toBe(true)
  })

  it('renders header', () => {
    const component = shallowMount(KitDropdownGroup)
    expect(component.find('.kit-dg__header').exists()).toBe(true)
  })

  it('accepts label prop', () => {
    const component = shallowMount(KitDropdownGroup, {
      propsData: { label: 'Group Label' }
    })
    expect(component.props('label')).toBe('Group Label')
  })

  it('renders label when provided', () => {
    const component = shallowMount(KitDropdownGroup, {
      propsData: { label: 'Test Group' }
    })
    expect(component.find('.kit-dg__title').exists()).toBe(true)
    expect(component.text()).toContain('Test Group')
  })

  it('renders title slot when provided', () => {
    const component = shallowMount(KitDropdownGroup, {
      slots: { title: '<div class="custom-title">Custom</div>' }
    })
    expect(component.find('.kit-dg__title-slot').exists()).toBe(true)
    expect(component.find('.custom-title').exists()).toBe(true)
  })

  it('renders actions slot when provided', () => {
    const component = shallowMount(KitDropdownGroup, {
      slots: { actions: '<button class="action-btn">Action</button>' }
    })
    expect(component.find('.kit-dg__actions').exists()).toBe(true)
    expect(component.find('.action-btn').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const component = shallowMount(KitDropdownGroup, {
      slots: { default: '<div class="item">Item 1</div>' }
    })
    expect(component.find('.item').exists()).toBe(true)
  })

  it('does not render title div when label not provided', () => {
    const component = shallowMount(KitDropdownGroup)
    expect(component.find('.kit-dg__title').exists()).toBe(false)
  })

  it('title slot takes precedence over label', () => {
    const component = shallowMount(KitDropdownGroup, {
      propsData: { label: 'Label Text' },
      slots: { title: '<div class="custom-title">Slot</div>' }
    })
    expect(component.find('.kit-dg__title-slot').exists()).toBe(true)
    expect(component.find('.kit-dg__title').exists()).toBe(false)
  })

  it('has correct header structure', () => {
    const component = shallowMount(KitDropdownGroup, {
      propsData: { label: 'Test' }
    })
    const header = component.find('.kit-dg__header')
    expect(header.exists()).toBe(true)
  })
})
