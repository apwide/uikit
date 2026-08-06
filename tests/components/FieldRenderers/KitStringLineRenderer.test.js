import { shallowMount } from '@vue/test-utils'
import KitStringLineRenderer from '@components/field-renderers/KitStringLineRenderer.vue'

describe('KitStringLineRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitStringLineRenderer)
    expect(component.exists()).toBe(true)
  })

  it('renders the value as text content', () => {
    const component = shallowMount(KitStringLineRenderer, { propsData: { value: 'Hello world' } })
    expect(component.text()).toBe('Hello world')
  })

  it('sets the title attribute to the value', () => {
    const component = shallowMount(KitStringLineRenderer, { propsData: { value: 'Hello world' } })
    expect(component.attributes('title')).toBe('Hello world')
  })

  it('renders empty when no value is provided', () => {
    const component = shallowMount(KitStringLineRenderer)
    expect(component.text()).toBe('')
  })

  it('has the string-line-wrapper class', () => {
    const component = shallowMount(KitStringLineRenderer)
    expect(component.classes()).toContain('string-line-wrapper')
  })
})
