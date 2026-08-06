import { shallowMount } from '@vue/test-utils'
import KitIconMenu from '@components/Menu/KitIconMenu.vue'
import KitDropdown from '@components/Dropdown/KitDropdown.vue'

const mountWithSlots = (options = {}) => shallowMount(KitIconMenu, {
  scopedSlots: {
    default: '<div class="menu-item">Item</div>',
    icon: '<span class="menu-icon">Icon</span>'
  },
  ...options
})

describe('KitIconMenu', () => {
  it('does not render without default and icon slots', () => {
    const component = shallowMount(KitIconMenu)
    expect(component.findComponent(KitDropdown).exists()).toBe(false)
  })

  it('renders KitDropdown when default and icon slots are provided', () => {
    const component = mountWithSlots()
    expect(component.findComponent(KitDropdown).exists()).toBe(true)
  })

  it('renders with kit-icon-menu class', () => {
    const component = mountWithSlots()
    expect(component.classes()).toContain('kit-icon-menu')
  })

  it('uses default title', () => {
    const component = mountWithSlots()
    expect(component.findComponent(KitDropdown).props('title')).toBeUndefined()
  })

  it('uses default placement bottom-end', () => {
    const component = mountWithSlots()
    expect(component.findComponent(KitDropdown).props('placement')).toBe('bottom-end')
  })

  it('accepts custom placement', () => {
    const component = mountWithSlots({
      propsData: { placement: 'top-start' }
    })
    expect(component.findComponent(KitDropdown).props('placement')).toBe('top-start')
  })

  it('closes on click by default', () => {
    const component = mountWithSlots()
    expect(component.findComponent(KitDropdown).props('closeOnClick')).toBe(true)
  })

  it('closes on outside click by default', () => {
    const component = mountWithSlots()
    expect(component.findComponent(KitDropdown).props('closeOnOutsideClick')).toBe(true)
  })

  it('is not disabled by default', () => {
    const component = mountWithSlots()
    expect(component.findComponent(KitDropdown).props('isDisabled')).toBe(false)
  })

  it('emits open event when KitDropdown emits open', async () => {
    const component = mountWithSlots()
    await component.findComponent(KitDropdown).vm.$emit('open')
    expect(component.emitted('open')).toBeTruthy()
  })

  it('emits close event when KitDropdown emits close', async () => {
    const component = mountWithSlots()
    await component.findComponent(KitDropdown).vm.$emit('open')
    await component.findComponent(KitDropdown).vm.$emit('close')
    expect(component.emitted('close')).toBeTruthy()
  })
})
