import { shallowMount } from '@vue/test-utils'
import LinkedIssuesList from '@components/field-renderers/LinkedIssuesList.vue'

describe('LinkedIssuesList', () => {
  it('renders with default props', () => {
    const component = shallowMount(LinkedIssuesList)
    expect(component.exists()).toBe(true)
  })

  it('defaults issues to an empty array and renders no items', () => {
    const component = shallowMount(LinkedIssuesList)
    expect(component.vm.$props.issues).toEqual([])
    expect(component.findAll('li')).toHaveLength(0)
  })

  it('renders one item per issue', () => {
    const component = shallowMount(LinkedIssuesList, {
      propsData: { issues: [{ id: 1, key: 'AP-1' }, { id: 2, key: 'AP-2' }] }
    })
    expect(component.findAll('li')).toHaveLength(2)
  })

  it('forwards baseUrl and appearance to each rendered issue', () => {
    const component = shallowMount(LinkedIssuesList, {
      propsData: {
        issues: [{ id: 1, key: 'AP-1' }],
        baseUrl: 'https://jira.example.com',
        appearance: 'compact'
      }
    })
    expect(component.html()).toContain('baseurl="https://jira.example.com"')
    expect(component.html()).toContain('appearance="compact"')
  })

  it('defaults baseUrl to empty string and appearance to normal', () => {
    const component = shallowMount(LinkedIssuesList)
    expect(component.vm.$props.baseUrl).toBe('')
    expect(component.vm.$props.appearance).toBe('normal')
  })
})
