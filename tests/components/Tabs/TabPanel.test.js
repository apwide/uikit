import { shallowMount } from '@vue/test-utils'
import KitTabPanel from '@components/Tabs/KitTabPanel.vue'

describe('KitTabPanel', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitTabPanel, {
      global: {
        provide: { state: { activeTab: 'tab1' } }
      }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders slot content when visible', () => {
    const component = shallowMount(KitTabPanel, {
      propsData: { id: 'tab1' },
      global: {
        provide: { state: { activeTab: 'tab1' } }
      },
      slots: { default: '<div class="panel-content">Panel Content</div>' }
    })
    expect(component.find('.panel-content').exists()).toBe(true)
  })

  it('does not render when not active', () => {
    const component = shallowMount(KitTabPanel, {
      propsData: { id: 'tab2' },
      global: {
        provide: { state: { activeTab: 'tab1' } }
      },
      slots: { default: '<div class="panel-content">Panel Content</div>' }
    })
    expect(component.find('.panel-content').exists()).toBe(false)
  })

  it('accepts string id', () => {
    const component = shallowMount(KitTabPanel, {
      propsData: { id: 'tab1' },
      global: {
        provide: { state: { activeTab: 'tab1' } }
      }
    })
    expect(component.vm.$props.id).toBe('tab1')
  })

  it('accepts numeric id', () => {
    const component = shallowMount(KitTabPanel, {
      propsData: { id: 1 },
      global: {
        provide: { state: { activeTab: 1 } }
      }
    })
    expect(component.vm.$props.id).toBe(1)
  })

  it('renders as div when visible', () => {
    const component = shallowMount(KitTabPanel, {
      propsData: { id: 'tab1' },
      global: {
        provide: { state: { activeTab: 'tab1' } }
      }
    })
    expect(component.element.tagName).toBe('DIV')
  })

  it('compares id as string', () => {
    const component = shallowMount(KitTabPanel, {
      propsData: { id: '1' },
      global: {
        provide: { state: { activeTab: 1 } }
      },
      slots: { default: '<div class="content">Content</div>' }
    })
    // Should match because comparison converts to string
    expect(component.find('.content').exists()).toBe(true)
  })
})
