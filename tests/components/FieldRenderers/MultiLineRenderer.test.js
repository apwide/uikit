import { shallowMount } from '@vue/test-utils'
import MultiLineRenderer from '@components/field-renderers/MultiLineRenderer.vue'

describe('MultiLineRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(MultiLineRenderer)
    expect(component.exists()).toBe(true)
  })

  it('renders the value as text content', () => {
    const component = shallowMount(MultiLineRenderer, { propsData: { value: 'Line one\nLine two' } })
    expect(component.text()).toContain('Line one')
  })

  it('sets the title attribute to the value', () => {
    const component = shallowMount(MultiLineRenderer, { propsData: { value: 'Some text' } })
    expect(component.attributes('title')).toBe('Some text')
  })

  it('renders empty when no value is provided', () => {
    const component = shallowMount(MultiLineRenderer)
    expect(component.text()).toBe('')
  })

  it('has the multi-line-wrapper class', () => {
    const component = shallowMount(MultiLineRenderer)
    expect(component.classes()).toContain('multi-line-wrapper')
  })
})
