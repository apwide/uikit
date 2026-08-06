import { shallowMount } from '@vue/test-utils'
import KitHyperlinkRenderer from '@components/field-renderers/KitHyperlinkRenderer.vue'

describe('KitHyperlinkRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitHyperlinkRenderer)
    expect(component.exists()).toBe(true)
  })

  it('renders an anchor tag', () => {
    const component = shallowMount(KitHyperlinkRenderer)
    expect(component.element.tagName).toBe('A')
  })

  it('sets the href to the link prop', () => {
    const component = shallowMount(KitHyperlinkRenderer, { propsData: { link: 'https://apwide.com' } })
    expect(component.attributes('href')).toBe('https://apwide.com')
  })

  it('renders the link as text content', () => {
    const component = shallowMount(KitHyperlinkRenderer, { propsData: { link: 'https://apwide.com' } })
    expect(component.text()).toBe('https://apwide.com')
  })

  it('targets _top', () => {
    const component = shallowMount(KitHyperlinkRenderer, { propsData: { link: 'https://apwide.com' } })
    expect(component.attributes('target')).toBe('_top')
  })

  it('renders empty when no link is provided', () => {
    const component = shallowMount(KitHyperlinkRenderer)
    expect(component.text()).toBe('')
  })
})
