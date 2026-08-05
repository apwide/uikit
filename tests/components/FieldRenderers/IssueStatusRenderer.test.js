import { shallowMount } from '@vue/test-utils'
import IssueStatusRenderer from '@components/field-renderers/IssueStatusRenderer.vue'

describe('IssueStatusRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(IssueStatusRenderer)
    expect(component.exists()).toBe(true)
  })

  it('renders the status name', () => {
    const component = shallowMount(IssueStatusRenderer, {
      propsData: { value: { name: 'In Progress', statusCategory: { colorName: 'yellow' } } }
    })
    expect(component.text()).toBe('In Progress')
  })

  it('sets the status-color attribute from the status category', () => {
    const component = shallowMount(IssueStatusRenderer, {
      propsData: { value: { name: 'In Progress', statusCategory: { colorName: 'yellow' } } }
    })
    expect(component.attributes('status-color')).toBe('yellow')
  })

  it('sets the title attribute to the status name', () => {
    const component = shallowMount(IssueStatusRenderer, {
      propsData: { value: { name: 'Done', statusCategory: { colorName: 'green' } } }
    })
    expect(component.attributes('title')).toBe('Done')
  })

  it('renders without error when value is not provided', () => {
    const component = shallowMount(IssueStatusRenderer)
    expect(component.text()).toBe('')
  })
})
