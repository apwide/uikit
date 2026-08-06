import { shallowMount } from '@vue/test-utils'
import TooltipContent from '@components/Tooltip/TooltipContent.vue'
import Popper from '@components/Popper/Popper.vue'

const target = document.createElement('div')

describe('TooltipContent', () => {
  it('renders with required props', () => {
    const component = shallowMount(TooltipContent, {
      propsData: { label: 'Tooltip text', targetElement: target }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders a Popper with the target element', () => {
    const component = shallowMount(TooltipContent, {
      propsData: { label: 'Tooltip text', targetElement: target }
    })
    expect(component.findComponent(Popper).props('targetElement')).toBe(target)
  })

  it('uses default placement bottom', () => {
    const component = shallowMount(TooltipContent, {
      propsData: { label: 'Tooltip text', targetElement: target }
    })
    expect(component.findComponent(Popper).props('placement')).toBe('bottom')
  })

  it('accepts custom placement', () => {
    const component = shallowMount(TooltipContent, {
      propsData: { label: 'Tooltip text', targetElement: target, placement: 'left' }
    })
    expect(component.findComponent(Popper).props('placement')).toBe('left')
  })

  it('passes a transition delay of 300 to Popper', () => {
    const component = shallowMount(TooltipContent, {
      propsData: { label: 'Tooltip text', targetElement: target }
    })
    expect(component.findComponent(Popper).props('transitionDelay')).toBe(300)
  })
})
