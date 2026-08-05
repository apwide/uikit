import { shallowMount } from '@vue/test-utils'
import HyperlinkEditableRenderer from '@components/field-renderers/HyperlinkEditableRenderer.vue'

describe('HyperlinkEditableRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(HyperlinkEditableRenderer)
    expect(component.exists()).toBe(true)
  })

  it('is editable by default and forwards the link to the inline edit control', () => {
    const component = shallowMount(HyperlinkEditableRenderer, { propsData: { link: 'https://apwide.com' } })
    expect(component.find('anonymous-stub').attributes('value')).toBe('https://apwide.com')
  })

  it('renders the HyperlinkRenderer directly when editable is false', () => {
    const component = shallowMount(HyperlinkEditableRenderer, {
      propsData: { link: 'https://apwide.com', editable: false }
    })
    expect(component.html()).not.toContain('placement=')
    expect(component.find('anonymous-stub').attributes('link')).toBe('https://apwide.com')
  })

  it('declares save-requested as an emitted event', () => {
    const component = shallowMount(HyperlinkEditableRenderer, { propsData: { link: 'https://apwide.com' } })
    expect(component.vm.$options.emits).toContain('save-requested')
  })
})
