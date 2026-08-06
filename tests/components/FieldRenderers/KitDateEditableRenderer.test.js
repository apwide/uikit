import { shallowMount } from '@vue/test-utils'
import KitDateEditableRenderer from '@components/field-renderers/KitDateEditableRenderer.vue'

describe('KitDateEditableRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitDateEditableRenderer)
    expect(component.exists()).toBe(true)
  })

  it('is editable by default and forwards the parsed timestamp to the inline edit control', () => {
    const component = shallowMount(KitDateEditableRenderer, { propsData: { date: '1700000000000' } })
    const stub = component.find('anonymous-stub')
    expect(stub.attributes('type')).toBe('date')
    expect(stub.attributes('value')).toBe('1700000000000')
  })

  it('renders the KitDateRenderer directly when editable is false', () => {
    const component = shallowMount(KitDateEditableRenderer, { propsData: { date: '1700000000000', editable: false } })
    expect(component.html()).not.toContain('type="date"')
    expect(component.find('anonymous-stub').attributes('date')).toBe('1700000000000')
  })

  it('forwards an empty value when no date is provided', () => {
    const component = shallowMount(KitDateEditableRenderer)
    expect(component.find('anonymous-stub').attributes('value')).toBe('')
  })

  it('declares save-requested as an emitted event', () => {
    const component = shallowMount(KitDateEditableRenderer, { propsData: { date: '1700000000000' } })
    expect(component.vm.$options.emits).toContain('save-requested')
  })
})
