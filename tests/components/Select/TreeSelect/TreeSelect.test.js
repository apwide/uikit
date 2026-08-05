import { shallowMount } from '@vue/test-utils'
import TreeSelect from '@components/Select/TreeSelect/TreeSelect.vue'
import { EventBus } from '@components/event-bus'

const options = [
  { id: 1, label: 'Parent 1', children: [{ id: 2, label: 'Child 1.1' }] },
  { id: 3, label: 'Parent 2' }
]

describe('TreeSelect', () => {
  it('renders with default props', () => {
    const component = shallowMount(TreeSelect)
    expect(component.exists()).toBe(true)
  })

  it('defaults value to an empty object and options to an empty array', () => {
    const component = shallowMount(TreeSelect)
    expect(component.vm.value).toEqual({})
    expect(component.vm.options).toEqual([])
  })

  it('is closed by default', () => {
    const component = shallowMount(TreeSelect)
    expect(component.vm.isOpen).toBe(false)
    expect(component.find('selectmenu-stub').exists()).toBe(false)
  })

  it('opens the menu when the field is clicked', async () => {
    const component = shallowMount(TreeSelect, { propsData: { options } })
    await component.find('.text-field').vm.$emit('click')
    expect(component.vm.isOpen).toBe(true)
  })

  it('closes the menu when the field is clicked again', async () => {
    const component = shallowMount(TreeSelect, { propsData: { options } })
    const field = component.find('.text-field')
    await field.vm.$emit('click')
    await field.vm.$emit('click')
    expect(component.vm.isOpen).toBe(false)
  })

  it('emits open and close as isOpen toggles', async () => {
    const component = shallowMount(TreeSelect, { propsData: { options } })
    const field = component.find('.text-field')
    await field.vm.$emit('click')
    expect(component.emitted('open')).toBeTruthy()
    await field.vm.$emit('click')
    expect(component.emitted('close')).toBeTruthy()
  })

  it('updates the search value on input and emits search-change', async () => {
    const component = shallowMount(TreeSelect, { propsData: { options } })
    const input = component.find('input.search')
    await input.setValue('Parent')
    expect(component.vm.search).toBe('Parent')
    expect(component.emitted('search-change')).toEqual([['Parent']])
  })

  it('emits input with undefined when the value is removed via backspace with an empty search', async () => {
    const component = shallowMount(TreeSelect, { propsData: { options, value: options[0] } })
    await component.find('input.search').trigger('keydown', { key: 'Delete' })
    expect(component.emitted('input')).toEqual([[undefined]])
  })

  it('emits focus when the input is focused', async () => {
    const component = shallowMount(TreeSelect, { propsData: { options }, attachTo: document.body })
    await component.find('input.search').trigger('focus')
    expect(component.emitted('focus')).toBeTruthy()
    component.destroy()
  })

  it('emits blur and clears the search when the input is blurred', async () => {
    const component = shallowMount(TreeSelect, { propsData: { options } })
    const input = component.find('input.search')
    await input.setValue('abc')
    await input.trigger('blur')
    expect(component.emitted('blur')).toBeTruthy()
    expect(component.vm.search).toBe('')
  })

  it('emits cancel and closes the menu on Escape', async () => {
    const component = shallowMount(TreeSelect, { propsData: { options } })
    await component.find('.text-field').vm.$emit('click')
    await component.find('input.search').trigger('keyup', { key: 'Escape' })
    expect(component.vm.isOpen).toBe(false)
    expect(component.emitted('cancel')).toBeTruthy()
  })

  it('emits input and closes the menu when an option is selected', async () => {
    const component = shallowMount(TreeSelect, { propsData: { options } })
    await component.find('.text-field').vm.$emit('click')
    const menu = component.find('selectmenu-stub')
    await menu.vm.$emit('option-selected', options[0].children[0], [options[0]])
    expect(component.emitted('input')).toEqual([[options[0].children[0]]])
    expect(component.vm.isOpen).toBe(false)
  })

  it('emits input with undefined when cleared via the Icons clear button', async () => {
    const component = shallowMount(TreeSelect, { propsData: { options, value: options[0] } })
    await component.find('icons-stub').vm.$emit('clear')
    expect(component.emitted('input')).toEqual([[undefined]])
  })

  it('emits remote-select on the EventBus when Enter is pressed with a suggestion highlighted', async () => {
    const busSpy = jest.spyOn(EventBus, '$emit')
    const component = shallowMount(TreeSelect, { propsData: { options } })
    component.vm.currentSuggestionId = 2
    await component.find('input.search').trigger('keydown', { key: 'Enter' })
    expect(busSpy).toHaveBeenCalledWith('remote-select')
    busSpy.mockRestore()
  })

  it('emits confirm instead when Enter is pressed with no suggestion highlighted', async () => {
    const component = shallowMount(TreeSelect, { propsData: { options } })
    await component.find('input.search').trigger('keydown', { key: 'Enter' })
    expect(component.emitted('confirm')).toBeTruthy()
  })
})
