import { shallowMount } from '@vue/test-utils'
import InfiniteScroll from '@components/common/InfiniteScroll.vue'
import KitSpinner from '@components/Spinner/KitSpinner.vue'

let observerCallback
const observeMock = jest.fn()
const disconnectMock = jest.fn()

global.IntersectionObserver = jest.fn().mockImplementation((callback) => {
  observerCallback = callback
  return {
    observe: observeMock,
    disconnect: disconnectMock,
    unobserve: jest.fn()
  }
})

describe('InfiniteScroll', () => {
  it('renders with default props', () => {
    const component = shallowMount(InfiniteScroll)
    expect(component.exists()).toBe(true)
  })

  it('renders with infinite-scroll-loader class', () => {
    const component = shallowMount(InfiniteScroll)
    expect(component.classes()).toContain('infinite-scroll-loader')
  })

  it('renders a td by default', () => {
    const component = shallowMount(InfiniteScroll)
    expect(component.element.tagName).toBe('TD')
  })

  it('renders the given tag', () => {
    const component = shallowMount(InfiniteScroll, { propsData: { tag: 'div' } })
    expect(component.element.tagName).toBe('DIV')
  })

  it('renders a KitSpinner', () => {
    const component = shallowMount(InfiniteScroll)
    expect(component.findComponent(KitSpinner).exists()).toBe(true)
    expect(component.findComponent(KitSpinner).props('size')).toBe('small')
  })

  it('creates an IntersectionObserver and observes the loader element on mount', () => {
    const component = shallowMount(InfiniteScroll, { attachTo: document.body })
    expect(global.IntersectionObserver).toHaveBeenCalled()
    expect(observeMock).toHaveBeenCalledWith(component.element)
    component.destroy()
  })

  it('disconnects the observer on unmount', () => {
    const component = shallowMount(InfiniteScroll)
    component.destroy()
    expect(disconnectMock).toHaveBeenCalled()
  })

  it('emits table-bottom-reached when the loader intersects', () => {
    const component = shallowMount(InfiniteScroll)
    observerCallback([{ isIntersecting: true }])
    expect(component.emitted('table-bottom-reached')).toBeTruthy()
    expect(component.emitted('table-bottom-reached')[0][0]).toEqual(expect.any(Function))
  })

  it('does not emit table-bottom-reached when the loader is not intersecting', () => {
    const component = shallowMount(InfiniteScroll)
    observerCallback([{ isIntersecting: false }])
    expect(component.emitted('table-bottom-reached')).toBeFalsy()
  })

  it('re-observes the loader when the provided callback is invoked', () => {
    const component = shallowMount(InfiniteScroll)
    observeMock.mockClear()
    disconnectMock.mockClear()

    observerCallback([{ isIntersecting: true }])
    const resumeObserving = component.emitted('table-bottom-reached')[0][0]
    resumeObserving()

    expect(disconnectMock).toHaveBeenCalled()
    expect(observeMock).toHaveBeenCalledWith(component.element)
  })
})
