import { shallowMount } from '@vue/test-utils'
import KitTabHeader from '@components/Tabs/KitTabHeader.vue'
import KitTabButton from '@components/Tabs/KitTabButton.vue'

describe('KitTabHeader', () => {
  it('renders with required id prop', () => {
    const component = shallowMount(KitTabHeader, {
      propsData: { id: 'tab1' }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders slot content inside KitTabButton by default', () => {
    const component = shallowMount(KitTabHeader, {
      propsData: { id: 'tab1' },
      slots: { default: 'Tab Label' }
    })
    expect(component.text()).toContain('Tab Label')
  })

  it('renders custom content when custom prop is true', () => {
    const component = shallowMount(KitTabHeader, {
      propsData: { id: 'tab1', custom: true },
      slots: { default: '<span class="custom-content">Custom</span>' }
    })
    expect(component.find('.custom-content').exists()).toBe(true)
    expect(component.find('.kit-tab-header__custom').exists()).toBe(true)
  })

  it('is active when injected state activeTab matches id', () => {
    const component = shallowMount(KitTabHeader, {
      propsData: { id: 'tab1' },
      global: { provide: { state: { activeTab: 'tab1' } } }
    })
    expect(component.attributes('active')).toBe('true')
  })

  it('is not active when injected state activeTab does not match id', () => {
    const component = shallowMount(KitTabHeader, {
      propsData: { id: 'tab1' },
      global: { provide: { state: { activeTab: 'tab2' } } }
    })
    expect(component.attributes('active')).toBeUndefined()
  })

  it('is disabled when disabled prop is set', () => {
    const component = shallowMount(KitTabHeader, {
      propsData: { id: 'tab1', disabled: true }
    })
    expect(component.attributes('disabled')).toBe('disabled')
  })

  it('shows drag handle icon when reorderable is enabled globally and locally', () => {
    const component = shallowMount(KitTabHeader, {
      propsData: { id: 'tab1', reorderable: true },
      global: { provide: { state: { reorderable: true } } }
    })
    expect(component.find('.kit-drag-handle').exists()).toBe(true)
    expect(component.classes()).toContain('kit-is-reorderable')
  })

  it('does not show drag handle icon when component reorderable prop is false', () => {
    const component = shallowMount(KitTabHeader, {
      propsData: { id: 'tab1', reorderable: false },
      global: { provide: { state: { reorderable: true } } }
    })
    expect(component.find('.kit-drag-handle').exists()).toBe(false)
  })

  it('calls injected select function on click', async () => {
    const select = jest.fn()
    const component = shallowMount(KitTabHeader, {
      propsData: { id: 'tab1' },
      global: { provide: { select } }
    })
    await component.findComponent(KitTabButton).vm.$emit('click')
    expect(select).toHaveBeenCalledWith('tab1')
  })
})
