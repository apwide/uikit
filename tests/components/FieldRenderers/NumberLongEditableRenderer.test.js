import { shallowMount } from '@vue/test-utils'
import NumberLongEditableRenderer from '@components/field-renderers/NumberLongEditableRenderer.vue'

describe('NumberLongEditableRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(NumberLongEditableRenderer)
    expect(component.exists()).toBe(true)
  })

  it('is editable by default and renders the inline edit control', () => {
    const component = shallowMount(NumberLongEditableRenderer, { propsData: { value: 42 } })
    const stub = component.find('anonymous-stub')
    expect(stub.exists()).toBe(true)
    expect(stub.attributes('type')).toBe('number')
    expect(stub.attributes('step')).toBe('1')
    expect(stub.attributes('value')).toBe('42')
  })

  it('renders the NumberLongRenderer directly when editable is false', () => {
    const component = shallowMount(NumberLongEditableRenderer, { propsData: { value: 42, editable: false } })
    expect(component.html()).not.toContain('type="number"')
    expect(component.find('anonymous-stub').attributes('value')).toBe('42')
  })

  it('declares save-requested as an emitted event', () => {
    const component = shallowMount(NumberLongEditableRenderer, { propsData: { value: 42 } })
    expect(component.vm.$options.emits).toContain('save-requested')
  })
})
