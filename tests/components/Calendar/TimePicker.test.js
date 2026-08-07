import { shallowMount } from '@vue/test-utils'
import KitTimePicker from '@components/Calendar/KitTimePicker.vue'
import KitTextField from '@components/Form/KitTextField.vue'
import Popup from '@components/common/Popup'

describe('KitTimePicker', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitTimePicker)
    expect(component.exists()).toBe(true)
  })

  it('renders time picker container', () => {
    const component = shallowMount(KitTimePicker)
    expect(component.find('.kit-time-picker').exists()).toBe(true)
  })

  it('renders input field', () => {
    const component = shallowMount(KitTimePicker)
    expect(component.find('input').exists()).toBe(true)
  })

  it('has correct input type', () => {
    const component = shallowMount(KitTimePicker)
    const input = component.find('input')
    expect(input.attributes('type')).toBe('text')
  })

  it('shows placeholder text', () => {
    const component = shallowMount(KitTimePicker)
    const input = component.find('input')
    expect(input.attributes('placeholder')).toBe('e.g. 11:00')
  })

  it('accepts custom placeholder', () => {
    const component = shallowMount(KitTimePicker, {
      propsData: { placeholder: 'Select time' }
    })
    const input = component.find('input')
    expect(input.attributes('placeholder')).toBe('Select time')
  })

  it('accepts value prop as string', () => {
    const component = shallowMount(KitTimePicker, {
      propsData: { modelValue: '14:30' }
    })
    expect(component.props('modelValue')).toBe('14:30')
  })

  it('accepts disabled prop', () => {
    const component = shallowMount(KitTimePicker, {
      propsData: { disabled: true }
    })
    const input = component.find('input')
    expect(input.attributes('disabled')).toBeDefined()
  })

  it('accepts isLoading prop', () => {
    const component = shallowMount(KitTimePicker, {
      propsData: { isLoading: true }
    })
    expect(component.props('isLoading')).toBe(true)
  })

  it('accepts isInvalid prop', () => {
    const component = shallowMount(KitTimePicker, {
      propsData: { isInvalid: true }
    })
    expect(component.props('isInvalid')).toBe(true)
  })

  it('accepts isFocused prop', () => {
    const component = shallowMount(KitTimePicker, {
      propsData: { isFocused: true }
    })
    expect(component.props('isFocused')).toBe(true)
  })

  it('renders TextField component', () => {
    const component = shallowMount(KitTimePicker)
    expect(component.findComponent(KitTextField).exists()).toBe(true)
  })

  it('renders Popup component', () => {
    const component = shallowMount(KitTimePicker)
    expect(component.findComponent(Popup).exists()).toBe(true)
  })

  it('displays formatted time value', () => {
    const component = shallowMount(KitTimePicker, {
      propsData: { modelValue: '09:45' }
    })
    const input = component.find('input')
    expect(input.element.value).toBe('09:45')
  })
})
