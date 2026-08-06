import { shallowMount } from '@vue/test-utils'
import KitBorderedPanel from '@components/layout/BorderedPanel/KitBorderedPanel.vue'

describe('KitBorderedPanel', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitBorderedPanel)
    expect(component.exists()).toBe(true)
  })

  it('renders as an aside with the kit-bordered-panel class', () => {
    const component = shallowMount(KitBorderedPanel)
    expect(component.element.tagName).toBe('ASIDE')
    expect(component.classes()).toContain('kit-bordered-panel')
  })

  it('renders the header by default', () => {
    const component = shallowMount(KitBorderedPanel)
    expect(component.find('.kit-bordered-panel__header').exists()).toBe(true)
  })

  it('hides the header when noHeader is true', () => {
    const component = shallowMount(KitBorderedPanel, {
      propsData: { noHeader: true }
    })
    expect(component.find('.kit-bordered-panel__header').exists()).toBe(false)
  })

  it('renders the title prop as the default header content', () => {
    const component = shallowMount(KitBorderedPanel, {
      propsData: { title: 'Panel Title' }
    })
    expect(component.find('.kit-bordered-panel__title').text()).toBe('Panel Title')
  })

  it('sets the headerFloatingTitle as the title attribute', () => {
    const component = shallowMount(KitBorderedPanel, {
      propsData: { title: 'Panel Title', headerFloatingTitle: 'Full title on hover' }
    })
    expect(component.find('.kit-bordered-panel__title').attributes('title')).toBe('Full title on hover')
  })

  it('renders a custom title slot instead of the default title', () => {
    const component = shallowMount(KitBorderedPanel, {
      propsData: { title: 'Panel Title' },
      scopedSlots: { title: '<span class="custom-title">Custom</span>' }
    })
    expect(component.find('.custom-title').exists()).toBe(true)
    expect(component.find('.kit-bordered-panel__title').exists()).toBe(false)
  })

  it('does not render header actions by default', () => {
    const component = shallowMount(KitBorderedPanel)
    expect(component.find('.kit-bordered-panel__header-actions').exists()).toBe(false)
  })

  it('renders header actions when the actions slot is provided', () => {
    const component = shallowMount(KitBorderedPanel, {
      scopedSlots: { actions: '<button class="my-action">Action</button>' }
    })
    expect(component.find('.kit-bordered-panel__header-actions .my-action').exists()).toBe(true)
  })

  it('does not render the body when there is no default slot content', () => {
    const component = shallowMount(KitBorderedPanel)
    expect(component.find('.kit-bordered-panel__body').exists()).toBe(false)
  })

  it('renders the body with the default slot content when provided', () => {
    const component = shallowMount(KitBorderedPanel, {
      slots: { default: '<div class="panel-content">Content</div>' }
    })
    const body = component.find('.kit-bordered-panel__body')
    expect(body.exists()).toBe(true)
    expect(body.find('.panel-content').exists()).toBe(true)
  })
})
