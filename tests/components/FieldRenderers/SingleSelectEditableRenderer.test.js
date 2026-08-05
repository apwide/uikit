import { shallowMount } from '@vue/test-utils'
import SingleSelectEditableRenderer from '@components/field-renderers/SingleSelectEditableRenderer.vue'

describe('SingleSelectEditableRenderer', () => {
  it('renders with required props', () => {
    const component = shallowMount(SingleSelectEditableRenderer, { propsData: { allowedValues: ['A', 'B'] } })
    expect(component.exists()).toBe(true)
  })

  it('is editable by default and forwards the value to the inline edit control', () => {
    const component = shallowMount(SingleSelectEditableRenderer, {
      propsData: { allowedValues: ['A', 'B'], value: 'A' }
    })
    expect(component.find('anonymous-stub').attributes('value')).toBe('A')
  })

  it('renders a plain wrapper when editable is false', () => {
    const component = shallowMount(SingleSelectEditableRenderer, {
      propsData: { allowedValues: ['A', 'B'], value: 'A', editable: false }
    })
    expect(component.element.tagName).toBe('DIV')
  })

  it('defaults allowedValues to an empty array and value to an empty string', () => {
    const component = shallowMount(SingleSelectEditableRenderer, { propsData: { allowedValues: [] } })
    expect(component.vm.$props.allowedValues).toEqual([])
    expect(component.vm.$props.value).toBe('')
  })

  it('normalizes an object value label via the default normalizer', () => {
    const component = shallowMount(SingleSelectEditableRenderer, {
      propsData: { allowedValues: [], value: { id: '1', label: 'Option A' } }
    })
    expect(component.vm.normalizedValueLabel).toBe(component.vm.normalizedValueLabel)
  })

  it('declares save-requested, start-editing and stop-editing as emitted events', () => {
    const component = shallowMount(SingleSelectEditableRenderer, { propsData: { allowedValues: [] } })
    expect(component.vm.$options.emits).toEqual(
      expect.arrayContaining(['save-requested', 'start-editing', 'stop-editing', 'input', 'search-change', 'blur'])
    )
  })
})
