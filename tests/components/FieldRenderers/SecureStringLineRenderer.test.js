import { shallowMount } from '@vue/test-utils'
import SecureStringLineRenderer from '@components/field-renderers/SecureStringLineRenderer.vue'
import KitIconButton from '@components/Button/KitIconButton.vue'

describe('SecureStringLineRenderer', () => {
  it('renders with required props', () => {
    const component = shallowMount(SecureStringLineRenderer, { propsData: { value: 'secret123' } })
    expect(component.exists()).toBe(true)
  })

  it('obfuscates the value by default', () => {
    const component = shallowMount(SecureStringLineRenderer, { propsData: { value: 'secret123' } })
    expect(component.html()).toContain('value="••••••••"')
  })

  it('caps the obfuscation at 8 dots for longer values', () => {
    const component = shallowMount(SecureStringLineRenderer, {
      propsData: { value: 'a-very-long-secret-value' }
    })
    expect(component.html()).toContain('value="••••••••"')
  })

  it('shows a Reveal control by default', () => {
    const component = shallowMount(SecureStringLineRenderer, { propsData: { value: 'secret123' } })
    expect(component.html()).toContain('title="Reveal"')
  })

  it('reveals the raw value and toggles the title to Hide when clicked', async () => {
    const component = shallowMount(SecureStringLineRenderer, { propsData: { value: 'secret123' } })
    const fakeEvent = { stopPropagation: jest.fn(), preventDefault: jest.fn() }
    // Two KitIconButtons render (copy-to-clipboard, then reveal-toggle); target the toggle one.
    await component.findAllComponents(KitIconButton).at(1).vm.$emit('click', fakeEvent)
    expect(component.find('.string-line-wrapper').exists()).toBe(true)
    expect(component.find('.string-line-wrapper').html()).toContain('secret123')
    expect(component.html()).toContain('title="Hide"')
  })

  it('passes the raw value to the copy-to-clipboard control', () => {
    const component = shallowMount(SecureStringLineRenderer, { propsData: { value: 'secret123' } })
    expect(component.html()).toContain('text="secret123"')
  })
})
