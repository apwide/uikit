import { shallowMount } from '@vue/test-utils'
import KitColorPicker from '@components/ColorPicker/KitColorPicker.vue'
import Popup from '@components/common/Popup.vue'

const defaultColors = ['#000', '#0052CC', '#172B4D', '#FF5630', '#FFAB00', '#36B37E', '#00B8D9', '#6554C0']

describe('KitColorPicker', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitColorPicker)
    expect(component.exists()).toBe(true)
  })

  it('renders color picker container', () => {
    const component = shallowMount(KitColorPicker)
    expect(component.find('.kit-color-picker').exists()).toBe(true)
  })

  it('renders trigger button', () => {
    const component = shallowMount(KitColorPicker)
    expect(component.find('button').exists()).toBe(true)
  })

  it('renders color preview div', () => {
    const component = shallowMount(KitColorPicker)
    expect(component.find('.kit-color-picker__color').exists()).toBe(true)
  })

  it('has default value color', () => {
    const component = shallowMount(KitColorPicker)
    expect(component.props('modelValue')).toBe('#DFE1E1')
  })

  it('accepts custom value prop', () => {
    const component = shallowMount(KitColorPicker, {
      propsData: { modelValue: '#FF0000' }
    })
    expect(component.props('modelValue')).toBe('#FF0000')
  })

  it('displays selected color as background', () => {
    const component = shallowMount(KitColorPicker, {
      propsData: { modelValue: '#FF0000' }
    })
    const colorDiv = component.find('.kit-color-picker__color')
    // Color is converted to rgb() format by Vue
    expect(colorDiv.attributes('style')).toContain('background-color')
  })

  it('has default colors list', () => {
    const component = shallowMount(KitColorPicker)
    expect(component.props('colors')).toEqual(defaultColors)
  })

  it('accepts custom colors prop', () => {
    const customColors = ['#FFF', '#000', '#AAA']
    const component = shallowMount(KitColorPicker, {
      propsData: { colors: customColors }
    })
    expect(component.props('colors')).toEqual(customColors)
  })

  it('is editable by default', () => {
    const component = shallowMount(KitColorPicker)
    expect(component.props('editable')).toBe(true)
  })

  it('accepts editable prop', () => {
    const component = shallowMount(KitColorPicker, {
      propsData: { editable: false }
    })
    expect(component.props('editable')).toBe(false)
  })

  it('has pointer cursor when editable', () => {
    const component = shallowMount(KitColorPicker, {
      propsData: { editable: true }
    })
    const button = component.find('button')
    expect(button.attributes('style')).toContain('pointer')
  })

  it('has default cursor when not editable', () => {
    const component = shallowMount(KitColorPicker, {
      propsData: { editable: false }
    })
    const button = component.find('button')
    expect(button.attributes('style')).toContain('default')
  })

  it('has default columns value of 8', () => {
    const component = shallowMount(KitColorPicker)
    expect(component.props('columns')).toBe(8)
  })

  it('accepts custom columns prop', () => {
    const component = shallowMount(KitColorPicker, {
      propsData: { columns: 4 }
    })
    expect(component.props('columns')).toBe(4)
  })

  it('renders Popup component', () => {
    const component = shallowMount(KitColorPicker)
    expect(component.findComponent(Popup).exists()).toBe(true)
  })

  it('has correct CSS class structure', () => {
    const component = shallowMount(KitColorPicker)
    expect(component.classes()).toContain('kit-color-picker')
  })

  it('renders button with correct type', () => {
    const component = shallowMount(KitColorPicker)
    const button = component.find('button')
    expect(button.attributes('type')).toBe('button')
  })
})
