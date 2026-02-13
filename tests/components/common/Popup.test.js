import { shallowMount } from '@vue/test-utils'
import Popup from '@components/common/Popup.vue'
import Popper from '@components/Popper/Popper.vue'

const target = document.createElement('div')

describe('Popup', () => {
  it('renders with default props', () => {
    const component = shallowMount(Popup)
    expect(component.exists()).toBe(true)
  })

  it('does not render a Popper when closed', () => {
    const component = shallowMount(Popup, {
      propsData: { isOpen: false, targetElement: target }
    })
    expect(component.findComponent(Popper).exists()).toBe(false)
  })

  it('does not render a Popper without a targetElement', () => {
    const component = shallowMount(Popup, {
      propsData: { isOpen: true }
    })
    expect(component.findComponent(Popper).exists()).toBe(false)
  })

  it('renders a Popper when open with a targetElement', () => {
    const component = shallowMount(Popup, {
      propsData: { isOpen: true, targetElement: target }
    })
    expect(component.findComponent(Popper).exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = shallowMount(Popup, {
      propsData: { isOpen: true, targetElement: target },
      slots: { default: '<div class="popup-content">Content</div>' }
    })
    expect(component.find('.popup-content').exists()).toBe(true)
  })

  it('renders with kit-popup class and tooltip role', () => {
    const component = shallowMount(Popup, {
      propsData: { isOpen: true, targetElement: target }
    })
    const popup = component.find('.kit-popup')
    expect(popup.exists()).toBe(true)
    expect(popup.attributes('role')).toBe('tooltip')
  })

  it('renders an arrow by default', () => {
    const component = shallowMount(Popup, {
      propsData: { isOpen: true, targetElement: target }
    })
    expect(component.find('.kit-popup-arrow').exists()).toBe(true)
  })

  it('hides the arrow when withoutArrow is true', () => {
    const component = shallowMount(Popup, {
      propsData: { isOpen: true, targetElement: target, withoutArrow: true }
    })
    expect(component.find('.kit-popup-arrow').exists()).toBe(false)
  })

  it('does not set light shadows by default', () => {
    const component = shallowMount(Popup, {
      propsData: { isOpen: true, targetElement: target }
    })
    expect(component.find('.kit-popup').attributes('data-light-shadows')).toBeUndefined()
  })

  it('sets light shadows when withLightShadows is true', () => {
    const component = shallowMount(Popup, {
      propsData: { isOpen: true, targetElement: target, withLightShadows: true }
    })
    expect(component.find('.kit-popup').attributes('data-light-shadows')).toBe('true')
  })

  it('uses default placement bottom-end', () => {
    const component = shallowMount(Popup, {
      propsData: { isOpen: true, targetElement: target }
    })
    expect(component.findComponent(Popper).props('placement')).toBe('bottom-end')
  })

  it('passes custom placement to Popper', () => {
    const component = shallowMount(Popup, {
      propsData: { isOpen: true, targetElement: target, placement: 'top-start' }
    })
    expect(component.findComponent(Popper).props('placement')).toBe('top-start')
  })

  it('passes the target element to Popper', () => {
    const component = shallowMount(Popup, {
      propsData: { isOpen: true, targetElement: target }
    })
    expect(component.findComponent(Popper).props('targetElement')).toBe(target)
  })

  it('passes positionFixed to Popper', () => {
    const component = shallowMount(Popup, {
      propsData: { isOpen: true, targetElement: target, positionFixed: true }
    })
    expect(component.findComponent(Popper).props('positionFixed')).toBe(true)
  })
})
