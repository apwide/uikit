import { shallowMount } from '@vue/test-utils'
import IssueRenderer from '@components/field-renderers/IssueRenderer.vue'

const baseIssue = {
  key: 'AP-42',
  fields: {
    summary: 'Fix the bug',
    issuetype: { name: 'Bug', iconUrl: '/icons/bug.svg' },
    priority: { name: 'High', iconUrl: '/icons/high.svg' },
    status: { name: 'Done', statusCategory: { colorName: 'green' } },
    assignee: { displayName: 'Jane Doe', avatarUrls: { '48x48': '/avatars/jane.png' } }
  }
}

describe('IssueRenderer', () => {
  it('renders nothing when no issue is provided', () => {
    const component = shallowMount(IssueRenderer)
    expect(component.find('.issue').exists()).toBe(false)
  })

  it('renders the issue key as a link', () => {
    const component = shallowMount(IssueRenderer, { propsData: { issue: baseIssue } })
    const key = component.find('.issue-key')
    expect(key.text()).toBe('AP-42')
    expect(key.attributes('href')).toBe('/browse/AP-42')
  })

  it('builds the href using the baseUrl prop', () => {
    const component = shallowMount(IssueRenderer, {
      propsData: { issue: baseIssue, baseUrl: 'https://jira.example.com' }
    })
    expect(component.find('.issue-key').attributes('href')).toBe('https://jira.example.com/browse/AP-42')
  })

  it('shows the summary for normal and compact appearance', () => {
    const component = shallowMount(IssueRenderer, { propsData: { issue: baseIssue } })
    expect(component.find('.issue-summary').text()).toBe('Fix the bug')
  })

  it('hides the summary for micro appearance', () => {
    const component = shallowMount(IssueRenderer, {
      propsData: { issue: baseIssue, appearance: 'micro' }
    })
    expect(component.find('.issue-summary').exists()).toBe(false)
  })

  it('marks the issue as resolved when a resolution is present', () => {
    const resolved = { ...baseIssue, fields: { ...baseIssue.fields, resolution: { name: 'Fixed' } } }
    const component = shallowMount(IssueRenderer, { propsData: { issue: resolved } })
    expect(component.attributes('resolved')).toBe('true')
  })

  it('is not marked resolved when there is no resolution', () => {
    const component = shallowMount(IssueRenderer, { propsData: { issue: baseIssue } })
    expect(component.attributes('resolved')).toBeUndefined()
  })

  it('sets the appearance attribute', () => {
    const component = shallowMount(IssueRenderer, {
      propsData: { issue: baseIssue, appearance: 'compact' }
    })
    expect(component.attributes('appearance')).toBe('compact')
  })

  it('renders priority, assignee and status only for normal appearance', () => {
    const normal = shallowMount(IssueRenderer, { propsData: { issue: baseIssue } })
    expect(normal.find('.issue-status').exists()).toBe(true)

    const compact = shallowMount(IssueRenderer, {
      propsData: { issue: baseIssue, appearance: 'compact' }
    })
    expect(compact.find('.issue-status').exists()).toBe(false)
  })

  it('shows a fallback icon when the issue type is missing', () => {
    const noType = { ...baseIssue, fields: { ...baseIssue.fields, issuetype: undefined } }
    const component = shallowMount(IssueRenderer, { propsData: { issue: noType } })
    expect(component.find('.unknown-type').exists()).toBe(true)
  })
})
