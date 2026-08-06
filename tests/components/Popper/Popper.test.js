import { mount } from '@vue/test-utils'
import Popper from '@components/Popper/Popper.vue'
import { autoUpdate, computePosition } from '@floating-ui/dom'

jest.mock('@floating-ui/dom', () => ({
  computePosition: jest.fn(),
  autoUpdate: jest.fn(),
  flip: jest.fn(() => 'flip'),
  shift: jest.fn(() => 'shift'),
  limitShift: jest.fn(() => 'limitShift'),
  offset: jest.fn(() => 'offset'),
  arrow: jest.fn(() => 'arrow'),
  autoPlacement: jest.fn(() => 'autoPlacement')
}))

const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0))

const target = document.createElement('div')

beforeEach(() => {
  computePosition.mockResolvedValue({ x: 10, y: 20, middlewareData: {}, placement: 'bottom' })
  autoUpdate.mockImplementation((targetElement, floatingElement, update) => {
    update()
    return jest.fn()
  })
})

describe('Popper', () => {
  it('renders the default slot content without an extra wrapper element', async () => {
    const component = mount(Popper, {
      propsData: { targetElement: target },
      slots: { default: '<div class="popper-content">Content</div>' }
    })
    await flushPromises()
    expect(component.classes()).toContain('popper-content')
    expect(component.text()).toBe('Content')
  })

  it('uses default props', () => {
    const component = mount(Popper, {
      propsData: { targetElement: target },
      slots: { default: '<div class="popper-content"></div>' }
    })
    expect(component.vm.$props.placement).toBe('bottom-end')
    expect(component.vm.$props.offset).toEqual([0, 5])
    expect(component.vm.$props.transitionDelay).toBe(0)
    expect(component.vm.$props.boundariesElement).toBe('viewport')
    expect(component.vm.$props.positionFixed).toBe(false)
  })

  it('applies the computed position to the element style', async () => {
    const component = mount(Popper, {
      propsData: { targetElement: target },
      slots: { default: '<div class="popper-content"></div>' }
    })
    await flushPromises()
    expect(component.element.style.left).toBe('10px')
    expect(component.element.style.top).toBe('20px')
  })

  it('computes the position against the target element with the given placement', async () => {
    mount(Popper, {
      propsData: { targetElement: target, placement: 'top' },
      slots: { default: '<div class="popper-content"></div>' }
    })
    await flushPromises()
    expect(computePosition).toHaveBeenCalledWith(target, expect.any(HTMLElement), expect.objectContaining({
      placement: 'top',
      strategy: 'absolute'
    }))
  })

  it('resolves placement to undefined for "auto", letting the autoPlacement middleware decide', async () => {
    mount(Popper, {
      propsData: { targetElement: target, placement: 'auto' },
      slots: { default: '<div class="popper-content"></div>' }
    })
    await flushPromises()
    expect(computePosition).toHaveBeenCalledWith(target, expect.any(HTMLElement), expect.objectContaining({
      placement: undefined
    }))
  })

  it('uses a fixed strategy when positionFixed is true', async () => {
    mount(Popper, {
      propsData: { targetElement: target, positionFixed: true },
      slots: { default: '<div class="popper-content"></div>' }
    })
    await flushPromises()
    expect(computePosition).toHaveBeenCalledWith(target, expect.any(HTMLElement), expect.objectContaining({
      strategy: 'fixed'
    }))
  })

  it('uses an absolute strategy by default', async () => {
    mount(Popper, {
      propsData: { targetElement: target },
      slots: { default: '<div class="popper-content"></div>' }
    })
    await flushPromises()
    expect(computePosition).toHaveBeenCalledWith(target, expect.any(HTMLElement), expect.objectContaining({
      strategy: 'absolute'
    }))
  })

  it('positions the arrow element when the middleware returns arrow data', async () => {
    computePosition.mockResolvedValue({
      x: 10,
      y: 20,
      middlewareData: { arrow: { x: 5, y: null } },
      placement: 'top-start'
    })
    const component = mount(Popper, {
      propsData: { targetElement: target },
      slots: { default: '<div class="popper-content"><div class="arrow" data-popper-arrow></div></div>' }
    })
    await flushPromises()
    const arrowElement = component.find('.arrow').element
    expect(arrowElement.style.left).toBe('5px')
    expect(arrowElement.style.top).toBe('')
  })

  it('does not fail when there is no arrow element in the slot', async () => {
    computePosition.mockResolvedValue({
      x: 10,
      y: 20,
      middlewareData: { arrow: { x: 5, y: 5 } },
      placement: 'bottom'
    })
    const component = mount(Popper, {
      propsData: { targetElement: target },
      slots: { default: '<div class="popper-content"></div>' }
    })
    await flushPromises()
    expect(component.exists()).toBe(true)
  })
})
