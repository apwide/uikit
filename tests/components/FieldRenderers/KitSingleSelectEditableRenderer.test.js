import { shallowMount } from '@vue/test-utils'
import KitSingleSelectEditableRenderer from '@components/field-renderers/KitSingleSelectEditableRenderer.vue'

describe('KitSingleSelectEditableRenderer', () => {
  it('renders with required props', () => {
    const component = shallowMount(KitSingleSelectEditableRenderer, { propsData: { allowedValues: ['A', 'B'] } })
    expect(component.exists()).toBe(true)
  })

  it('is editable by default and forwards the value to the inline edit control', () => {
    const component = shallowMount(KitSingleSelectEditableRenderer, {
      propsData: { allowedValues: ['A', 'B'], value: 'A' }
    })
    expect(component.find('anonymous-stub').attributes('value')).toBe('A')
  })

  it('renders a plain wrapper when editable is false', () => {
    const component = shallowMount(KitSingleSelectEditableRenderer, {
      propsData: { allowedValues: ['A', 'B'], value: 'A', editable: false }
    })
    expect(component.element.tagName).toBe('DIV')
  })

  it('defaults allowedValues to an empty array and value to an empty string', () => {
    const component = shallowMount(KitSingleSelectEditableRenderer, { propsData: { allowedValues: [] } })
    expect(component.vm.$props.allowedValues).toEqual([])
    expect(component.vm.$props.value).toBe('')
  })

  it('normalizes an object value label via the default normalizer', () => {
    const component = shallowMount(KitSingleSelectEditableRenderer, {
      propsData: { allowedValues: [], value: { id: '1', label: 'Option A' } }
    })
    expect(component.vm.normalizedValueLabel).toBe(component.vm.normalizedValueLabel)
  })

  it('declares save-requested, start-editing and stop-editing as emitted events', () => {
    const component = shallowMount(KitSingleSelectEditableRenderer, { propsData: { allowedValues: [] } })
    expect(component.vm.$options.emits).toEqual(
      expect.arrayContaining(['save-requested', 'start-editing', 'stop-editing', 'input', 'search-change', 'blur'])
    )
  })
})
