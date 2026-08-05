import { shallowMount } from '@vue/test-utils'
import SelectNode from '@components/Select/TreeSelect/SelectNode.vue'

const option = { id: 1, label: 'Option 1', value: 'opt1' }

describe('KitSelectNode', () => {
  it('renders with default props', () => {
    const component = shallowMount(SelectNode)
    expect(component.exists()).toBe(true)
  })

  it('defaults option to an empty object', () => {
    const component = shallowMount(SelectNode)
    expect(component.props('option')).toEqual({})
  })

  it('defaults selected to an empty array', () => {
    const component = shallowMount(SelectNode)
    expect(component.props('selected')).toEqual([])
  })

  it('renders a Node with the option forwarded', () => {
    const component = shallowMount(SelectNode, { propsData: { option } })
    const node = component.find('node-stub')
    expect(node.attributes('node')).toBe('[object Object]')
  })

  it('marks the node as current when index matches currentSuggestionIndex', () => {
    const component = shallowMount(SelectNode, { propsData: { option, index: 2, currentSuggestionIndex: 2 } })
    expect(component.find('node-stub').attributes('current')).toBe('true')
  })

  it('does not mark the node as current when indexes differ', () => {
    const component = shallowMount(SelectNode, { propsData: { option, index: 1, currentSuggestionIndex: 2 } })
    expect(component.find('node-stub').attributes('current')).toBeUndefined()
  })

  it('emits option-selected when the Node emits input', async () => {
    const component = shallowMount(SelectNode, { propsData: { option } })
    await component.find('node-stub').vm.$emit('input', [option])
    expect(component.emitted('option-selected')).toEqual([[option]])
  })

  it('renders the option slot when provided', () => {
    const component = shallowMount(SelectNode, {
      propsData: { option },
      scopedSlots: {
        option: '<span class="custom-option">{{ props.option.label }}</span>'
      }
    })
    expect(component.find('.custom-option').text()).toBe('Option 1')
  })
})
