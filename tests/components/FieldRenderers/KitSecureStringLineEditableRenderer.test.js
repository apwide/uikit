import { shallowMount } from '@vue/test-utils'
import KitSecureStringLineEditableRenderer from '@components/field-renderers/KitSecureStringLineEditableRenderer.vue'
import KitInlineEdit from '@components/Form/KitInlineEdit.vue'

describe('KitSecureStringLineEditableRenderer', () => {
  it('renders with required props', () => {
    const component = shallowMount(KitSecureStringLineEditableRenderer, { propsData: { value: 'secret123' } })
    expect(component.exists()).toBe(true)
  })

  it('is editable by default and forwards the value to the inline edit control', () => {
    const component = shallowMount(KitSecureStringLineEditableRenderer, { propsData: { value: 'secret123' } })
    expect(component.findComponent(KitInlineEdit).attributes('value')).toBe('secret123')
  })

  it('renders a plain wrapper when editable is false', () => {
    const component = shallowMount(KitSecureStringLineEditableRenderer, {
      propsData: { value: 'secret123', editable: false }
    })
    expect(component.element.tagName).toBe('DIV')
  })

  it('defaults confirm and icon to true', () => {
    const component = shallowMount(KitSecureStringLineEditableRenderer, { propsData: { value: 'secret123' } })
    expect(component.vm.$props.confirm).toBe(true)
    expect(component.vm.$props.icon).toBe(true)
  })

  it('declares start-editing, stop-editing and save-requested as emitted events', () => {
    const component = shallowMount(KitSecureStringLineEditableRenderer, { propsData: { value: 'secret123' } })
    expect(component.vm.$options.emits).toEqual(
      expect.arrayContaining(['start-editing', 'stop-editing', 'save-requested'])
    )
  })
})
