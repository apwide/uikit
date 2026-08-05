import { shallowMount } from '@vue/test-utils'
import IssuePriorityRenderer from '@components/field-renderers/IssuePriorityRenderer.vue'

describe('IssuePriorityRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(IssuePriorityRenderer)
    expect(component.exists()).toBe(true)
  })

  it('defaults value to an empty object', () => {
    const component = shallowMount(IssuePriorityRenderer)
    expect(component.vm.$props.value).toEqual({})
  })

  it('renders the priority name', () => {
    const component = shallowMount(IssuePriorityRenderer, {
      propsData: { value: { name: 'High', iconUrl: '/icons/high.svg' } }
    })
    expect(component.text()).toBe('High')
  })

  it('renders the priority icon with correct src and alt', () => {
    const component = shallowMount(IssuePriorityRenderer, {
      propsData: { value: { name: 'High', iconUrl: '/icons/high.svg' } }
    })
    const img = component.find('img.issue-priority-icon')
    expect(img.attributes('src')).toBe('/icons/high.svg')
    expect(img.attributes('alt')).toBe('High')
  })
})
