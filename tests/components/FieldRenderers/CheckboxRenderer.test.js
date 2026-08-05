import { shallowMount } from '@vue/test-utils'
import CheckboxRenderer from '@components/field-renderers/CheckboxRenderer.vue'

describe('CheckboxRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(CheckboxRenderer)
    expect(component.exists()).toBe(true)
  })

  it('defaults value to false', () => {
    const component = shallowMount(CheckboxRenderer)
    expect(component.vm.$props.value).toBe(false)
  })

  it('shows the checked icon when value is true', () => {
    const component = shallowMount(CheckboxRenderer, { propsData: { value: true } })
    expect(component.html()).toContain('kiteditordoneicon-stub')
    expect(component.find('.icon').exists()).toBe(false)
  })

  it('shows an empty icon placeholder when value is false', () => {
    const component = shallowMount(CheckboxRenderer, { propsData: { value: false } })
    expect(component.find('.icon').exists()).toBe(true)
  })

  it('does not render a label by default', () => {
    const component = shallowMount(CheckboxRenderer)
    expect(component.findAll('span').filter(w => w.text().length > 0)).toHaveLength(0)
  })

  it('renders the label when provided', () => {
    const component = shallowMount(CheckboxRenderer, { propsData: { label: 'Done' } })
    expect(component.text()).toContain('Done')
  })
})
