import { shallowMount } from '@vue/test-utils'
import StringLineRenderer from '@components/field-renderers/StringLineRenderer.vue'

describe('StringLineRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(StringLineRenderer)
    expect(component.exists()).toBe(true)
  })

  it('renders the value as text content', () => {
    const component = shallowMount(StringLineRenderer, { propsData: { value: 'Hello world' } })
    expect(component.text()).toBe('Hello world')
  })

  it('sets the title attribute to the value', () => {
    const component = shallowMount(StringLineRenderer, { propsData: { value: 'Hello world' } })
    expect(component.attributes('title')).toBe('Hello world')
  })

  it('renders empty when no value is provided', () => {
    const component = shallowMount(StringLineRenderer)
    expect(component.text()).toBe('')
  })

  it('has the string-line-wrapper class', () => {
    const component = shallowMount(StringLineRenderer)
    expect(component.classes()).toContain('string-line-wrapper')
  })
})
