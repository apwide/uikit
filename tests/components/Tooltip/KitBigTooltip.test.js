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

  it('passes placement to KitBigTooltipContent', async () => {
    const component = shallowMount(KitBigTooltip, {
      propsData: { placement: 'left' },
      slots: { trigger: '<button>Hover me</button>' }
    })
    await component.find('span').trigger('mouseenter')
    expect(component.findComponent(KitBigTooltipContent).props('placement')).toBe('left')
  })
})
