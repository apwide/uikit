import { shallowMount } from '@vue/test-utils'
import StringLineEditableRenderer from '@components/field-renderers/StringLineEditableRenderer.vue'

describe('StringLineEditableRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(StringLineEditableRenderer)
    expect(component.exists()).toBe(true)
  })

  it('is editable by default and renders the inline edit control', () => {
    const component = shallowMount(StringLineEditableRenderer, { propsData: { value: 'hello' } })
    expect(component.find('anonymous-stub').exists()).toBe(true)
  })

  it('forwards the value to the inline edit control', () => {
    const component = shallowMount(StringLineEditableRenderer, { propsData: { value: 'hello' } })
    expect(component.find('anonymous-stub').attributes('value')).toBe('hello')
  })

  it('renders a plain wrapper (no inline edit) when editable is false', () => {
    const component = shallowMount(StringLineEditableRenderer, { propsData: { value: 'hello', editable: false } })
    expect(component.html()).not.toContain('placement=')
    expect(component.element.tagName).toBe('DIV')
    expect(component.find('anonymous-stub').attributes('value')).toBe('hello')
  })

  it('defaults placement to right', () => {
    const component = shallowMount(StringLineEditableRenderer)
    expect(component.vm.$props.placement).toBe('right')
  })

  it('declares save-requested, start-editing and stop-editing as emitted events', () => {
    const component = shallowMount(StringLineEditableRenderer, { propsData: { value: 'hello' } })
    expect(component.vm.$options.emits).toEqual(
      expect.arrayContaining(['save-requested', 'start-editing', 'stop-editing'])
    )
  })
})
