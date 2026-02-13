import { shallowMount } from '@vue/test-utils'
import KitFlag from '@components/Flag/KitFlag.vue'

describe('KitFlag', () => {
  it('renders with required props', () => {
    const component = shallowMount(KitFlag, {
      propsData: { title: 'Test Title' }
    })
    expect(component.exists()).toBe(true)
  })

  it('displays title', () => {
    const component = shallowMount(KitFlag, {
      propsData: { title: 'Test Title' }
    })
    expect(component.text()).toContain('Test Title')
  })

  it('displays description when provided', () => {
    const component = shallowMount(KitFlag, {
      propsData: { title: 'Test', description: 'Test Description' }
    })
    expect(component.text()).toContain('Test Description')
  })

  it('renders slot content', () => {
    const component = shallowMount(KitFlag, {
      propsData: { title: 'Test' },
      slots: { default: '<div class="custom-content">Custom</div>' }
    })
    expect(component.find('.custom-content').exists()).toBe(true)
  })

  it('uses default appearance', () => {
    const component = shallowMount(KitFlag, {
      propsData: { title: 'Test' }
    })
    const flag = component.find('.kit-flag')
    expect(flag.attributes('appearance')).toBe('default')
  })

  it('accepts custom appearance', () => {
    const component = shallowMount(KitFlag, {
      propsData: { title: 'Test', appearance: 'success' }
    })
    const flag = component.find('.kit-flag')
    expect(flag.attributes('appearance')).toBe('success')
  })

  it('renders icon element', () => {
    const component = shallowMount(KitFlag, {
      propsData: { title: 'Test' }
    })
    const icon = component.find('.icon')
    expect(icon.exists()).toBe(true)
  })

  it('renders close button for default appearance', () => {
    const component = shallowMount(KitFlag, {
      propsData: { title: 'Test', appearance: 'default' }
    })
    const closeIcon = component.find('.close')
    expect(closeIcon.exists()).toBe(true)
  })

  it('renders chevron for non-default appearance', () => {
    const component = shallowMount(KitFlag, {
      propsData: { title: 'Test', appearance: 'info' }
    })
    const chevron = component.find('.chevron')
    expect(chevron.exists()).toBe(true)
  })

  it('renders actions when provided in props', () => {
    const component = shallowMount(KitFlag, {
      propsData: { 
        title: 'Test',
        actions: [{ content: 'Action 1' }]
      }
    })
    const actions = component.find('.actions')
    expect(actions.exists()).toBe(true)
  })

  it('has correct CSS class', () => {
    const component = shallowMount(KitFlag, {
      propsData: { title: 'Test' }
    })
    const flag = component.find('.kit-flag')
    expect(flag.exists()).toBe(true)
  })
})
