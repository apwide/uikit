import { shallowMount } from '@vue/test-utils'
import UserEditableRenderer from '@components/field-renderers/UserEditableRenderer.vue'

const loadOptions = jest.fn().mockResolvedValue({ data: [] })

describe('UserEditableRenderer', () => {
  it('renders with required props', () => {
    const component = shallowMount(UserEditableRenderer, { propsData: { loadOptions } })
    expect(component.exists()).toBe(true)
  })

  it('is editable by default and renders the inline edit control', () => {
    const component = shallowMount(UserEditableRenderer, {
      propsData: { loadOptions, user: { key: 'jdoe', name: 'Jane Doe' } }
    })
    expect(component.find('anonymous-stub').exists()).toBe(true)
  })

  it('renders the UserRenderer directly when editable is false', () => {
    const component = shallowMount(UserEditableRenderer, {
      propsData: { loadOptions, user: { key: 'jdoe', name: 'Jane Doe' }, editable: false }
    })
    expect(component.html()).not.toContain('placement=')
    expect(component.find('anonymous-stub').attributes('user')).toBe('[object Object]')
  })

  it('renders the UserRenderer directly when avatarOnly is true, even if editable', () => {
    const component = shallowMount(UserEditableRenderer, {
      propsData: { loadOptions, user: { key: 'jdoe', name: 'Jane Doe' }, avatarOnly: true }
    })
    expect(component.html()).not.toContain('placement=')
  })

  it('defaults tag to span and clearable to true', () => {
    const component = shallowMount(UserEditableRenderer, { propsData: { loadOptions } })
    expect(component.vm.$props.tag).toBe('span')
    expect(component.vm.$props.clearable).toBe(true)
  })

  it('declares save-requested as an emitted event', () => {
    const component = shallowMount(UserEditableRenderer, { propsData: { loadOptions } })
    expect(component.vm.$options.emits).toContain('save-requested')
  })
})
