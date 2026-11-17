import { shallowMount } from '@vue/test-utils'
import KitBigTooltip from '@components/Tooltip/KitBigTooltip.vue'
import KitBigTooltipContent from '@components/Tooltip/KitBigTooltipContent.vue'

describe('KitBigTooltip', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitBigTooltip)
    expect(component.exists()).toBe(true)
  })

  it('renders with kit-big-tooltip class', () => {
    const component = shallowMount(KitBigTooltip)
    expect(component.classes()).toContain('kit-big-tooltip')
  })

  it('renders trigger slot content', () => {
    const component = shallowMount(KitBigTooltip, {
      slots: { trigger: '<button>Hover me</button>' }
    })
    expect(component.text()).toContain('Hover me')
  })

  it('does not show tooltip content by default', () => {
    const component = shallowMount(KitBigTooltip)
    expect(component.findComponent(KitBigTooltipContent).exists()).toBe(false)
  })

  it('shows tooltip content on trigger mouseenter', async () => {
    const component = shallowMount(KitBigTooltip, {
      slots: { trigger: '<button>Hover me</button>' }
    })
    await component.find('span').trigger('mouseenter')
    expect(component.findComponent(KitBigTooltipContent).exists()).toBe(true)
  })

  it('does not show tooltip content on mouseenter when disabled', async () => {
    const component = shallowMount(KitBigTooltip, {
      propsData: { disabled: true },
      slots: { trigger: '<button>Hover me</button>' }
    })
    await component.find('span').trigger('mouseenter')
    expect(component.findComponent(KitBigTooltipContent).exists()).toBe(false)
  })

  it('uses default placement right', () => {
    const component = shallowMount(KitBigTooltip)
    expect(component.vm.$props.placement).toBe('right')
  })

  it('accepts custom placement', () => {
    const component = shallowMount(KitBigTooltip, {
      propsData: { placement: 'left' }
    })
    expect(component.vm.$props.placement).toBe('left')
  })

  // WCAG 1.4.13 (accessibility audit finding F-019)
  it('shows on keyboard focus and hides when focus leaves', async () => {
    const component = shallowMount(KitBigTooltip, { slots: { trigger: '<button>Chip</button>' } })
    await component.find('button').trigger('focusin')
    expect(component.findComponent(KitBigTooltipContent).exists()).toBe(true)
    await component.find('span').trigger('focusout', { relatedTarget: null })
    expect(component.findComponent(KitBigTooltipContent).exists()).toBe(false)
  })

  it('stays open while focus moves inside the trigger', async () => {
    const component = shallowMount(KitBigTooltip, {
      slots: { trigger: '<button class="a">A</button><button class="b">B</button>' }
    })
    await component.find('.a').trigger('focusin')
    await component.find('span').trigger('focusout', { relatedTarget: component.find('.b').element })
    expect(component.findComponent(KitBigTooltipContent).exists()).toBe(true)
  })

  it('hides on Escape', async () => {
    const component = shallowMount(KitBigTooltip, { slots: { trigger: '<button>Chip</button>' } })
    await component.find('span').trigger('mouseenter')
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await component.vm.$nextTick()
    expect(component.findComponent(KitBigTooltipContent).exists()).toBe(false)
    // the pointer leaving the trigger afterwards must not throw
    await component.find('span').trigger('mouseleave')
    component.unmount()
  })

  it('passes placement to KitBigTooltipContent', async () => {
    const component = shallowMount(KitBigTooltip, {
      propsData: { placement: 'left' },
      slots: { trigger: '<button>Hover me</button>' }
    })
    await component.find('span').trigger('mouseenter')
    expect(component.findComponent(KitBigTooltipContent).props('placement')).toBe('left')
  })
})
