import { shallowMount } from '@vue/test-utils'
import DateEditableRenderer from '@components/field-renderers/DateEditableRenderer.vue'

describe('DateEditableRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(DateEditableRenderer)
    expect(component.exists()).toBe(true)
  })

  it('is editable by default and forwards the parsed timestamp to the inline edit control', () => {
    const component = shallowMount(DateEditableRenderer, { propsData: { date: '1700000000000' } })
    const stub = component.find('anonymous-stub')
    expect(stub.attributes('type')).toBe('date')
    expect(stub.attributes('value')).toBe('1700000000000')
  })

  it('renders the DateRenderer directly when editable is false', () => {
    const component = shallowMount(DateEditableRenderer, { propsData: { date: '1700000000000', editable: false } })
    expect(component.html()).not.toContain('type="date"')
    expect(component.find('anonymous-stub').attributes('date')).toBe('1700000000000')
  })

  it('forwards an empty value when no date is provided', () => {
    const component = shallowMount(DateEditableRenderer)
    expect(component.find('anonymous-stub').attributes('value')).toBe('')
  })

  it('declares save-requested as an emitted event', () => {
    const component = shallowMount(DateEditableRenderer, { propsData: { date: '1700000000000' } })
    expect(component.vm.$options.emits).toContain('save-requested')
  })
})
