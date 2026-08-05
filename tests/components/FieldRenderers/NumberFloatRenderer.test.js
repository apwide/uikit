import { shallowMount } from '@vue/test-utils'
import NumberFloatRenderer from '@components/field-renderers/NumberFloatRenderer.vue'

describe('NumberFloatRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(NumberFloatRenderer)
    expect(component.exists()).toBe(true)
  })

  it('renders the value as text content', () => {
    const component = shallowMount(NumberFloatRenderer, { propsData: { value: 3.14 } })
    expect(component.text()).toBe('3.14')
  })

  it('renders the zero value', () => {
    const component = shallowMount(NumberFloatRenderer, { propsData: { value: 0 } })
    expect(component.text()).toBe('0')
  })

  it('sets the title attribute to the value', () => {
    const component = shallowMount(NumberFloatRenderer, { propsData: { value: 3.14 } })
    expect(component.attributes('title')).toBe('3.14')
  })

  it('has the number-float-wrapper class', () => {
    const component = shallowMount(NumberFloatRenderer)
    expect(component.classes()).toContain('number-float-wrapper')
  })
})
