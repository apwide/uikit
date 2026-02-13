import { shallowMount } from '@vue/test-utils'
import KitDatePicker from '@components/Calendar/KitDatePicker.vue'

describe('KitDatePicker', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitDatePicker)
    expect(component.exists()).toBe(true)
  })

  it('renders date picker container', () => {
    const component = shallowMount(KitDatePicker)
    expect(component.find('.kit-date-picker').exists()).toBe(true)
  })

  it('renders input field', () => {
    const component = shallowMount(KitDatePicker)
    expect(component.find('input').exists()).toBe(true)
  })

  it('has correct input type', () => {
    const component = shallowMount(KitDatePicker)
    const input = component.find('input')
    expect(input.attributes('type')).toBe('text')
  })

  it('shows placeholder text', () => {
    const component = shallowMount(KitDatePicker)
    const input = component.find('input')
    expect(input.attributes('placeholder')).toBe('e.g. 31/12/2018')
  })

  it('accepts value prop as timestamp', () => {
    const timestamp = new Date('2024-01-15').getTime()
    const component = shallowMount(KitDatePicker, {
      propsData: { value: timestamp }
    })
    expect(component.props('value')).toBe(timestamp)
  })

  it('accepts disabled prop', () => {
    const component = shallowMount(KitDatePicker, {
      propsData: { disabled: true }
    })
    const input = component.find('input')
    expect(input.attributes('disabled')).toBeDefined()
  })

  it('accepts isLoading prop', () => {
    const component = shallowMount(KitDatePicker, {
      propsData: { isLoading: true }
    })
    expect(component.props('isLoading')).toBe(true)
  })

  it('accepts isInvalid prop', () => {
    const component = shallowMount(KitDatePicker, {
      propsData: { isInvalid: true }
    })
    expect(component.props('isInvalid')).toBe(true)
  })

  it('accepts custom dateFormat', () => {
    const component = shallowMount(KitDatePicker, {
      propsData: { dateFormat: 'yyyy-MM-dd' }
    })
    expect(component.props('dateFormat')).toBe('yyyy-MM-dd')
  })

  it('has default dateFormat', () => {
    const component = shallowMount(KitDatePicker)
    expect(component.props('dateFormat')).toBe('dd/MM/y')
  })

  it('accepts timeZone prop', () => {
    const component = shallowMount(KitDatePicker, {
      propsData: { timeZone: 'America/New_York' }
    })
    expect(component.props('timeZone')).toBe('America/New_York')
  })

  it('renders calendar icon', () => {
    const component = shallowMount(KitDatePicker)
    expect(component.html()).toContain('calendar-alt')
  })

  it('renders TextField component', () => {
    const component = shallowMount(KitDatePicker)
    // KitTextField is stubbed by shallowMount
    expect(component.html()).toContain('anonymous-stub')
  })

  it('renders Popup component', () => {
    const component = shallowMount(KitDatePicker)
    // Popup is stubbed by shallowMount
    expect(component.html()).toContain('anonymous-stub')
  })
})
