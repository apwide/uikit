import { shallowMount } from '@vue/test-utils'
import KitActionMenu from '@components/Menu/KitActionMenu.vue'
import KitIconMenu from '@components/Menu/KitIconMenu.vue'

const mountWithSlot = (options = {}) => shallowMount(KitActionMenu, {
  scopedSlots: { default: '<div class="action-item">Item</div>' },
  ...options
})

describe('KitActionMenu', () => {
  it('does not render without a default slot', () => {
    const component = shallowMount(KitActionMenu)
    expect(component.findComponent(KitIconMenu).exists()).toBe(false)
  })

  it('renders KitIconMenu when default slot is provided', () => {
    const component = mountWithSlot()
    expect(component.findComponent(KitIconMenu).exists()).toBe(true)
  })

  it('uses default title', () => {
    const component = mountWithSlot()
    expect(component.findComponent(KitIconMenu).props('title')).toBe('Select your action')
  })

  it('accepts custom title', () => {
    const component = mountWithSlot({
      propsData: { title: 'More actions' }
    })
    expect(component.findComponent(KitIconMenu).props('title')).toBe('More actions')
  })

  it('uses default appearance subtle', () => {
    const component = mountWithSlot()
    expect(component.findComponent(KitIconMenu).props('appearance')).toBe('subtle')
  })

  it('is not disabled by default', () => {
    const component = mountWithSlot()
    expect(component.findComponent(KitIconMenu).props('isDisabled')).toBe(false)
  })

  it('can be disabled', () => {
    const component = mountWithSlot({
      propsData: { isDisabled: true }
    })
    expect(component.findComponent(KitIconMenu).props('isDisabled')).toBe(true)
  })

  it('emits open event when KitIconMenu emits open', async () => {
    const component = mountWithSlot()
    await component.findComponent(KitIconMenu).vm.$emit('open')
    expect(component.emitted('open')).toBeTruthy()
  })

  it('emits close event when KitIconMenu emits close', async () => {
    const component = mountWithSlot()
    await component.findComponent(KitIconMenu).vm.$emit('close')
    expect(component.emitted('close')).toBeTruthy()
  })
})
