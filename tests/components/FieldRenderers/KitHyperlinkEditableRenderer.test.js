import { shallowMount } from '@vue/test-utils'
import KitHyperlinkEditableRenderer from '@components/field-renderers/KitHyperlinkEditableRenderer.vue'

describe('KitHyperlinkEditableRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitHyperlinkEditableRenderer)
    expect(component.exists()).toBe(true)
  })

  it('is editable by default and forwards the link to the inline edit control', () => {
    const component = shallowMount(KitHyperlinkEditableRenderer, { propsData: { link: 'https://apwide.com' } })
    expect(component.find('anonymous-stub').attributes('value')).toBe('https://apwide.com')
  })

  it('renders the HyperlinkRenderer directly when editable is false', () => {
    const component = shallowMount(KitHyperlinkEditableRenderer, {
      propsData: { link: 'https://apwide.com', editable: false }
    })
    expect(component.html()).not.toContain('placement=')
    expect(component.find('anonymous-stub').attributes('link')).toBe('https://apwide.com')
  })

  it('declares save-requested as an emitted event', () => {
    const component = shallowMount(KitHyperlinkEditableRenderer, { propsData: { link: 'https://apwide.com' } })
    expect(component.vm.$options.emits).toContain('save-requested')
  })
})
