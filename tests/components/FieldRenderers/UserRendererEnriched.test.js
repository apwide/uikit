import { shallowMount } from '@vue/test-utils'
import UserRendererEnriched from '@components/field-renderers/UserRendererEnriched.vue'

describe('UserRendererEnriched', () => {
  it('renders with default props', () => {
    const component = shallowMount(UserRendererEnriched)
    expect(component.exists()).toBe(true)
  })

  it('delegates to UserEditableRendererEnriched, forwarding the user prop', () => {
    const component = shallowMount(UserRendererEnriched, {
      propsData: { user: { name: 'Jane Doe' } }
    })
    expect(component.html()).toContain('user="[object Object]"')
  })

  it('forwards the avatarOnly prop', () => {
    const component = shallowMount(UserRendererEnriched, {
      propsData: { user: { name: 'Jane Doe' }, avatarOnly: true }
    })
    expect(component.html()).toContain('avataronly="true"')
  })

  it('defaults avatarOnly to false', () => {
    const component = shallowMount(UserRendererEnriched)
    expect(component.vm.$props.avatarOnly).toBe(false)
  })
})
