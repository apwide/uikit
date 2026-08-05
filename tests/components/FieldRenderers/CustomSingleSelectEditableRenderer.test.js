import { shallowMount } from '@vue/test-utils'
import CustomSingleSelectEditableRenderer from '@components/field-renderers/CustomSingleSelectEditableRenderer.vue'

describe('CustomSingleSelectEditableRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(CustomSingleSelectEditableRenderer)
    expect(component.exists()).toBe(true)
  })

  it('is editable by default and forwards the value to the inline edit control', () => {
    const component = shallowMount(CustomSingleSelectEditableRenderer, { propsData: { value: 'A' } })
    expect(component.find('anonymous-stub').attributes('value')).toBe('A')
  })

  it('renders the slot wrapper with a "slot" class when editable is false', () => {
    const component = shallowMount(CustomSingleSelectEditableRenderer, {
      propsData: { value: 'A', editable: false }
    })
    expect(component.classes()).toContain('slot')
  })

  it('defaults allowedValues to an empty array', () => {
    const component = shallowMount(CustomSingleSelectEditableRenderer)
    expect(component.vm.$props.allowedValues).toEqual([])
  })

  it('renders slot content', () => {
    const component = shallowMount(CustomSingleSelectEditableRenderer, {
      propsData: { editable: false },
      slots: { default: '<span class="custom">Custom</span>' }
    })
    expect(component.find('.custom').exists()).toBe(true)
  })

  it('declares save-requested as an emitted event', () => {
    const component = shallowMount(CustomSingleSelectEditableRenderer)
    expect(component.vm.$options.emits).toContain('save-requested')
  })
})
