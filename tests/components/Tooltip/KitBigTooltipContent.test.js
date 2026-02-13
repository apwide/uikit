import { shallowMount } from '@vue/test-utils'
import KitBigTooltipContent from '@components/Tooltip/KitBigTooltipContent.vue'
import Popup from '@components/common/Popup.vue'

const target = document.createElement('div')

describe('KitBigTooltipContent', () => {
  it('renders with required targetElement prop', () => {
    const component = shallowMount(KitBigTooltipContent, {
      propsData: { targetElement: target }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders a Popup with the target element', () => {
    const component = shallowMount(KitBigTooltipContent, {
      propsData: { targetElement: target }
    })
    expect(component.findComponent(Popup).props('targetElement')).toBe(target)
  })

  it('uses default placement right', () => {
    const component = shallowMount(KitBigTooltipContent, {
      propsData: { targetElement: target }
    })
    expect(component.findComponent(Popup).props('placement')).toBe('right')
  })

  it('accepts custom placement', () => {
    const component = shallowMount(KitBigTooltipContent, {
      propsData: { targetElement: target, placement: 'bottom' }
    })
    expect(component.findComponent(Popup).props('placement')).toBe('bottom')
  })

  it('marks the Popup as open', () => {
    const component = shallowMount(KitBigTooltipContent, {
      propsData: { targetElement: target }
    })
    expect(component.findComponent(Popup).props('isOpen')).toBe(true)
  })

  it('passes a transition delay of 300 to Popup', () => {
    const component = shallowMount(KitBigTooltipContent, {
      propsData: { targetElement: target }
    })
    expect(component.findComponent(Popup).props('transitionDelay')).toBe(300)
  })
})
