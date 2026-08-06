import { mount } from '@vue/test-utils'
import KitIconButton from '@components/Button/KitIconButton.vue'

describe('KitIconButton', () => {
  it('renders with required title prop', () => {
    const component = mount(KitIconButton, {
      propsData: { title: 'Delete' }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders as a button', () => {
    const component = mount(KitIconButton, {
      propsData: { title: 'Delete' }
    })
    expect(component.find('button').exists()).toBe(true)
  })

  it('renders slot content as the icon', () => {
    const component = mount(KitIconButton, {
      propsData: { title: 'Delete' },
      slots: { default: '<svg class="my-icon"></svg>' }
    })
    expect(component.find('.my-icon').exists()).toBe(true)
  })

  it('renders a screen-reader-only span with the title text', () => {
    const component = mount(KitIconButton, {
      propsData: { title: 'Delete item' }
    })
    expect(component.find('.kit-screen-reader').text()).toBe('Delete item')
  })

  it('sets the title attribute on the button', () => {
    const component = mount(KitIconButton, {
      propsData: { title: 'Delete item' }
    })
    expect(component.find('button').attributes('title')).toBe('Delete item')
  })

  it('uses default appearance subtle', () => {
    const component = mount(KitIconButton, {
      propsData: { title: 'Delete' }
    })
    expect(component.find('button').attributes('appearance')).toBe('subtle')
  })

  it('accepts custom appearance', () => {
    const component = mount(KitIconButton, {
      propsData: { title: 'Delete', appearance: 'danger' }
    })
    expect(component.find('button').attributes('appearance')).toBe('danger')
  })

  it('uses default spacing default', () => {
    const component = mount(KitIconButton, {
      propsData: { title: 'Delete' }
    })
    expect(component.find('button').attributes('spacing')).toBe('default')
  })

  it('accepts custom spacing', () => {
    const component = mount(KitIconButton, {
      propsData: { title: 'Delete', spacing: 'compact' }
    })
    expect(component.find('button').attributes('spacing')).toBe('compact')
  })

  it('forwards extra attributes to the underlying button', () => {
    const component = mount(KitIconButton, {
      propsData: { title: 'Delete' },
      attrs: { 'data-cy': 'delete-button' }
    })
    expect(component.find('button').attributes('data-cy')).toBe('delete-button')
  })

  it('forwards click events to the underlying button', async () => {
    const clickHandler = jest.fn()
    const component = mount(KitIconButton, {
      propsData: { title: 'Delete' },
      listeners: { click: clickHandler }
    })
    await component.find('button').trigger('click')
    expect(clickHandler).toHaveBeenCalled()
  })
})
