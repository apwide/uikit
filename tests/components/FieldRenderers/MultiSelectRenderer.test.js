import { shallowMount } from '@vue/test-utils'
import MultiSelectRenderer from '@components/field-renderers/MultiSelectRenderer.vue'

describe('MultiSelectRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(MultiSelectRenderer)
    expect(component.exists()).toBe(true)
  })

  it('defaults selectedValues to an empty array', () => {
    const component = shallowMount(MultiSelectRenderer)
    expect(component.vm.$props.selectedValues).toEqual([])
    expect(component.findAll('.tag')).toHaveLength(0)
  })

  it('renders a tag for each selected value', () => {
    const component = shallowMount(MultiSelectRenderer, {
      propsData: { selectedValues: ['Alpha', 'Beta', 'Gamma'] }
    })
    const tags = component.findAll('.tag')
    expect(tags).toHaveLength(3)
    expect(tags.at(0).text()).toBe('Alpha')
    expect(tags.at(1).text()).toBe('Beta')
    expect(tags.at(2).text()).toBe('Gamma')
  })

  it('sets the title attribute on each tag', () => {
    const component = shallowMount(MultiSelectRenderer, {
      propsData: { selectedValues: ['Alpha'] }
    })
    expect(component.find('.tag').attributes('title')).toBe('Alpha')
  })

  it('does not render the overflow button when nothing is hidden', () => {
    const component = shallowMount(MultiSelectRenderer, {
      propsData: { selectedValues: ['Alpha', 'Beta'] }
    })
    expect(component.html()).not.toContain('kitbutton-stub')
  })
})
