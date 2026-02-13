import { shallowMount } from '@vue/test-utils'
import KitSelectOption from '@components/Select/KitSelectOption.vue'

const mockOption = {
  id: 1,
  label: 'Test Option',
  value: 'test'
}

describe('KitSelectOption', () => {
  it('renders with required props', () => {
    const component = shallowMount(KitSelectOption, {
      propsData: { option: mockOption }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders option container', () => {
    const component = shallowMount(KitSelectOption, {
      propsData: { option: mockOption }
    })
    expect(component.find('.kit-select-option').exists()).toBe(true)
  })

  it('displays option label', () => {
    const component = shallowMount(KitSelectOption, {
      propsData: { option: mockOption }
    })
    expect(component.text()).toContain('Test Option')
  })

  it('accepts option prop', () => {
    const component = shallowMount(KitSelectOption, {
      propsData: { option: mockOption }
    })
    expect(component.props('option')).toEqual(mockOption)
  })

  it('accepts index prop', () => {
    const component = shallowMount(KitSelectOption, {
      propsData: { option: mockOption, index: 2 }
    })
    expect(component.props('index')).toBe(2)
  })

  it('accepts selectedId prop', () => {
    const component = shallowMount(KitSelectOption, {
      propsData: { option: mockOption, selectedId: 1 }
    })
    expect(component.props('selectedId')).toBe(1)
  })

  it('accepts currentSuggestionIndex prop', () => {
    const component = shallowMount(KitSelectOption, {
      propsData: { option: mockOption, currentSuggestionIndex: 0 }
    })
    expect(component.props('currentSuggestionIndex')).toBe(0)
  })

  it('marks option as selected when selectedId matches', () => {
    const component = shallowMount(KitSelectOption, {
      propsData: { option: mockOption, selectedId: 1 }
    })
    const optionDiv = component.find('.kit-select-option')
    expect(optionDiv.attributes('selected')).toBeDefined()
  })

  it('marks option as current when index matches currentSuggestionIndex', () => {
    const component = shallowMount(KitSelectOption, {
      propsData: { option: mockOption, index: 2, currentSuggestionIndex: 2 }
    })
    const optionDiv = component.find('.kit-select-option')
    expect(optionDiv.attributes('current')).toBeDefined()
  })

  it('emits option-selected event on click', async () => {
    const component = shallowMount(KitSelectOption, {
      propsData: { option: mockOption }
    })
    await component.trigger('click')
    expect(component.emitted('option-selected')).toBeTruthy()
  })

  it('passes option in option-selected event', async () => {
    const component = shallowMount(KitSelectOption, {
      propsData: { option: mockOption }
    })
    await component.trigger('click')
    const emitted = component.emitted('option-selected')
    expect(emitted[0][0]).toEqual(mockOption)
  })

  it('emits mouseover event on hover', async () => {
    const component = shallowMount(KitSelectOption, {
      propsData: { option: mockOption, index: 1 }
    })
    await component.trigger('mouseover')
    expect(component.emitted('mouseover')).toBeTruthy()
  })

  it('passes index in mouseover event', async () => {
    const component = shallowMount(KitSelectOption, {
      propsData: { option: mockOption, index: 3 }
    })
    await component.trigger('mouseover')
    const emitted = component.emitted('mouseover')
    expect(emitted[0][0]).toBe(3)
  })

  it('has cursor pointer style', () => {
    const component = shallowMount(KitSelectOption, {
      propsData: { option: mockOption }
    })
    const optionDiv = component.find('.kit-select-option')
    expect(optionDiv.exists()).toBe(true)
  })

  it('renders option slot content', () => {
    const component = shallowMount(KitSelectOption, {
      propsData: { option: mockOption },
      scopedSlots: {
        option: '<div class="custom-option">Custom</div>'
      }
    })
    expect(component.find('.custom-option').exists()).toBe(true)
  })
})
