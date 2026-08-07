import { shallowMount } from '@vue/test-utils'
import KitCheckboxRenderer from '@components/field-renderers/KitCheckboxRenderer.vue'

describe('KitCheckboxRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitCheckboxRenderer)
    expect(component.exists()).toBe(true)
  })

  it('defaults value to false', () => {
    const component = shallowMount(KitCheckboxRenderer)
    expect(component.vm.$props.value).toBe(false)
  })

  it('shows the checked icon when value is true', () => {
    const component = shallowMount(KitCheckboxRenderer, { propsData: { value: true } })
    expect(component.html()).toContain('editor-done-icon-stub')
    expect(component.find('.icon').exists()).toBe(false)
  })

  it('shows an empty icon placeholder when value is false', () => {
    const component = shallowMount(KitCheckboxRenderer, { propsData: { value: false } })
    expect(component.find('.icon').exists()).toBe(true)
  })

  it('does not render a label by default', () => {
    const component = shallowMount(KitCheckboxRenderer)
    expect(component.findAll('span').filter(w => w.text().length > 0)).toHaveLength(0)
  })

  it('renders the label when provided', () => {
    const component = shallowMount(KitCheckboxRenderer, { propsData: { label: 'Done' } })
    expect(component.text()).toContain('Done')
  })
})
