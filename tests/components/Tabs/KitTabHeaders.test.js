import { shallowMount } from '@vue/test-utils'
import KitTabHeaders from '@components/Tabs/KitTabHeaders.vue'

const mountWithState = (options = {}) => shallowMount(KitTabHeaders, {
  provide: { state: {} },
  ...options
})

describe('KitTabHeaders', () => {
  it('renders with default props', () => {
    const component = mountWithState()
    expect(component.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = mountWithState({
      slots: { default: '<button class="header-item">Tab</button>' }
    })
    expect(component.find('.header-item').exists()).toBe(true)
  })

  it('renders as div with kit-tab-headers class', () => {
    const component = mountWithState()
    expect(component.classes()).toContain('kit-tab-headers')
  })

  it('is not reorderable by default', () => {
    const component = mountWithState()
    expect(component.vm.$props.reorderable).toBe(false)
  })

  it('accepts reorderable prop', () => {
    const component = mountWithState({
      propsData: { reorderable: true }
    })
    expect(component.vm.$props.reorderable).toBe(true)
  })

  it('sets reorderable on injected state', () => {
    const state = {}
    mountWithState({
      propsData: { reorderable: true },
      provide: { state }
    })
    expect(state.reorderable).toBe(true)
  })

  it('accepts reorderableIdsList prop', () => {
    const component = mountWithState({
      propsData: { reorderableIdsList: ['tab1', 'tab2'] }
    })
    expect(component.vm.$props.reorderableIdsList).toEqual(['tab1', 'tab2'])
  })
})
