import { shallowMount } from '@vue/test-utils'
import KitLozenge from '@components/Lozenge/KitLozenge.vue'

describe('KitLozenge', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitLozenge)
    expect(component.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = shallowMount(KitLozenge, {
      slots: { default: 'IN PROGRESS' }
    })
    expect(component.text()).toBe('IN PROGRESS')
  })

  it('applies default appearance attribute', () => {
    const component = shallowMount(KitLozenge)
    const lozenge = component.find('.kit-lozenge')
    expect(lozenge.attributes('appearance')).toBe('default')
  })

  it('applies success appearance attribute', () => {
    const component = shallowMount(KitLozenge, {
      propsData: { appearance: 'success' }
    })
    const lozenge = component.find('.kit-lozenge')
    expect(lozenge.attributes('appearance')).toBe('success')
  })

  it('applies yellow appearance attribute', () => {
    const component = shallowMount(KitLozenge, {
      propsData: { appearance: 'yellow' }
    })
    const lozenge = component.find('.kit-lozenge')
    expect(lozenge.attributes('appearance')).toBe('yellow')
  })

  it('applies removed appearance attribute', () => {
    const component = shallowMount(KitLozenge, {
      propsData: { appearance: 'removed' }
    })
    const lozenge = component.find('.kit-lozenge')
    expect(lozenge.attributes('appearance')).toBe('removed')
  })

  it('applies inprogress appearance attribute', () => {
    const component = shallowMount(KitLozenge, {
      propsData: { appearance: 'inprogress' }
    })
    const lozenge = component.find('.kit-lozenge')
    expect(lozenge.attributes('appearance')).toBe('inprogress')
  })

  it('applies new appearance attribute', () => {
    const component = shallowMount(KitLozenge, {
      propsData: { appearance: 'new' }
    })
    const lozenge = component.find('.kit-lozenge')
    expect(lozenge.attributes('appearance')).toBe('new')
  })

  it('applies moved appearance attribute', () => {
    const component = shallowMount(KitLozenge, {
      propsData: { appearance: 'moved' }
    })
    const lozenge = component.find('.kit-lozenge')
    expect(lozenge.attributes('appearance')).toBe('moved')
  })

  it('applies brown appearance attribute', () => {
    const component = shallowMount(KitLozenge, {
      propsData: { appearance: 'brown' }
    })
    const lozenge = component.find('.kit-lozenge')
    expect(lozenge.attributes('appearance')).toBe('brown')
  })

  it('does not apply subtle attribute by default', () => {
    const component = shallowMount(KitLozenge)
    const lozenge = component.find('.kit-lozenge')
    expect(lozenge.attributes('subtle')).toBeUndefined()
  })

  it('applies subtle attribute when prop is true', () => {
    const component = shallowMount(KitLozenge, {
      propsData: { subtle: true }
    })
    const lozenge = component.find('.kit-lozenge')
    expect(lozenge.attributes('subtle')).toBe('true')
  })

  it('combines appearance and subtle props', () => {
    const component = shallowMount(KitLozenge, {
      propsData: { appearance: 'success', subtle: true }
    })
    const lozenge = component.find('.kit-lozenge')
    expect(lozenge.attributes('appearance')).toBe('success')
    expect(lozenge.attributes('subtle')).toBe('true')
  })

  it('has wrapper element', () => {
    const component = shallowMount(KitLozenge)
    const wrapper = component.find('.kit-lozenge-wrapper')
    expect(wrapper.exists()).toBe(true)
  })

  it('renders content inside lozenge span', () => {
    const component = shallowMount(KitLozenge, {
      slots: { default: 'DONE' }
    })
    const lozenge = component.find('.kit-lozenge')
    expect(lozenge.text()).toBe('DONE')
  })
})
