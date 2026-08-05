import { shallowMount } from '@vue/test-utils'
import NumberFloatEditableRenderer from '@components/field-renderers/NumberFloatEditableRenderer.vue'

describe('NumberFloatEditableRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(NumberFloatEditableRenderer)
    expect(component.exists()).toBe(true)
  })

  it('is editable by default and renders the inline edit control', () => {
    const component = shallowMount(NumberFloatEditableRenderer, { propsData: { value: 3.14 } })
    const stub = component.find('anonymous-stub')
    expect(stub.exists()).toBe(true)
    expect(stub.attributes('type')).toBe('number')
    expect(stub.attributes('value')).toBe('3.14')
  })

  it('renders the NumberFloatRenderer directly when editable is false', () => {
    const component = shallowMount(NumberFloatEditableRenderer, { propsData: { value: 3.14, editable: false } })
    expect(component.html()).not.toContain('type="number"')
    expect(component.find('anonymous-stub').attributes('value')).toBe('3.14')
  })

  it('defaults placement to right', () => {
    const component = shallowMount(NumberFloatEditableRenderer)
    expect(component.vm.$props.placement).toBe('right')
  })

  it('declares save-requested as an emitted event', () => {
    const component = shallowMount(NumberFloatEditableRenderer, { propsData: { value: 3.14 } })
    expect(component.vm.$options.emits).toContain('save-requested')
  })
})
