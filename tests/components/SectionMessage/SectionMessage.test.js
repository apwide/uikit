import { shallowMount } from '@vue/test-utils'
import KitSectionMessage from '@components/SectionMessage/KitSectionMessage.vue'

describe('KitSectionMessage', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitSectionMessage)
    expect(component.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = shallowMount(KitSectionMessage, {
      slots: { default: '<p>Message content</p>' }
    })
    expect(component.text()).toContain('Message content')
  })

  it('displays title when provided', () => {
    const component = shallowMount(KitSectionMessage, {
      propsData: { title: 'Important Message' }
    })
    expect(component.text()).toContain('Important Message')
  })

  it('does not render title when not provided', () => {
    const component = shallowMount(KitSectionMessage)
    const title = component.find('.kit-section-message__title')
    expect(title.exists()).toBe(false)
  })

  it('uses default appearance info', () => {
    const component = shallowMount(KitSectionMessage)
    const section = component.find('section')
    expect(section.attributes('appearance')).toBe('info')
  })

  it('accepts warning appearance', () => {
    const component = shallowMount(KitSectionMessage, {
      propsData: { appearance: 'warning' }
    })
    const section = component.find('section')
    expect(section.attributes('appearance')).toBe('warning')
  })

  it('accepts error appearance', () => {
    const component = shallowMount(KitSectionMessage, {
      propsData: { appearance: 'error' }
    })
    const section = component.find('section')
    expect(section.attributes('appearance')).toBe('error')
  })

  it('accepts confirmation appearance', () => {
    const component = shallowMount(KitSectionMessage, {
      propsData: { appearance: 'confirmation' }
    })
    const section = component.find('section')
    expect(section.attributes('appearance')).toBe('confirmation')
  })

  it('accepts change appearance', () => {
    const component = shallowMount(KitSectionMessage, {
      propsData: { appearance: 'change' }
    })
    const section = component.find('section')
    expect(section.attributes('appearance')).toBe('change')
  })

  it('accepts setup appearance', () => {
    const component = shallowMount(KitSectionMessage, {
      propsData: { appearance: 'setup' }
    })
    const section = component.find('section')
    expect(section.attributes('appearance')).toBe('setup')
  })

  it('renders icon by default', () => {
    const component = shallowMount(KitSectionMessage)
    const icon = component.find('.kit-section-message__icon')
    expect(icon.exists()).toBe(true)
  })

  it('hides icon when hideIcon is true', () => {
    const component = shallowMount(KitSectionMessage, {
      propsData: { hideIcon: true }
    })
    const icon = component.find('.kit-section-message__icon')
    expect(icon.exists()).toBe(false)
  })

  it('renders actions slot', () => {
    const component = shallowMount(KitSectionMessage, {
      slots: { actions: '<button class="action-btn">Action</button>' }
    })
    const actions = component.find('.kit-section-message__actions')
    expect(actions.exists()).toBe(true)
  })

  it('does not render actions when slot is empty', () => {
    const component = shallowMount(KitSectionMessage)
    const actions = component.find('.kit-section-message__actions')
    expect(actions.exists()).toBe(false)
  })

  it('has correct CSS class', () => {
    const component = shallowMount(KitSectionMessage)
    expect(component.classes()).toContain('kit-section-message')
  })

  it('renders as section element', () => {
    const component = shallowMount(KitSectionMessage)
    expect(component.element.tagName).toBe('SECTION')
  })
})
