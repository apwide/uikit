import { shallowMount } from '@vue/test-utils'
import MultiSelectEditableRenderer from '@components/field-renderers/MultiSelectEditableRenderer.vue'

describe('MultiSelectEditableRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(MultiSelectEditableRenderer)
    expect(component.exists()).toBe(true)
  })

  it('defaults value and allowedValues to empty arrays', () => {
    const component = shallowMount(MultiSelectEditableRenderer)
    expect(component.vm.$props.value).toEqual([])
    expect(component.vm.$props.allowedValues).toEqual([])
  })

  it('is editable by default and renders the inline edit control', () => {
    const component = shallowMount(MultiSelectEditableRenderer, { propsData: { value: ['A', 'B'] } })
    expect(component.find('anonymous-stub').exists()).toBe(true)
  })

  it('renders a plain wrapper when editable is false', () => {
    const component = shallowMount(MultiSelectEditableRenderer, {
      propsData: { value: ['A', 'B'], editable: false }
    })
    expect(component.element.tagName).toBe('DIV')
  })

  it('normalizes selected values into labels for the default renderer', () => {
    const component = shallowMount(MultiSelectEditableRenderer, {
      propsData: { value: ['A', 'B'], editable: false }
    })
    expect(component.find('anonymous-stub').attributes('selectedvalues')).toBe('A,B')
  })

  it('declares save-requested, start-editing and stop-editing as emitted events', () => {
    const component = shallowMount(MultiSelectEditableRenderer)
    expect(component.vm.$options.emits).toEqual(
      expect.arrayContaining(['save-requested', 'start-editing', 'stop-editing', 'input', 'search-change', 'blur'])
    )
  })
})
