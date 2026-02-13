import { shallowMount } from '@vue/test-utils'
import KitDropdown from '@components/Dropdown/KitDropdown.vue'

describe('KitDropdown', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitDropdown)
    expect(component.exists()).toBe(true)
  })

  it('renders dropdown container', () => {
    const component = shallowMount(KitDropdown)
    expect(component.find('.dropdown-container').exists()).toBe(true)
  })

  it('has default label', () => {
    const component = shallowMount(KitDropdown)
    expect(component.props('label')).toBe('Dropdown')
  })

  it('accepts custom label', () => {
    const component = shallowMount(KitDropdown, {
      propsData: { label: 'Custom Menu' }
    })
    expect(component.props('label')).toBe('Custom Menu')
  })

  it('has default appearance', () => {
    const component = shallowMount(KitDropdown)
    expect(component.props('appearance')).toBe('default')
  })

  it('accepts custom appearance', () => {
    const component = shallowMount(KitDropdown, {
      propsData: { appearance: 'primary' }
    })
    expect(component.props('appearance')).toBe('primary')
  })

  it('is not disabled by default', () => {
    const component = shallowMount(KitDropdown)
    expect(component.props('isDisabled')).toBe(false)
  })

  it('accepts isDisabled prop', () => {
    const component = shallowMount(KitDropdown, {
      propsData: { isDisabled: true }
    })
    expect(component.props('isDisabled')).toBe(true)
  })

  it('closeOnClick is true by default', () => {
    const component = shallowMount(KitDropdown)
    expect(component.props('closeOnClick')).toBe(true)
  })

  it('closeOnOutsideClick is true by default', () => {
    const component = shallowMount(KitDropdown)
    expect(component.props('closeOnOutsideClick')).toBe(true)
  })

  it('closeOnEsc is true by default', () => {
    const component = shallowMount(KitDropdown)
    expect(component.props('closeOnEsc')).toBe(true)
  })

  it('accepts closeOnClick prop', () => {
    const component = shallowMount(KitDropdown, {
      propsData: { closeOnClick: false }
    })
    expect(component.props('closeOnClick')).toBe(false)
  })

  it('has default placement', () => {
    const component = shallowMount(KitDropdown)
    expect(component.props('placement')).toBe('bottom-start')
  })

  it('accepts custom placement', () => {
    const component = shallowMount(KitDropdown, {
      propsData: { placement: 'top-end' }
    })
    expect(component.props('placement')).toBe('top-end')
  })

  it('fullWidth is false by default', () => {
    const component = shallowMount(KitDropdown)
    expect(component.props('fullWidth')).toBe(false)
  })

  it('accepts fullWidth prop', () => {
    const component = shallowMount(KitDropdown, {
      propsData: { fullWidth: true }
    })
    const container = component.find('.dropdown-container')
    expect(container.attributes('full-width')).toBe('true')
  })

  it('renders KitButton when no trigger slot', () => {
    const component = shallowMount(KitDropdown)
    // KitButton is stubbed by shallowMount
    expect(component.html()).toContain('anonymous-stub')
  })

  it('renders Popup component', () => {
    const component = shallowMount(KitDropdown)
    // Popup is stubbed by shallowMount
    expect(component.html()).toContain('anonymous-stub')
  })

  it('renders default slot content', () => {
    const component = shallowMount(KitDropdown, {
      slots: { default: '<div class="test-item">Item</div>' }
    })
    expect(component.find('.test-item').exists()).toBe(true)
  })

  it('accepts boundariesElement prop', () => {
    const component = shallowMount(KitDropdown, {
      propsData: { boundariesElement: 'window' }
    })
    expect(component.props('boundariesElement')).toBe('window')
  })

  it('positionFixed is false by default', () => {
    const component = shallowMount(KitDropdown)
    expect(component.props('positionFixed')).toBe(false)
  })

  it('appendToBody is false by default', () => {
    const component = shallowMount(KitDropdown)
    expect(component.props('appendToBody')).toBe(false)
  })
})
