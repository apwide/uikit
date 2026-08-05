import { shallowMount } from '@vue/test-utils'
import IssueTypeRenderer from '@components/field-renderers/IssueTypeRenderer.vue'

describe('IssueTypeRenderer', () => {
  it('renders with required props', () => {
    const component = shallowMount(IssueTypeRenderer, {
      propsData: { value: { name: 'Bug', iconUrl: '/icons/bug.svg' } }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders the type icon with correct src and alt', () => {
    const component = shallowMount(IssueTypeRenderer, {
      propsData: { value: { name: 'Bug', iconUrl: '/icons/bug.svg' } }
    })
    const img = component.find('img.issue-type-icon')
    expect(img.attributes('src')).toBe('/icons/bug.svg')
    expect(img.attributes('alt')).toBe('Bug')
  })

  it('does not render the name by default', () => {
    const component = shallowMount(IssueTypeRenderer, {
      propsData: { value: { name: 'Bug', iconUrl: '/icons/bug.svg' } }
    })
    expect(component.find('span').exists()).toBe(false)
  })

  it('renders the name when compact is true', () => {
    const component = shallowMount(IssueTypeRenderer, {
      propsData: { value: { name: 'Bug', iconUrl: '/icons/bug.svg' }, compact: true }
    })
    expect(component.find('span').text()).toBe('Bug')
  })

  it('defaults compact to false', () => {
    const component = shallowMount(IssueTypeRenderer, {
      propsData: { value: { name: 'Bug', iconUrl: '/icons/bug.svg' } }
    })
    expect(component.vm.$props.compact).toBe(false)
  })
})
