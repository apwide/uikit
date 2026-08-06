import { shallowMount } from '@vue/test-utils'
import Footer from '@components/Modal/Footer.vue'
import KitButton from '@components/Button/KitButton.vue'

describe('Footer', () => {
  it('renders with default props', () => {
    const component = shallowMount(Footer)
    expect(component.exists()).toBe(true)
  })

  it('renders with kit-modal-footer class', () => {
    const component = shallowMount(Footer)
    expect(component.classes()).toContain('kit-modal-footer')
  })

  it('renders submit and cancel buttons by default', () => {
    const component = shallowMount(Footer)
    const buttons = component.findAllComponents(KitButton)
    expect(buttons).toHaveLength(2)
    expect(buttons.at(0).text()).toBe('Continue')
    expect(buttons.at(1).text()).toBe('Cancel')
  })

  it('uses default appearance primary on submit button', () => {
    const component = shallowMount(Footer)
    const buttons = component.findAllComponents(KitButton)
    expect(buttons.at(0).props('appearance')).toBe('primary')
  })

  it('accepts custom appearance', () => {
    const component = shallowMount(Footer, {
      propsData: { appearance: 'danger' }
    })
    const buttons = component.findAllComponents(KitButton)
    expect(buttons.at(0).props('appearance')).toBe('danger')
  })

  it('accepts custom actions labels', () => {
    const component = shallowMount(Footer, {
      propsData: { actions: ['Save', 'Discard'] }
    })
    const buttons = component.findAllComponents(KitButton)
    expect(buttons.at(0).text()).toBe('Save')
    expect(buttons.at(1).text()).toBe('Discard')
  })

  it('disables submit button when pending', () => {
    const component = shallowMount(Footer, {
      propsData: { pending: true }
    })
    const buttons = component.findAllComponents(KitButton)
    expect(buttons.at(0).props('isDisabled')).toBe(true)
    expect(buttons.at(0).props('isLoading')).toBe(true)
  })

  it('disables submit button when shouldAllowSubmit is false', () => {
    const component = shallowMount(Footer, {
      propsData: { shouldAllowSubmit: false }
    })
    const buttons = component.findAllComponents(KitButton)
    expect(buttons.at(0).props('isDisabled')).toBe(true)
  })

  it('emits cancel event when cancel button is clicked', async () => {
    const component = shallowMount(Footer)
    const buttons = component.findAllComponents(KitButton)
    await buttons.at(1).vm.$emit('click')
    expect(component.emitted('cancel')).toBeTruthy()
  })
})
