import { shallowMount } from '@vue/test-utils'
import KitStringLineEditableRenderer from '@components/field-renderers/KitStringLineEditableRenderer.vue'
import KitInlineEdit from '@components/Form/KitInlineEdit.vue'
import KitStringLineRenderer from '@components/field-renderers/KitStringLineRenderer.vue'

describe('KitStringLineEditableRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitStringLineEditableRenderer)
    expect(component.exists()).toBe(true)
  })

  it('is editable by default and renders the inline edit control', () => {
    const component = shallowMount(KitStringLineEditableRenderer, { propsData: { value: 'hello' } })
    expect(component.findComponent(KitInlineEdit).exists()).toBe(true)
  })

  it('forwards the value to the inline edit control', () => {
    const component = shallowMount(KitStringLineEditableRenderer, { propsData: { value: 'hello' } })
    expect(component.findComponent(KitInlineEdit).attributes('value')).toBe('hello')
  })

  it('renders a plain wrapper (no inline edit) when editable is false', () => {
    const component = shallowMount(KitStringLineEditableRenderer, { propsData: { value: 'hello', editable: false } })
    expect(component.html()).not.toContain('placement=')
    expect(component.element.tagName).toBe('DIV')
    expect(component.findComponent(KitStringLineRenderer).attributes('value')).toBe('hello')
  })

  it('defaults placement to right', () => {
    const component = shallowMount(KitStringLineEditableRenderer)
    expect(component.vm.$props.placement).toBe('right')
  })

  it('declares save-requested, start-editing and stop-editing as emitted events', () => {
    const component = shallowMount(KitStringLineEditableRenderer, { propsData: { value: 'hello' } })
    expect(component.vm.$options.emits).toEqual(
      expect.arrayContaining(['save-requested', 'start-editing', 'stop-editing'])
    )
  })
})
