import { shallowMount } from '@vue/test-utils'
import KitSelect from '@components/Select/KitSelect.vue'
import KitTextField from '@components/Form/KitTextField.vue'
import Icons from '@components/Select/Icons.vue'

const mockOptions = [
  { id: 1, label: 'Option 1', value: 'opt1' },
  { id: 2, label: 'Option 2', value: 'opt2' },
  { id: 3, label: 'Option 3', value: 'opt3' }
]

describe('KitSelect', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders select container', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    expect(component.find('.kit-select').exists()).toBe(true)
  })

  it('renders input field', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    expect(component.find('input').exists()).toBe(true)
  })

  it('has correct input class', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    const input = component.find('input')
    expect(input.classes()).toContain('kit-select__search')
  })

  it('accepts options prop', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: mockOptions }
    })
    expect(component.props('options')).toEqual(mockOptions)
  })

  it('is not disabled by default', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    expect(component.props('isDisabled')).toBe(false)
  })

  it('accepts isDisabled prop', () => {
    const component = shallowMount(KitSelect, {
      propsData: { isDisabled: true }
    })
    const container = component.find('.kit-select')
    expect(container.attributes('disabled')).toBeDefined()
  })

  it('is not invalid by default', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    expect(component.props('isInvalid')).toBe(false)
  })

  it('accepts isInvalid prop', () => {
    const component = shallowMount(KitSelect, {
      propsData: { isInvalid: true }
    })
    expect(component.props('isInvalid')).toBe(true)
  })

  it('is not loading by default', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    expect(component.props('isLoading')).toBe(false)
  })

  it('accepts isLoading prop', () => {
    const component = shallowMount(KitSelect, {
      propsData: { isLoading: true }
    })
    expect(component.props('isLoading')).toBe(true)
  })

  it('is not multi-select by default', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    expect(component.props('multi')).toBe(false)
  })

  it('accepts multi prop', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [], multi: true, modelValue: [] }
    })
    expect(component.props('multi')).toBe(true)
  })

  it('is not async by default', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    expect(component.props('async')).toBe(false)
  })

  it('accepts async prop', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [], async: true }
    })
    expect(component.props('async')).toBe(true)
  })

  it('has clearable setting', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    // isClearable prop exists
    expect(component.props('isClearable')).toBeDefined()
  })

  it('accepts isClearable prop', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [], isClearable: true }
    })
    expect(component.props('isClearable')).toBe(true)
  })

  it('is not createable by default', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    expect(component.props('createable')).toBe(false)
  })

  it('accepts createable prop', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [], createable: true }
    })
    expect(component.props('createable')).toBe(true)
  })

  it('accepts placeholder prop', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [], placeholder: 'Select an option' }
    })
    expect(component.props('placeholder')).toBe('Select an option')
  })

  it('accepts noOptionsMessage prop', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [], noOptionsMessage: 'No results found' }
    })
    expect(component.props('noOptionsMessage')).toBe('No results found')
  })

  it('accepts searchPromptText prop', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [], searchPromptText: 'Start typing...' }
    })
    expect(component.props('searchPromptText')).toBe('Start typing...')
  })

  it('selectFirstEntry is false by default', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    expect(component.props('selectFirstEntry')).toBe(false)
  })

  it('accepts selectFirstEntry prop', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [], selectFirstEntry: true }
    })
    expect(component.props('selectFirstEntry')).toBe(true)
  })

  it('has default min of 0', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    expect(component.props('min')).toBe(0)
  })

  it('accepts min prop', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [], min: 2 }
    })
    expect(component.props('min')).toBe(2)
  })

  it('accepts value prop', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: mockOptions, modelValue: mockOptions[0] }
    })
    expect(component.props('modelValue')).toEqual(mockOptions[0])
  })

  it('renders KitTextField component', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    expect(component.findComponent(KitTextField).exists()).toBe(true)
  })

  it('renders Icons component', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    expect(component.findComponent(Icons).exists()).toBe(true)
  })

  it('accepts boundariesElement prop', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [], boundariesElement: 'viewport' }
    })
    expect(component.props('boundariesElement')).toBe('viewport')
  })

  it('appendToBody is false by default', () => {
    const component = shallowMount(KitSelect, {
      propsData: { options: [] }
    })
    expect(component.props('appendToBody')).toBe(false)
  })
})
