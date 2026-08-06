import { mount } from '@vue/test-utils'
import KitSpotlightMask from '@components/Spotlight/KitSpotlightMask.vue'

const rectElement = (rect) => {
  const el = document.createElement('div')
  el.getBoundingClientRect = () => ({ x: 0, y: 0, width: 0, height: 0, ...rect })
  return el
}

beforeAll(() => {
  Object.defineProperty(window, 'innerWidth', { value: 1024, configurable: true })
})

describe('KitSpotlightMask', () => {
  it('does not render without elements', () => {
    const component = mount(KitSpotlightMask)
    expect(component.find('.kit-spotlight-mask').exists()).toBe(false)
  })

  it('does not render with an empty elements array', () => {
    const component = mount(KitSpotlightMask, {
      propsData: { elements: [] }
    })
    expect(component.find('.kit-spotlight-mask').exists()).toBe(false)
  })

  it('renders when elements are provided', () => {
    const component = mount(KitSpotlightMask, {
      propsData: { elements: [rectElement({ x: 100, y: 50, width: 200, height: 80 })] }
    })
    expect(component.find('.kit-spotlight-mask').exists()).toBe(true)
  })

  it('renders slot content in the text area', () => {
    const component = mount(KitSpotlightMask, {
      propsData: { elements: [rectElement({ x: 100, y: 50, width: 200, height: 80 })] },
      slots: { default: '<div class="mask-content">Hint</div>' }
    })
    expect(component.find('.kit-spotlight-mask__text .mask-content').exists()).toBe(true)
  })

  it('computes the top/right/left/bottom/border masks around the target rectangle', () => {
    const component = mount(KitSpotlightMask, {
      propsData: {
        elements: [rectElement({ x: 100, y: 50, width: 200, height: 80 })],
        margin: [10, 10]
      }
    })

    expect(component.find('.kit-spotlight-mask__top').element.style.height).toBe('40px')
    expect(component.find('.kit-spotlight-mask__right').element.style.top).toBe('40px')
    expect(component.find('.kit-spotlight-mask__right').element.style.width).toBe('714px')
    expect(component.find('.kit-spotlight-mask__left').element.style.top).toBe('40px')
    expect(component.find('.kit-spotlight-mask__left').element.style.width).toBe('90px')
    expect(component.find('.kit-spotlight-mask__bottom').element.style.top).toBe('140px')
    expect(component.find('.kit-spotlight-mask__border').element.style.top).toBe('37px')
    expect(component.find('.kit-spotlight-mask__border').element.style.left).toBe('87px')
    expect(component.find('.kit-spotlight-mask__border').element.style.width).toBe('220px')
    expect(component.find('.kit-spotlight-mask__border').element.style.height).toBe('100px')
  })

  it('positions the text box next to the target rectangle using the default textWidth', () => {
    const component = mount(KitSpotlightMask, {
      propsData: {
        elements: [rectElement({ x: 100, y: 50, width: 200, height: 80 })],
        margin: [10, 10]
      }
    })
    const text = component.find('.kit-spotlight-mask__text').element
    expect(text.style.width).toBe('300px')
    expect(text.style.left).toBe('320px')
    expect(text.style.top).toBe('37px')
  })

  it('respects a custom textWidth', () => {
    const component = mount(KitSpotlightMask, {
      propsData: {
        elements: [rectElement({ x: 100, y: 50, width: 200, height: 80 })],
        textWidth: 400
      }
    })
    expect(component.find('.kit-spotlight-mask__text').element.style.width).toBe('400px')
  })

  it('prevents clicks anywhere within the mask overlay (blocks the underlying page)', () => {
    const component = mount(KitSpotlightMask, {
      propsData: { elements: [rectElement({ x: 100, y: 50, width: 200, height: 80 })] },
      slots: { default: '<div class="mask-content">Hint</div>' },
      attachTo: document.body
    })
    const event = new MouseEvent('click', { bubbles: true, cancelable: true })
    component.find('.mask-content').element.dispatchEvent(event)
    expect(event.defaultPrevented).toBe(true)
    component.unmount()
  })

  it('prevents clicks outside of the mask via the document-level guard', () => {
    const component = mount(KitSpotlightMask, {
      propsData: { elements: [rectElement({ x: 100, y: 50, width: 200, height: 80 })] },
      attachTo: document.body
    })
    const event = new MouseEvent('click', { bubbles: true, cancelable: true })
    document.body.dispatchEvent(event)
    expect(event.defaultPrevented).toBe(true)
    component.unmount()
  })
})
