import { shallowMount } from '@vue/test-utils'
import SelectMenu from '@components/Select/TreeSelect/SelectMenu.vue'

const options = [
  { id: 1, label: 'Parent 1', children: [{ id: 2, label: 'Child 1.1' }] },
  { id: 3, label: 'Parent 2' }
]

describe('KitSelectMenu (TreeSelect)', () => {
  it('renders with default props', () => {
    const component = shallowMount(SelectMenu)
    expect(component.exists()).toBe(true)
  })

  it('defaults options and selected to empty collections', () => {
    const component = shallowMount(SelectMenu)
    expect(component.props('options')).toEqual([])
    expect(component.props('selected')).toEqual([])
  })

  it('forwards options and selected to the Tree component', () => {
    const component = shallowMount(SelectMenu, { propsData: { options, selected: options[1] } })
    const tree = component.find('tree-stub')
    expect(tree.attributes('nodes')).toBe('[object Object],[object Object]')
    expect(tree.attributes('value')).toBe('[object Object]')
  })

  it('shows the no-options message when hasSuggestions is false', () => {
    const component = shallowMount(SelectMenu, { propsData: { hasSuggestions: false, noOptionsMessage: 'Nothing here' } })
    expect(component.find('.no-options').text()).toBe('Nothing here')
  })

  it('hides the no-options message when hasSuggestions is true', () => {
    const component = shallowMount(SelectMenu, { propsData: { hasSuggestions: true } })
    expect(component.find('.no-options').exists()).toBe(false)
  })

  it('shows the placeholder instead of the no-options message while async and query-less', () => {
    const component = shallowMount(SelectMenu, {
      propsData: { hasSuggestions: false, async: true, containsQuery: false, placeholder: 'Type to search...' }
    })
    expect(component.find('.no-options').text()).toBe('Type to search...')
  })

  it('emits option-selected with the option and ancestors when the Tree emits input', async () => {
    const component = shallowMount(SelectMenu, { propsData: { options } })
    const ancestors = [options[0]]
    await component.find('tree-stub').vm.$emit('input', options[0].children[0], ancestors)
    expect(component.emitted('option-selected')).toEqual([[options[0].children[0], ancestors]])
  })
})
