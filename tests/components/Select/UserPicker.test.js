import { mount, shallowMount } from '@vue/test-utils'
import UserPicker from '@components/Select/UserPicker.vue'
import KitSelect from '@components/Select/KitSelect.vue'

const users = [
  { key: 'jdoe', name: 'Jane Doe', disabled: false },
  { key: 'bsmith', name: 'Bob Smith', disabled: false }
]
const getUsers = jest.fn().mockResolvedValue({ data: users })

describe('UserPicker', () => {
  it('renders with required props', () => {
    const component = shallowMount(UserPicker, { propsData: { getUsers } })
    expect(component.exists()).toBe(true)
  })

  it('forwards the value to the inner KitSelect', () => {
    const component = shallowMount(UserPicker, { propsData: { getUsers, modelValue: users[0] } })
    expect(component.findComponent(KitSelect).attributes('modelvalue')).toBe('[object Object]')
  })

  it('defaults value to an empty string', () => {
    const component = shallowMount(UserPicker, { propsData: { getUsers } })
    expect(component.vm.$props.modelValue).toBe('')
  })

  it('defaults placeholder and searchPromptText to "Type to search..."', () => {
    const component = shallowMount(UserPicker, { propsData: { getUsers } })
    expect(component.vm.$props.placeholder).toBe('Type to search...')
    expect(component.vm.$props.searchPromptText).toBe('Type to search...')
  })

  it('sets async to true on the inner KitSelect', () => {
    const component = shallowMount(UserPicker, { propsData: { getUsers } })
    expect(component.findComponent(KitSelect).attributes('async')).toBe('true')
  })

  it('forwards the multi prop to the inner KitSelect', () => {
    const component = shallowMount(UserPicker, { propsData: { getUsers, multi: true } })
    expect(component.findComponent(KitSelect).attributes('multi')).toBe('true')
  })

  it('loads initial options when the select is opened', async () => {
    const component = mount(UserPicker, { propsData: { getUsers, initialOptions: users } })
    await component.find('.kit-select-wrapper').trigger('click')
    expect(component.find('[data-cy="select-option"]')).toBeTruthy()
    expect(component.text()).toContain('Jane Doe')
    expect(component.text()).toContain('Bob Smith')
  })

  it('fetches and maps users on search-change', async () => {
    const component = mount(UserPicker, { propsData: { getUsers } })
    const input = component.find('input.kit-select__search')
    input.element.value = 'jane'
    await input.trigger('input')
    await new Promise(resolve => setTimeout(resolve, 250))
    expect(getUsers).toHaveBeenCalledWith('jane')
  })
})
