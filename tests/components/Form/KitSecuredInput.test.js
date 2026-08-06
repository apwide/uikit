import { shallowMount } from '@vue/test-utils'
import KitSecuredInput from '@components/Form/KitSecuredInput.vue'
import KitIconButton from '@components/Button/KitIconButton.vue'

describe('KitSecuredInput', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitSecuredInput)
    expect(component.exists()).toBe(true)
  })

  it('renders the input as type password by default', () => {
    const component = shallowMount(KitSecuredInput)
    expect(component.find('input').attributes('type')).toBe('password')
  })

  it('emits input event on input', () => {
    const component = shallowMount(KitSecuredInput)
    component.find('input').element.value = 'my-secret'
    component.find('input').trigger('input')

    expect(component.emitted('input')[0]).toEqual(['my-secret'])
  })

  it('emits focus event on input focus', () => {
    const component = shallowMount(KitSecuredInput, { attachTo: document.body })
    component.find('input').trigger('focus')
    expect(component.emitted('focus')).toBeTruthy()
  })

  it('emits blur event on input blur', () => {
    const component = shallowMount(KitSecuredInput)
    component.find('input').trigger('blur')
    expect(component.emitted('blur')).toBeTruthy()
  })

  it('reveals the value as plain text when the eye button is clicked', async () => {
    const component = shallowMount(KitSecuredInput)
    expect(component.find('input').attributes('type')).toBe('password')
    const fakeEvent = { stopPropagation: jest.fn(), preventDefault: jest.fn() }
    await component.findComponent(KitIconButton).vm.$emit('click', fakeEvent)
    expect(component.find('input').attributes('type')).toBe('text')
  })

  it('disables the input when disabled is true', () => {
    const component = shallowMount(KitSecuredInput, { propsData: { disabled: true } })
    expect(component.find('input').attributes('disabled')).toBeDefined()
  })

  it('defaults disabled to false', () => {
    const component = shallowMount(KitSecuredInput)
    expect(component.vm.$props.disabled).toBe(false)
  })

  it('sets the maxlength attribute', () => {
    const component = shallowMount(KitSecuredInput, { propsData: { maxlength: 10 } })
    expect(component.find('input').attributes('maxlength')).toBe('10')
  })
})
