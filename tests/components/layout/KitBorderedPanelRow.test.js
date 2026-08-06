import { shallowMount } from '@vue/test-utils'
import KitBorderedPanelRow from '@components/layout/BorderedPanel/KitBorderedPanelRow.vue'

describe('KitBorderedPanelRow', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitBorderedPanelRow)
    expect(component.exists()).toBe(true)
  })

  it('renders with kit-bordered-panel-row class', () => {
    const component = shallowMount(KitBorderedPanelRow)
    expect(component.classes()).toContain('kit-bordered-panel-row')
  })

  it('renders the label prop as the default key content', () => {
    const component = shallowMount(KitBorderedPanelRow, {
      propsData: { label: 'Name' }
    })
    expect(component.find('.kit-bordered-panel-row__default-label').text()).toBe('Name')
  })

  it('renders a custom label slot instead of the default label', () => {
    const component = shallowMount(KitBorderedPanelRow, {
      propsData: { label: 'Name' },
      scopedSlots: { label: '<span class="custom-label">Custom</span>' }
    })
    expect(component.find('.custom-label').exists()).toBe(true)
    expect(component.find('.kit-bordered-panel-row__default-label').exists()).toBe(false)
  })

  it('renders the value prop as the default value content', () => {
    const component = shallowMount(KitBorderedPanelRow, {
      propsData: { value: 'John Doe' }
    })
    expect(component.find('.kit-bordered-panel-row__value').text()).toBe('John Doe')
  })

  it('renders custom default slot content instead of the value prop', () => {
    const component = shallowMount(KitBorderedPanelRow, {
      propsData: { value: 'John Doe' },
      slots: { default: '<span class="custom-value">Custom</span>' }
    })
    expect(component.find('.custom-value').exists()).toBe(true)
    expect(component.find('.kit-bordered-panel-row__value').text()).toBe('Custom')
  })

  it('hides the after-label slot content by default', () => {
    const component = shallowMount(KitBorderedPanelRow, {
      scopedSlots: { 'after-label': '<span class="after-label">After</span>' }
    })
    const wrapper = component.find('.after-label').element.parentElement
    expect(wrapper.style.display).toBe('none')
  })

  it('shows the after-label slot content on mouseenter', async () => {
    const component = shallowMount(KitBorderedPanelRow, {
      scopedSlots: { 'after-label': '<span class="after-label">After</span>' }
    })
    await component.find('.kit-bordered-panel-row__key').trigger('mouseenter')
    const wrapper = component.find('.after-label').element.parentElement
    expect(wrapper.style.display).not.toBe('none')
  })

  it('hides the after-label slot content again on mouseleave', async () => {
    const component = shallowMount(KitBorderedPanelRow, {
      scopedSlots: { 'after-label': '<span class="after-label">After</span>' }
    })
    await component.find('.kit-bordered-panel-row__key').trigger('mouseenter')
    await component.find('.kit-bordered-panel-row__key').trigger('mouseleave')
    const wrapper = component.find('.after-label').element.parentElement
    expect(wrapper.style.display).toBe('none')
  })

  it('always shows the after-label slot content when forceShowAfter is true', () => {
    const component = shallowMount(KitBorderedPanelRow, {
      propsData: { forceShowAfter: true },
      scopedSlots: { 'after-label': '<span class="after-label">After</span>' }
    })
    const wrapper = component.find('.after-label').element.parentElement
    expect(wrapper.style.display).not.toBe('none')
  })
})
