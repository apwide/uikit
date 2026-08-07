import { shallowMount } from '@vue/test-utils'
import Icons from '@components/Select/Icons.vue'

describe('Icons', () => {
  it('renders with default props', () => {
    const component = shallowMount(Icons)
    expect(component.exists()).toBe(true)
  })

  it('shows the caret by default', () => {
    const component = shallowMount(Icons)
    expect(component.html()).toContain('hipchat-chevron-down-icon-stub')
  })

  it('hides the caret when createable is true', () => {
    const component = shallowMount(Icons, { propsData: { createable: true } })
    expect(component.html()).not.toContain('hipchat-chevron-down-icon-stub')
  })

  it('does not show the spinner by default', () => {
    const component = shallowMount(Icons)
    expect(component.find('.spinner-icon').exists()).toBe(false)
  })

  it('shows the spinner when isFetching is true', () => {
    const component = shallowMount(Icons, { propsData: { isFetching: true } })
    expect(component.find('.spinner-icon').exists()).toBe(true)
  })

  it('does not show the clear icon by default', () => {
    const component = shallowMount(Icons)
    expect(component.find('.clear-icon').exists()).toBe(false)
  })

  it('shows the clear icon only when selected, clearable and not fetching', () => {
    const component = shallowMount(Icons, {
      propsData: { isSelected: true, isClearable: true, isFetching: false }
    })
    expect(component.find('.clear-icon').exists()).toBe(true)
  })

  it('hides the clear icon while fetching, even if selected and clearable', () => {
    const component = shallowMount(Icons, {
      propsData: { isSelected: true, isClearable: true, isFetching: true }
    })
    expect(component.find('.clear-icon').exists()).toBe(false)
  })

  it('emits clear when the clear icon is clicked', async () => {
    const component = shallowMount(Icons, {
      propsData: { isSelected: true, isClearable: true }
    })
    await component.find('.clear-icon').trigger('click')
    expect(component.emitted('clear')).toBeTruthy()
  })

  it('renders slot content instead of the default caret', () => {
    const component = shallowMount(Icons, {
      slots: { default: '<span class="custom-icon">Icon</span>' }
    })
    expect(component.find('.custom-icon').exists()).toBe(true)
  })
})
