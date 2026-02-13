import { shallowMount } from '@vue/test-utils'
import KitRadio from '@components/Radio/KitRadio.vue'

describe('KitRadio', () => {
  const mockValue = { key: 'test', label: 'Test Option', value: 'test' }

  it('renders with required props', () => {
    const component = shallowMount(KitRadio, {
      propsData: { value: mockValue }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders label element', () => {
    const component = shallowMount(KitRadio, {
      propsData: { value: mockValue }
    })
    const label = component.find('label')
    expect(label.exists()).toBe(true)
  })

  it('renders radio input', () => {
    const component = shallowMount(KitRadio, {
      propsData: { value: mockValue }
    })
    const input = component.find('input[type="radio"]')
    expect(input.exists()).toBe(true)
  })

  it('displays value label', () => {
    const component = shallowMount(KitRadio, {
      propsData: { value: mockValue }
    })
    expect(component.text()).toContain('Test Option')
  })

  it('is checked by default', () => {
    const component = shallowMount(KitRadio, {
      propsData: { value: mockValue, checked: true }
    })
    const input = component.find('input')
    expect(input.element.checked).toBe(true)
  })

  it('is not checked when checked prop is false', () => {
    const component = shallowMount(KitRadio, {
      propsData: { value: mockValue, checked: false }
    })
    const input = component.find('input')
    expect(input.element.checked).toBe(false)
  })

  it('applies name attribute', () => {
    const component = shallowMount(KitRadio, {
      propsData: { value: mockValue, name: 'test-radio' }
    })
    const input = component.find('input')
    expect(input.attributes('name')).toBe('test-radio')
  })

  it('emits input event on change', async () => {
    const component = shallowMount(KitRadio, {
      propsData: { value: mockValue, checked: false }
    })
    const input = component.find('input')
    await input.trigger('change')
    expect(component.emitted('input')).toBeTruthy()
  })

  it('emits focus event on focus', async () => {
    const component = shallowMount(KitRadio, {
      propsData: { value: mockValue },
      attachTo: document.body
    })
    const input = component.find('input')
    await input.trigger('focus')
    expect(component.emitted('focus')).toBeTruthy()
  })

  it('has correct CSS class', () => {
    const component = shallowMount(KitRadio, {
      propsData: { value: mockValue }
    })
    expect(component.classes()).toContain('kit-radio')
  })
})
