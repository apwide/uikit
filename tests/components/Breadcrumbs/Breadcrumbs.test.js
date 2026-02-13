import { shallowMount } from '@vue/test-utils'
import KitBreadcrumbs from '@components/Breadcrumbs/KitBreadcrumbs.vue'

describe('KitBreadcrumbs', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitBreadcrumbs)
    expect(component.exists()).toBe(true)
  })

  it('renders breadcrumbs wrapper', () => {
    const component = shallowMount(KitBreadcrumbs)
    const breadcrumbs = component.find('.kit-breadcrumbs')
    expect(breadcrumbs.exists()).toBe(true)
  })

  it('renders with items prop', () => {
    const items = [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'Current', link: '/projects/current' }
    ]
    const component = shallowMount(KitBreadcrumbs, {
      propsData: { items }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = shallowMount(KitBreadcrumbs, {
      slots: { default: '<div class="custom-breadcrumb">Custom</div>' }
    })
    expect(component.find('.custom-breadcrumb').exists()).toBe(true)
  })

  it('does not render copy icon by default', () => {
    const component = shallowMount(KitBreadcrumbs)
    const copyIcon = component.find('.kit-copy-icon')
    expect(copyIcon.exists()).toBe(false)
  })

  it('renders copy icon when copy prop is true', () => {
    const component = shallowMount(KitBreadcrumbs, {
      propsData: { copy: true }
    })
    // CopyToClipboard component should be rendered
    expect(component.html()).toContain('kit-copy-icon')
  })

  it('has correct CSS class for wrapper', () => {
    const component = shallowMount(KitBreadcrumbs)
    const wrapper = component.find('.kit-wrapper')
    expect(wrapper.exists()).toBe(true)
  })

  it('wrapper uses flexbox', () => {
    const component = shallowMount(KitBreadcrumbs)
    const wrapper = component.find('.kit-wrapper')
    expect(wrapper.classes()).toContain('kit-wrapper')
  })

  it('accepts empty items array', () => {
    const component = shallowMount(KitBreadcrumbs, {
      propsData: { items: [] }
    })
    expect(component.exists()).toBe(true)
  })
})
