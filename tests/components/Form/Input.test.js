import { shallowMount } from '@vue/test-utils'
import KitInput from '@components/Form/KitInput.vue'

describe('Input', () => {
  it('emits focus event on input focus', () => {
    const component = shallowMount(KitInput, {
      attachTo: document.body
    })
    component.findComponent('input').trigger('focus')
    expect(component.emitted('focus')).toBeTruthy()
  })

  it('emits blur event on input blur', () => {
    const component = shallowMount(KitInput)
    component.find('input').trigger('blur')
    expect(component.emitted('blur')).toBeTruthy()
  })

  it('emits input event on input', () => {
    const component = shallowMount(KitInput)
    component.findComponent('input').element.value = 'Typed value'
    component.findComponent('input').trigger('input')

    const [value] = component.emitted('input')

    expect(value).toEqual(['Typed value'])
  })
})
