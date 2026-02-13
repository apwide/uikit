import { shallowMount } from '@vue/test-utils'
import KitCheckboxEditableRenderer from '@components/field-renderers/KitCheckboxEditableRenderer.vue'
import KitInlineEdit from '@components/Form/KitInlineEdit.vue'
import KitCheckboxRenderer from '@components/field-renderers/KitCheckboxRenderer.vue'

describe('KitCheckboxEditableRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitCheckboxEditableRenderer)
    expect(component.exists()).toBe(true)
  })

  it('is editable by default and renders the inline edit control', () => {
    const component = shallowMount(KitCheckboxEditableRenderer, { propsData: { value: true } })
    expect(component.findComponent(KitInlineEdit).exists()).toBe(true)
  })

  it('forwards the value to the inline edit control', () => {
    const component = shallowMount(KitCheckboxEditableRenderer, { propsData: { value: true } })
    expect(component.findComponent(KitInlineEdit).attributes('value')).toBe('true')
  })

  it('renders the KitCheckboxRenderer directly when editable is false', () => {
    const component = shallowMount(KitCheckboxEditableRenderer, { propsData: { value: true, editable: false } })
    const stub = component.findComponent(KitCheckboxRenderer)
    expect(stub.attributes('value')).toBe('true')
    expect(component.html()).not.toContain('placement=')
  })

  it('defaults value to false', () => {
    const component = shallowMount(KitCheckboxEditableRenderer)
    expect(component.vm.$props.value).toBe(false)
  })

  it('declares save-requested as an emitted event', () => {
    const component = shallowMount(KitCheckboxEditableRenderer, { propsData: { value: true } })
    expect(component.vm.$options.emits).toContain('save-requested')
  })
})
