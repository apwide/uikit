import { shallowMount } from '@vue/test-utils'
import KitSelectMenu from '@components/Select/KitSelectMenu.vue'
import KitSelectOption from '@components/Select/KitSelectOption.vue'

const mockOptions = [
  { id: 1, label: 'Option 1', value: 'opt1', disabled: false },
  { id: 2, label: 'Option 2', value: 'opt2', disabled: false }
]

describe('KitSelectMenu', () => {
  it('renders with required props', () => {
    const component = shallowMount(KitSelectMenu, { propsData: { appendToBody: false } })
    expect(component.exists()).toBe(true)
  })

  it('renders one option per item in the options list', () => {
    const component = shallowMount(KitSelectMenu, {
      propsData: { options: mockOptions, appendToBody: false, hasSuggestions: true }
    })
    expect(component.findAll('[data-cy="select-option"]')).toHaveLength(2)
  })

  it('shows the no-options message when hasSuggestions is false', () => {
    const component = shallowMount(KitSelectMenu, {
      propsData: { appendToBody: false, hasSuggestions: false, noOptionsMessage: 'Nothing found' }
    })
    const noOptions = component.find('[data-cy="no-options"]')
    expect(noOptions.exists()).toBe(true)
    expect(noOptions.text()).toBe('Nothing found')
  })

  it('shows the placeholder instead of the no-options message while async and query-less', () => {
    const component = shallowMount(KitSelectMenu, {
      propsData: {
        appendToBody: false,
        hasSuggestions: false,
        async: true,
        containsQuery: false,
        placeholder: 'Type to search...',
        noOptionsMessage: 'Nothing found'
      }
    })
    expect(component.find('[data-cy="no-options"]').text()).toBe('Type to search...')
  })

  it('does not show the no-options message when there are suggestions', () => {
    const component = shallowMount(KitSelectMenu, {
      propsData: { options: mockOptions, appendToBody: false, hasSuggestions: true }
    })
    expect(component.find('[data-cy="no-options"]').exists()).toBe(false)
  })

  it('emits option-selected when a KitSelectOption emits option-selected', async () => {
    const component = shallowMount(KitSelectMenu, {
      propsData: { options: mockOptions, appendToBody: false, hasSuggestions: true }
    })
    await component.findComponent(KitSelectOption).vm.$emit('option-selected', mockOptions[0])
    expect(component.emitted('option-selected')).toEqual([[mockOptions[0]]])
  })

  it('emits mouseover with the index when a KitSelectOption emits mouseover', async () => {
    const component = shallowMount(KitSelectMenu, {
      propsData: { options: mockOptions, appendToBody: false, hasSuggestions: true }
    })
    await component.findComponent(KitSelectOption).vm.$emit('mouseover', 0)
    expect(component.emitted('mouseover')).toEqual([[0]])
  })

  it('appends the menu to the document body when appendToBody is true', () => {
    const appendChild = jest.spyOn(document.body, 'appendChild')
    const component = shallowMount(KitSelectMenu, { propsData: { appendToBody: true } })
    expect(appendChild).toHaveBeenCalledWith(component.element)
    appendChild.mockRestore()
  })

  it('does not append the menu to the document body when appendToBody is false', () => {
    const appendChild = jest.spyOn(document.body, 'appendChild')
    shallowMount(KitSelectMenu, { propsData: { appendToBody: false } })
    expect(appendChild).not.toHaveBeenCalled()
    appendChild.mockRestore()
  })
})
