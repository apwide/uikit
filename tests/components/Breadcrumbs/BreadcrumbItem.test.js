import { shallowMount } from '@vue/test-utils'
import KitBreadcrumbItem from '@components/Breadcrumbs/KitBreadcrumbItem.vue'

describe('KitBreadcrumbItem', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitBreadcrumbItem)
    expect(component.exists()).toBe(true)
  })

  it('renders breadcrumb element', () => {
    const component = shallowMount(KitBreadcrumbItem)
    const breadcrumb = component.find('.kit-breadcrumb')
    expect(breadcrumb.exists()).toBe(true)
  })

  it('renders anchor tag with default link', () => {
    const component = shallowMount(KitBreadcrumbItem)
    const link = component.find('a')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('#')
  })

  it('renders anchor tag with custom link', () => {
    const component = shallowMount(KitBreadcrumbItem, {
      propsData: { link: '/home' }
    })
    const link = component.find('a')
    expect(link.attributes('href')).toBe('/home')
  })

  it('displays text prop', () => {
    const component = shallowMount(KitBreadcrumbItem, {
      propsData: { text: 'Home' }
    })
    expect(component.text()).toContain('Home')
  })

  it('uses default target _self', () => {
    const component = shallowMount(KitBreadcrumbItem)
    const link = component.find('a')
    expect(link.attributes('target')).toBe('_self')
  })

  it('applies custom target', () => {
    const component = shallowMount(KitBreadcrumbItem, {
      propsData: { target: '_blank' }
    })
    const link = component.find('a')
    expect(link.attributes('target')).toBe('_blank')
  })

  it('renders icon slot', () => {
    const component = shallowMount(KitBreadcrumbItem, {
      slots: { icon: '<span class="test-icon">Icon</span>' }
    })
    expect(component.find('.test-icon').exists()).toBe(true)
  })

  it('renders link slot', () => {
    const component = shallowMount(KitBreadcrumbItem, {
      slots: { link: '<a class="custom-link" href="/custom">Custom Link</a>' }
    })
    expect(component.find('.custom-link').exists()).toBe(true)
  })

  it('applies with-icon attribute when icon slot is used', () => {
    const component = shallowMount(KitBreadcrumbItem, {
      slots: { icon: '<span>Icon</span>' }
    })
    const breadcrumb = component.find('.kit-breadcrumb')
    // The with-icon attribute is set based on $slots.icon existence
    expect(breadcrumb.attributes('with-icon')).toBeDefined()
  })

  it('does not apply with-icon attribute when no icon', () => {
    const component = shallowMount(KitBreadcrumbItem)
    const breadcrumb = component.find('.kit-breadcrumb')
    expect(breadcrumb.attributes('with-icon')).toBeUndefined()
  })

  it('has kit-item span wrapper', () => {
    const component = shallowMount(KitBreadcrumbItem)
    const item = component.find('.kit-item')
    expect(item.exists()).toBe(true)
  })
})
