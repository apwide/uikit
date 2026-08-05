import { shallowMount } from '@vue/test-utils'
import UserRenderer from '@components/field-renderers/UserRenderer.vue'

describe('UserRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(UserRenderer)
    expect(component.exists()).toBe(true)
  })

  it('renders nothing user-related when no user is provided', () => {
    const component = shallowMount(UserRenderer)
    expect(component.find('img.avatar').exists()).toBe(false)
  })

  it('renders the avatar image and name for a given user', () => {
    const component = shallowMount(UserRenderer, {
      propsData: { user: { name: 'Jane Doe', avatar: '/avatars/jane.png' } }
    })
    const avatar = component.find('img.avatar')
    expect(avatar.attributes('src')).toBe('/avatars/jane.png')
    expect(avatar.attributes('title')).toBe('Jane Doe')
    expect(component.find('.user-name').text()).toBe('Jane Doe')
  })

  it('hides the name when avatarOnly is true', () => {
    const component = shallowMount(UserRenderer, {
      propsData: { user: { name: 'Jane Doe', avatar: '/avatars/jane.png' }, avatarOnly: true }
    })
    expect(component.find('.user-name').exists()).toBe(false)
  })

  it('renders the user-name tag as a span by default', () => {
    const component = shallowMount(UserRenderer, {
      propsData: { user: { name: 'Jane Doe' } }
    })
    expect(component.find('.user-name').element.tagName).toBe('SPAN')
  })

  it('renders the user-name tag as an anchor when tag is "a"', () => {
    const component = shallowMount(UserRenderer, {
      propsData: { user: { name: 'Jane Doe' }, tag: 'a', link: '/users/jane' }
    })
    const link = component.find('.user-name')
    expect(link.element.tagName).toBe('A')
    expect(link.attributes('href')).toBe('/users/jane')
  })

  it('sets the appearance attribute', () => {
    const component = shallowMount(UserRenderer, {
      propsData: { user: { name: 'Jane Doe' }, appearance: 'micro' }
    })
    expect(component.attributes('appearance')).toBe('micro')
  })

  it('renders slot content instead of the default user markup', () => {
    const component = shallowMount(UserRenderer, {
      propsData: { user: { name: 'Jane Doe' } },
      slots: { default: '<span class="custom">Custom</span>' }
    })
    expect(component.find('.custom').exists()).toBe(true)
    expect(component.find('.user-name').exists()).toBe(false)
  })
})
