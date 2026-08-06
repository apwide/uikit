import { shallowMount } from '@vue/test-utils'
import Header from '@components/Modal/Header.vue'
import WarningIcon from '@components/Icon/aui/WarningIcon'
import ErrorIcon from '@components/Icon/aui/ErrorIcon'

describe('Header', () => {
  it('renders with default props', () => {
    const component = shallowMount(Header)
    expect(component.exists()).toBe(true)
  })

  it('renders empty heading by default', () => {
    const component = shallowMount(Header)
    expect(component.find('.kit-modal-header__title').text()).toBe('')
  })

  it('renders heading text', () => {
    const component = shallowMount(Header, {
      propsData: { heading: 'Modal Title' }
    })
    expect(component.find('.kit-modal-header__title').text()).toBe('Modal Title')
  })

  it('does not render an icon by default', () => {
    const component = shallowMount(Header)
    expect(component.find('.kit-modal-header__icon').exists()).toBe(false)
  })

  it('renders warning icon for non-danger appearance', () => {
    const component = shallowMount(Header, {
      propsData: { appearance: 'warning' }
    })
    expect(component.findComponent(WarningIcon).exists()).toBe(true)
  })

  it('renders error icon for danger appearance', () => {
    const component = shallowMount(Header, {
      propsData: { appearance: 'danger' }
    })
    expect(component.findComponent(ErrorIcon).exists()).toBe(true)
  })
})
