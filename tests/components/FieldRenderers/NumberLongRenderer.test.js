import { shallowMount } from '@vue/test-utils'
import NumberLongRenderer from '@components/field-renderers/NumberLongRenderer.vue'

describe('NumberLongRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(NumberLongRenderer)
    expect(component.exists()).toBe(true)
  })

  it('renders the value as text content', () => {
    const component = shallowMount(NumberLongRenderer, { propsData: { value: 42 } })
    expect(component.text()).toBe('42')
  })

  it('renders the zero value', () => {
    const component = shallowMount(NumberLongRenderer, { propsData: { value: 0 } })
    expect(component.text()).toBe('0')
  })

  it('sets the title attribute to the value', () => {
    const component = shallowMount(NumberLongRenderer, { propsData: { value: 42 } })
    expect(component.attributes('title')).toBe('42')
  })

  it('has the number-long-wrapper class', () => {
    const component = shallowMount(NumberLongRenderer)
    expect(component.classes()).toContain('number-long-wrapper')
  })
})
