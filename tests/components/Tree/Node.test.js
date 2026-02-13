import { shallowMount } from '@vue/test-utils'
import Node from '@components/Tree/Node.vue'

const mockNode = {
  id: 1,
  label: 'Test Node'
}

const mockNodeWithChildren = {
  id: 1,
  label: 'Parent',
  children: [
    { id: 2, label: 'Child 1' },
    { id: 3, label: 'Child 2' }
  ]
}

describe('Node', () => {
  it('renders with required props', () => {
    const component = shallowMount(Node, {
      propsData: { node: mockNode, level: 1, expandLevel: 2 }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders as li element', () => {
    const component = shallowMount(Node, {
      propsData: { node: mockNode, level: 1, expandLevel: 2 }
    })
    expect(component.element.tagName).toBe('LI')
  })

  it('displays node label', () => {
    const component = shallowMount(Node, {
      propsData: { node: mockNode, level: 1, expandLevel: 2 }
    })
    expect(component.text()).toContain('Test Node')
  })

  it('renders children when node has children', () => {
    const component = shallowMount(Node, {
      propsData: { node: mockNodeWithChildren, level: 1, expandLevel: 2 }
    })
    // Should render nested ul for children
    expect(component.find('ul').exists()).toBe(true)
  })

  it('accepts level prop', () => {
    const component = shallowMount(Node, {
      propsData: { node: mockNode, level: 3, expandLevel: 2 }
    })
    expect(component.props('level')).toBe(3)
  })

  it('accepts expanded array prop', () => {
    const component = shallowMount(Node, {
      propsData: { node: mockNode, level: 1, expandLevel: 2, expanded: [1, 2] }
    })
    expect(component.props('expanded')).toEqual([1, 2])
  })

  it('accepts selected prop', () => {
    const component = shallowMount(Node, {
      propsData: { node: mockNode, level: 1, expandLevel: 2, selected: 1 }
    })
    expect(component.props('selected')).toBe(1)
  })

  it('accepts search prop', () => {
    const component = shallowMount(Node, {
      propsData: { node: mockNode, level: 1, expandLevel: 2, search: 'test' }
    })
    expect(component.props('search')).toBe('test')
  })

  it('has correct structure', () => {
    const component = shallowMount(Node, {
      propsData: { node: mockNode, level: 1, expandLevel: 2 }
    })
    expect(component.element.tagName).toBe('LI')
  })

  it('accepts label slot', () => {
    const component = shallowMount(Node, {
      propsData: { node: mockNode, level: 1, expandLevel: 2 },
      slots: {
        label: '<span class="custom-label">Custom Label</span>'
      }
    })
    // Just verify the component renders with slot
    expect(component.exists()).toBe(true)
  })
})
