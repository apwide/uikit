import { shallowMount } from '@vue/test-utils'
import Tooltip from '@components/Tooltip/Tooltip.vue'
import TooltipContent from '@components/Tooltip/TooltipContent.vue'

describe('Tooltip', () => {
  it('renders with required label prop', () => {
    const component = shallowMount(Tooltip, {
      propsData: { label: 'Tooltip text' }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders target element', () => {
    const component = shallowMount(Tooltip, {
      propsData: { label: 'Tooltip text' },
      slots: { default: '<button>Hover me</button>' }
    })
    const target = component.find('.target')
    expect(target.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = shallowMount(Tooltip, {
      propsData: { label: 'Tooltip text' },
      slots: { default: '<button>Hover me</button>' }
    })
    expect(component.text()).toContain('Hover me')
  })

  it('does not show tooltip content by default', () => {
    const component = shallowMount(Tooltip, {
      propsData: { label: 'Tooltip text' }
    })
    // TooltipContent should not be rendered initially
    expect(component.findComponent({ name: 'TooltipContent' }).exists()).toBe(false)
  })

  it('shows tooltip on mouse enter', async () => {
    const component = shallowMount(Tooltip, {
      propsData: { label: 'Tooltip text' }
    })
    const target = component.find('.target')
    expect(component.findComponent({ name: 'TooltipContent' }).exists()).toBe(false)
    await target.trigger('mouseenter')
    await component.vm.$nextTick()
    expect(component.findComponent(TooltipContent).exists()).toBe(true)
    expect(component.html()).toContain('label="Tooltip text"')
  })

  it('hides tooltip on mouse leave', async () => {
    const component = shallowMount(Tooltip, {
      propsData: { label: 'Tooltip text' }
    })
    const target = component.find('.target')
    await target.trigger('mouseenter')
    await component.vm.$nextTick()
    await target.trigger('mouseleave')
    await component.vm.$nextTick()
    // TooltipContent should be removed after mouseleave
    expect(component.findComponent({ name: 'TooltipContent' }).exists()).toBe(false)
  })

  it('does not show tooltip when disabled', async () => {
    const component = shallowMount(Tooltip, {
      propsData: { label: 'Tooltip text', disabled: true }
    })
    const target = component.find('.target')
    await target.trigger('mouseenter')
    await component.vm.$nextTick()
    // TooltipContent should not render when disabled
    expect(component.findComponent({ name: 'TooltipContent' }).exists()).toBe(false)
  })

  it('uses default placement top', () => {
    const component = shallowMount(Tooltip, {
      propsData: { label: 'Tooltip text' }
    })
    expect(component.vm.$props.placement).toBe('top')
  })

  it('accepts custom placement', () => {
    const component = shallowMount(Tooltip, {
      propsData: { label: 'Tooltip text', placement: 'bottom' }
    })
    expect(component.vm.$props.placement).toBe('bottom')
  })

  it('has correct CSS class', () => {
    const component = shallowMount(Tooltip, {
      propsData: { label: 'Tooltip text' }
    })
    expect(component.classes()).toContain('kit-tooltip')
  })
})
