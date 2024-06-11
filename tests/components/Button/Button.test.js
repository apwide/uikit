import { shallowMount } from '@vue/test-utils'
import KitButton from '@components/Button/KitButton.vue'
import Spinner from '@/components/Spinner/Spinner'

describe('Button', () => {
  it('renders correct content for a button', () => {
    const component = shallowMount(KitButton, { slots: { default: 'Click me!' } })

    expect(component.find({ ref: 'label' }).text()).toBe('Click me!')
  })

  it('renders spinner if passed loading prop', () => {
    const component = shallowMount(KitButton, { propsData: { isLoading: true }, slots: { default: 'Click me!' } })
    expect(component.findComponent(Spinner).exists()).toBe(true)
  })

  it('emits click event on button click', () => {
    const clickHandler = jest.fn()
    const component = shallowMount(KitButton, { slots: { default: 'Click me!' }, listeners: { click: clickHandler } })
    component.trigger('click')
    expect(clickHandler).toBeCalled()
  })
})
