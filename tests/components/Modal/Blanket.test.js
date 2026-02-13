import { shallowMount } from '@vue/test-utils'
import Blanket from '@components/Modal/Blanket.vue'

describe('Blanket', () => {
  it('renders with default props', () => {
    const component = shallowMount(Blanket)
    expect(component.exists()).toBe(true)
  })

  it('renders with kit-blanket class', () => {
    const component = shallowMount(Blanket)
    expect(component.classes()).toContain('kit-blanket')
  })

  it('renders slot content', () => {
    const component = shallowMount(Blanket, {
      slots: { default: '<div class="blanket-content">Content</div>' }
    })
    expect(component.find('.blanket-content').exists()).toBe(true)
  })

  it('has default z-index of 1000', () => {
    const component = shallowMount(Blanket)
    expect(component.element.style.zIndex).toBe('1000')
  })

  it('accepts custom z-index', () => {
    const component = shallowMount(Blanket, {
      propsData: { zIndex: 500 }
    })
    expect(component.element.style.zIndex).toBe('500')
  })
})
