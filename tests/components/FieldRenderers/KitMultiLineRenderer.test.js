import { shallowMount } from '@vue/test-utils'
import KitMultiLineRenderer from '@components/field-renderers/KitMultiLineRenderer.vue'

describe('KitMultiLineRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitMultiLineRenderer)
    expect(component.exists()).toBe(true)
  })

  it('renders the value as text content', () => {
    const component = shallowMount(KitMultiLineRenderer, { propsData: { value: 'Line one\nLine two' } })
    expect(component.text()).toContain('Line one')
  })

  it('sets the title attribute to the value', () => {
    const component = shallowMount(KitMultiLineRenderer, { propsData: { value: 'Some text' } })
    expect(component.attributes('title')).toBe('Some text')
  })

  it('renders empty when no value is provided', () => {
    const component = shallowMount(KitMultiLineRenderer)
    expect(component.text()).toBe('')
  })

  it('has the multi-line-wrapper class', () => {
    const component = shallowMount(KitMultiLineRenderer)
    expect(component.classes()).toContain('multi-line-wrapper')
  })
})
