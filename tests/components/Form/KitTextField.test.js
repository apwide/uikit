import { shallowMount } from '@vue/test-utils'
import KitTextField from '@components/Form/KitTextField.vue'

describe('KitTextField', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitTextField)
    expect(component.exists()).toBe(true)
  })

  it('has the kit-text-field class', () => {
    const component = shallowMount(KitTextField)
    expect(component.classes()).toContain('kit-text-field')
  })

  it('has the input-wrapper data-cy attribute', () => {
    const component = shallowMount(KitTextField)
    expect(component.attributes('data-cy')).toBe('input-wrapper')
  })

  it('renders slot content', () => {
    const component = shallowMount(KitTextField, {
      slots: { default: '<input class="my-input" />' }
    })
    expect(component.find('.my-input').exists()).toBe(true)
  })

  it('forwards listeners bound on the root element', () => {
    const onClick = jest.fn()
    const component = shallowMount(KitTextField, {
      listeners: { click: onClick }
    })
    component.trigger('click')
    expect(onClick).toHaveBeenCalled()
  })
})
