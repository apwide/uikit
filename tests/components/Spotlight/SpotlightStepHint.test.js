import { shallowMount } from '@vue/test-utils'
import KitSpotlightStepHint from '@components/Spotlight/KitSpotlightStepHint.vue'

describe('KitSpotlightStepHint', () => {
  it('renders with required props', () => {
    const component = shallowMount(KitSpotlightStepHint, {
      propsData: { title: 'Step Title' }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders spotlight step hint container', () => {
    const component = shallowMount(KitSpotlightStepHint, {
      propsData: { title: 'Step Title' }
    })
    expect(component.find('.kit-spotlight-step-hint').exists()).toBe(true)
  })

  it('renders title', () => {
    const component = shallowMount(KitSpotlightStepHint, {
      propsData: { title: 'Welcome' }
    })
    expect(component.find('.kit-spotlight-step-hint__title').exists()).toBe(true)
  })

  it('displays title text', () => {
    const component = shallowMount(KitSpotlightStepHint, {
      propsData: { title: 'Welcome to the tour' }
    })
    expect(component.text()).toContain('Welcome to the tour')
  })

  it('renders slot content', () => {
    const component = shallowMount(KitSpotlightStepHint, {
      propsData: { title: 'Step' },
      slots: { default: '<p class="custom-content">Content</p>' }
    })
    expect(component.find('.custom-content').exists()).toBe(true)
  })

  it('accepts title prop', () => {
    const component = shallowMount(KitSpotlightStepHint, {
      propsData: { title: 'Test Title' }
    })
    expect(component.props('title')).toBe('Test Title')
  })

  it('has correct CSS classes', () => {
    const component = shallowMount(KitSpotlightStepHint, {
      propsData: { title: 'Step' }
    })
    expect(component.classes()).toContain('kit-spotlight-step-hint')
  })

  it('title has correct CSS class', () => {
    const component = shallowMount(KitSpotlightStepHint, {
      propsData: { title: 'Step' }
    })
    const title = component.find('.kit-spotlight-step-hint__title')
    expect(title.exists()).toBe(true)
  })
})
