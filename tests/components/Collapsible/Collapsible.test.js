import { shallowMount } from '@vue/test-utils'
import KitCollapsible from '@components/Collapsible/KitCollapsible.vue'

describe('KitCollapsible', () => {
  it('renders with required props', () => {
    const component = shallowMount(KitCollapsible, {
      propsData: { label: 'Test Label', collapsed: true }
    })
    expect(component.exists()).toBe(true)
  })

  it('displays label text', () => {
    const component = shallowMount(KitCollapsible, {
      propsData: { label: 'Test Label', collapsed: true }
    })
    expect(component.text()).toContain('Test Label')
  })

  it('is collapsed by default', () => {
    const component = shallowMount(KitCollapsible, {
      propsData: { label: 'Test', collapsed: true }
    })
    const content = component.find('.kit-collapsible-content')
    expect(content.exists()).toBe(false)
  })

  it('shows content when not collapsed', () => {
    const component = shallowMount(KitCollapsible, {
      propsData: { label: 'Test', collapsed: false }
    })
    const content = component.find('.kit-collapsible-content')
    expect(content.exists()).toBe(true)
  })

  it('renders slot content when expanded', () => {
    const component = shallowMount(KitCollapsible, {
      propsData: { label: 'Test', collapsed: false },
      slots: { default: '<div class="test-content">Content</div>' }
    })
    expect(component.find('.test-content').exists()).toBe(true)
  })

  it('renders trigger button', () => {
    const component = shallowMount(KitCollapsible, {
      propsData: { label: 'Test', collapsed: true }
    })
    const trigger = component.find('.kit-collapsible-trigger')
    expect(trigger.exists()).toBe(true)
  })

  it('has correct CSS class', () => {
    const component = shallowMount(KitCollapsible, {
      propsData: { label: 'Test', collapsed: true }
    })
    expect(component.classes()).toContain('kit-collapsible')
  })

  it('supports custom trigger slot', () => {
    const component = shallowMount(KitCollapsible, {
      propsData: { label: 'Test', collapsed: true },
      slots: { trigger: '<button class="custom-trigger">Custom</button>' }
    })
    expect(component.find('.custom-trigger').exists()).toBe(true)
  })

  it('provides isCollapsed state to trigger slot', () => {
    const component = shallowMount(KitCollapsible, {
      propsData: { label: 'Test', collapsed: true },
      scopedSlots: {
        trigger: function (props) {
          return this.$createElement('div', props.isCollapsed.toString())
        }
      }
    })
    expect(component.text()).toContain('true')
  })

  it('provides toggle function to trigger slot', () => {
    const component = shallowMount(KitCollapsible, {
      propsData: { label: 'Test', collapsed: true },
      scopedSlots: {
        trigger: function (props) {
          return this.$createElement('button', {
            on: { click: props.toggle }
          }, 'Toggle')
        }
      }
    })
    const button = component.find('button')
    expect(button.exists()).toBe(true)
  })

  it('accepts storeState prop', () => {
    const component = shallowMount(KitCollapsible, {
      propsData: { label: 'Test', collapsed: true, storeState: true }
    })
    expect(component.exists()).toBe(true)
  })
})
