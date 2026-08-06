import { shallowMount } from '@vue/test-utils'
import KitTabPanels from '@components/Tabs/KitTabPanels.vue'

const mountWithState = (state, options = {}) => shallowMount(KitTabPanels, {
  ...options,
  global: {
    provide: { state },
    ...options.global
  }
})

describe('KitTabPanels', () => {
  it('renders with provided state', () => {
    const component = mountWithState({ activeTab: 'tab1' })
    expect(component.exists()).toBe(true)
  })

  it('renders as div with kit-tab-panels class', () => {
    const component = mountWithState({ activeTab: 'tab1' })
    expect(component.classes()).toContain('kit-tab-panels')
  })

  it('renders slot content', () => {
    const component = mountWithState({ activeTab: 'tab1' }, {
      slots: { default: '<div class="panel">Panel content</div>' }
    })
    expect(component.find('.panel').exists()).toBe(true)
  })

  it('has an inherited maxHeight style by default', () => {
    const component = mountWithState({ activeTab: 'tab1' })
    expect(component.element.style.maxHeight).toBe('inherit')
  })
})
