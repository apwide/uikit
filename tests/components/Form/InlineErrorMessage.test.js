import { shallowMount } from '@vue/test-utils'
import InlineErrorMessage from '@components/Form/InlineErrorMessage.vue'

describe('InlineErrorMessage', () => {
  const targetElement = document.createElement('div')

  it('renders with required props', () => {
    const component = shallowMount(InlineErrorMessage, {
      propsData: { error: new Error('Something went wrong'), targetElement }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders the error message', () => {
    const component = shallowMount(InlineErrorMessage, {
      propsData: { error: new Error('Something went wrong'), targetElement }
    })
    expect(component.find('.kit-inline-error-message').text()).toBe('Something went wrong')
  })

  it('renders one message per field error when fieldErrors is present', () => {
    const error = {
      message: 'Validation failed',
      fieldErrors: [{ message: 'Name is required' }, { message: 'Email is invalid' }]
    }
    const component = shallowMount(InlineErrorMessage, { propsData: { error, targetElement } })
    const messages = component.findAll('.error-message')
    expect(messages).toHaveLength(2)
    expect(messages.at(0).text()).toBe('Name is required')
    expect(messages.at(1).text()).toBe('Email is invalid')
  })

  it('falls back to the general message when a field error has no message', () => {
    const error = { message: 'Validation failed', fieldErrors: [{}] }
    const component = shallowMount(InlineErrorMessage, { propsData: { error, targetElement } })
    expect(component.find('.error-message').text()).toBe('Validation failed')
  })

  it('defaults placement to right', () => {
    const component = shallowMount(InlineErrorMessage, {
      propsData: { error: new Error('oops'), targetElement }
    })
    expect(component.vm.$props.placement).toBe('right')
  })
})
