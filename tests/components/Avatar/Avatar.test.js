import { shallowMount } from '@vue/test-utils'
import KitAvatar from '@components/Avatar/KitAvatar.vue'

describe('KitAvatar', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitAvatar)
    expect(component.exists()).toBe(true)
  })

  it('renders default SVG avatar when no image provided', () => {
    const component = shallowMount(KitAvatar)
    const svg = component.find('svg')
    expect(svg.exists()).toBe(true)
  })

  it('renders image when avatar prop is provided', () => {
    const avatarUrl = 'https://example.com/avatar.jpg'
    const component = shallowMount(KitAvatar, {
      propsData: { avatar: avatarUrl }
    })
    const img = component.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(avatarUrl)
  })

  it('shows SVG fallback when image fails to load', async () => {
    const avatarUrl = 'https://example.com/broken.jpg'
    const component = shallowMount(KitAvatar, {
      propsData: { avatar: avatarUrl }
    })
    
    const img = component.find('img')
    await img.trigger('error')
    await component.vm.$nextTick()
    
    const svg = component.find('svg')
    expect(svg.exists()).toBe(true)
  })

  it('applies default size medium', () => {
    const component = shallowMount(KitAvatar)
    const wrapper = component.find('.kit-avatar__wrapper')
    expect(wrapper.attributes('size')).toBe('medium')
  })

  it('applies xsmall size', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { size: 'xsmall' }
    })
    const wrapper = component.find('.kit-avatar__wrapper')
    expect(wrapper.attributes('size')).toBe('xsmall')
  })

  it('applies small size', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { size: 'small' }
    })
    const wrapper = component.find('.kit-avatar__wrapper')
    expect(wrapper.attributes('size')).toBe('small')
  })

  it('applies large size', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { size: 'large' }
    })
    const wrapper = component.find('.kit-avatar__wrapper')
    expect(wrapper.attributes('size')).toBe('large')
  })

  it('applies xlarge size', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { size: 'xlarge' }
    })
    const wrapper = component.find('.kit-avatar__wrapper')
    expect(wrapper.attributes('size')).toBe('xlarge')
  })

  it('applies xxlarge size', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { size: 'xxlarge' }
    })
    const wrapper = component.find('.kit-avatar__wrapper')
    expect(wrapper.attributes('size')).toBe('xxlarge')
  })

  it('renders as div by default', () => {
    const component = shallowMount(KitAvatar)
    const wrapper = component.find('.kit-avatar__wrapper')
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders as anchor when tag is "a"', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { tag: 'a', link: 'https://example.com' }
    })
    const wrapper = component.find('.kit-avatar__wrapper')
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('https://example.com')
    expect(wrapper.attributes('target')).toBe('_blank')
  })

  it('applies square attribute when square prop is true', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { square: true }
    })
    const wrapper = component.find('.kit-avatar__wrapper')
    expect(wrapper.attributes('square')).toBe('true')
  })

  it('applies round shape by default', () => {
    const component = shallowMount(KitAvatar)
    const wrapper = component.find('.kit-avatar__wrapper')
    expect(wrapper.attributes('square')).toBe('false')
  })

  it('applies custom z-index', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { zIndex: 100 }
    })
    const outer = component.find('.kit-avatar__outer')
    expect(outer.attributes('style')).toContain('z-index: 100')
  })

  it('applies custom outline color', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { outline: '#ff0000' }
    })
    const wrapper = component.find('.kit-avatar__wrapper')
    expect(wrapper.attributes('style')).toContain('background-color: rgb(255, 0, 0)')
  })

  it('renders approved status icon', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { status: 'approved' }
    })
    // The component should have status class
    expect(component.find('.kit-avatar__status').exists()).toBe(true)
  })

  it('renders declined status icon', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { status: 'declined' }
    })
    // The component should have status class
    expect(component.find('.kit-avatar__status').exists()).toBe(true)
  })

  it('renders online presence icon', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { presence: 'online' }
    })
    // The component should have presence class
    expect(component.find('.kit-avatar__presence').exists()).toBe(true)
  })

  it('renders busy presence icon', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { presence: 'busy' }
    })
    expect(component.find('.kit-avatar__presence').exists()).toBe(true)
  })

  it('renders offline presence icon', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { presence: 'offline' }
    })
    expect(component.find('.kit-avatar__presence').exists()).toBe(true)
  })

  it('renders focus presence icon', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { presence: 'focus' }
    })
    expect(component.find('.kit-avatar__presence').exists()).toBe(true)
  })

  it('handles case-insensitive status prop', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { status: 'APPROVED' }
    })
    // Should still render status icon with uppercase input
    expect(component.find('.kit-avatar__status').exists()).toBe(true)
  })

  it('handles case-insensitive presence prop', () => {
    const component = shallowMount(KitAvatar, {
      propsData: { presence: 'ONLINE' }
    })
    // Should still render presence icon with uppercase input
    expect(component.find('.kit-avatar__presence').exists()).toBe(true)
  })

  it('supports avatar-header slot', () => {
    const component = shallowMount(KitAvatar, {
      slots: { 'avatar-header': '<div class="header">Header</div>' }
    })
    expect(component.find('.header').exists()).toBe(true)
  })

  it('supports avatar-footer slot', () => {
    const component = shallowMount(KitAvatar, {
      slots: { 'avatar-footer': '<div class="footer">Footer</div>' }
    })
    expect(component.find('.footer').exists()).toBe(true)
  })
})
