import { shallowMount } from '@vue/test-utils'
import ImageRenderer from '@components/field-renderers/ImageRenderer.vue'

describe('ImageRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(ImageRenderer)
    expect(component.exists()).toBe(true)
  })

  it('renders a placeholder when no url is provided', () => {
    const component = shallowMount(ImageRenderer)
    expect(component.find('.placeholder').exists()).toBe(true)
    expect(component.find('img.image').exists()).toBe(false)
  })

  it('renders the image when a url is provided', () => {
    const component = shallowMount(ImageRenderer, { propsData: { url: '/img/photo.png' } })
    const img = component.find('img.image')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/img/photo.png')
    expect(component.find('.placeholder').exists()).toBe(false)
  })

  it('applies default height and width of 24', () => {
    const component = shallowMount(ImageRenderer, { propsData: { url: '/img/photo.png' } })
    const img = component.find('img.image')
    expect(img.attributes('height')).toBe('24')
    expect(img.attributes('width')).toBe('24')
  })

  it('applies custom height and width', () => {
    const component = shallowMount(ImageRenderer, {
      propsData: { url: '/img/photo.png', height: 48, width: 64 }
    })
    const img = component.find('img.image')
    expect(img.attributes('height')).toBe('48')
    expect(img.attributes('width')).toBe('64')
  })

  it('sets the loading attribute from isLoading', () => {
    const component = shallowMount(ImageRenderer, { propsData: { isLoading: true } })
    expect(component.attributes('loading')).toBe('true')
  })

  it('does not render actions by default', () => {
    const component = shallowMount(ImageRenderer, { propsData: { url: '/img/photo.png' } })
    expect(component.find('.actions').exists()).toBe(false)
  })

  it('renders actions when showActions is true and a url is set', () => {
    const component = shallowMount(ImageRenderer, {
      propsData: { url: '/img/photo.png', showActions: true }
    })
    expect(component.find('.actions').exists()).toBe(true)
  })

  it('renders the actions slot content', () => {
    const component = shallowMount(ImageRenderer, {
      propsData: { url: '/img/photo.png', showActions: true },
      scopedSlots: { actions: '<button class="my-action">Action</button>' }
    })
    expect(component.find('.my-action').exists()).toBe(true)
  })
})
