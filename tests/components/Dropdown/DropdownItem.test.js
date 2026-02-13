import { shallowMount } from '@vue/test-utils'
import KitDropdownItem from '@components/Dropdown/KitDropdownItem.vue'

describe('KitDropdownItem', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitDropdownItem)
    expect(component.exists()).toBe(true)
  })

  it('renders dropdown item container', () => {
    const component = shallowMount(KitDropdownItem)
    expect(component.find('.dropdown-item').exists()).toBe(true)
  })

  it('renders label wrapper', () => {
    const component = shallowMount(KitDropdownItem)
    expect(component.find('.dropdown-item-label').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = shallowMount(KitDropdownItem, {
      slots: { default: 'Test Item' }
    })
    expect(component.text()).toContain('Test Item')
  })

  it('accepts value prop', () => {
    const component = shallowMount(KitDropdownItem, {
      propsData: { value: 'test-value' }
    })
    expect(component.props('value')).toBe('test-value')
  })

  it('accepts numeric value', () => {
    const component = shallowMount(KitDropdownItem, {
      propsData: { value: 42 }
    })
    expect(component.props('value')).toBe(42)
  })

  it('accepts boolean value', () => {
    const component = shallowMount(KitDropdownItem, {
      propsData: { value: true }
    })
    expect(component.props('value')).toBe(true)
  })

  it('is not selected by default', () => {
    const component = shallowMount(KitDropdownItem)
    expect(component.props('selected')).toBe(false)
  })

  it('accepts selected prop', () => {
    const component = shallowMount(KitDropdownItem, {
      propsData: { selected: true }
    })
    const item = component.find('.dropdown-item')
    expect(item.attributes('selected')).toBeDefined()
  })

  it('emits select event on click', async () => {
    const component = shallowMount(KitDropdownItem, {
      propsData: { value: 'test' }
    })
    await component.trigger('click')
    expect(component.emitted('select')).toBeTruthy()
  })

  it('passes value in select event', async () => {
    const component = shallowMount(KitDropdownItem, {
      propsData: { value: 'my-value' }
    })
    await component.trigger('click')
    const selectEvent = component.emitted('select')
    expect(selectEvent).toBeTruthy()
    expect(selectEvent[0][0]).toBe('my-value')
  })

  it('has correct height', () => {
    const component = shallowMount(KitDropdownItem)
    const item = component.find('.dropdown-item')
    expect(item.element.style).toBeDefined()
  })

  it('has correct padding', () => {
    const component = shallowMount(KitDropdownItem)
    const item = component.find('.dropdown-item')
    expect(item.element.style).toBeDefined()
  })
})
