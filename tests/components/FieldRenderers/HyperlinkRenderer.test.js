import { shallowMount } from '@vue/test-utils'
import HyperlinkRenderer from '@components/field-renderers/HyperlinkRenderer.vue'

describe('HyperlinkRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(HyperlinkRenderer)
    expect(component.exists()).toBe(true)
  })

  it('renders an anchor tag', () => {
    const component = shallowMount(HyperlinkRenderer)
    expect(component.element.tagName).toBe('A')
  })

  it('sets the href to the link prop', () => {
    const component = shallowMount(HyperlinkRenderer, { propsData: { link: 'https://apwide.com' } })
    expect(component.attributes('href')).toBe('https://apwide.com')
  })

  it('renders the link as text content', () => {
    const component = shallowMount(HyperlinkRenderer, { propsData: { link: 'https://apwide.com' } })
    expect(component.text()).toBe('https://apwide.com')
  })

  it('targets _top', () => {
    const component = shallowMount(HyperlinkRenderer, { propsData: { link: 'https://apwide.com' } })
    expect(component.attributes('target')).toBe('_top')
  })

  it('renders empty when no link is provided', () => {
    const component = shallowMount(HyperlinkRenderer)
    expect(component.text()).toBe('')
  })
})
