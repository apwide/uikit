import { shallowMount } from '@vue/test-utils'
import MultiLineEditableRenderer from '@components/field-renderers/MultiLineEditableRenderer.vue'

describe('MultiLineEditableRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(MultiLineEditableRenderer)
    expect(component.exists()).toBe(true)
  })

  it('is editable by default and forwards the value to the inline edit control', () => {
    const component = shallowMount(MultiLineEditableRenderer, { propsData: { value: 'hello' } })
    expect(component.find('anonymous-stub').attributes('value')).toBe('hello')
  })

  it('renders a plain wrapper when editable is false', () => {
    const component = shallowMount(MultiLineEditableRenderer, { propsData: { value: 'hello', editable: false } })
    expect(component.html()).not.toContain('pencil-style')
    expect(component.element.tagName).toBe('DIV')
  })

  it('defaults submitOnEnter to false', () => {
    const component = shallowMount(MultiLineEditableRenderer)
    expect(component.vm.$props.submitOnEnter).toBe(false)
  })

  it('declares change, save-requested, start-editing and stop-editing as emitted events', () => {
    const component = shallowMount(MultiLineEditableRenderer, { propsData: { value: 'hello' } })
    expect(component.vm.$options.emits).toEqual(
      expect.arrayContaining(['change', 'save-requested', 'start-editing', 'stop-editing'])
    )
  })
})
