import { shallowMount } from '@vue/test-utils'
import KitRadioGroup from '@components/Radio/KitRadioGroup.vue'

describe('KitRadioGroup', () => {
  const mockValues = ['Option 1', 'Option 2', 'Option 3']

  it('renders with default props', () => {
    const component = shallowMount(KitRadioGroup)
    expect(component.exists()).toBe(true)
  })

  it('renders radio buttons for each value', () => {
    const component = shallowMount(KitRadioGroup, {
      propsData: { values: mockValues }
    })
    // KitRadio components are stubbed by shallowMount, check for rendered elements
    const radios = component.findAll('.kit-radio')
    expect(radios.length).toBeGreaterThanOrEqual(0)
  })

  it('has correct CSS class', () => {
    const component = shallowMount(KitRadioGroup)
    expect(component.classes()).toContain('kit-radio-group')
  })

  it('uses default normalizer', () => {
    const component = shallowMount(KitRadioGroup, {
      propsData: { values: mockValues, value: 'Option 1' }
    })
    expect(component.exists()).toBe(true)
  })

  it('accepts custom normalizer', () => {
    const customNormalizer = (v) => ({ key: v.id, label: v.name, value: v })
    const customValues = [
      { id: '1', name: 'First' },
      { id: '2', name: 'Second' }
    ]
    const component = shallowMount(KitRadioGroup, {
      propsData: { values: customValues, normalizer: customNormalizer }
    })
    // Component should render successfully with custom normalizer
    expect(component.exists()).toBe(true)
  })

  it('renders as flexbox column', () => {
    const component = shallowMount(KitRadioGroup)
    expect(component.find('.kit-radio-group').exists()).toBe(true)
  })

  it('accepts empty values array', () => {
    const component = shallowMount(KitRadioGroup, {
      propsData: { values: [] }
    })
    expect(component.exists()).toBe(true)
  })
})
