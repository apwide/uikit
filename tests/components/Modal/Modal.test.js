import { shallowMount } from '@vue/test-utils'
import KitModal from '@components/Modal/KitModal.vue'

describe('KitModal', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitModal)
    expect(component.exists()).toBe(true)
  })

  it('renders header slot', () => {
    const component = shallowMount(KitModal, {
      slots: { header: '<h2 class="modal-title">Title</h2>' }
    })
    expect(component.find('.modal-title').exists()).toBe(true)
  })

  it('renders content slot', () => {
    const component = shallowMount(KitModal, {
      slots: { content: '<div class="modal-content">Content</div>' }
    })
    expect(component.find('.modal-content').exists()).toBe(true)
  })

  it('renders footer slot', () => {
    const component = shallowMount(KitModal, {
      slots: { footer: '<div class="modal-footer">Footer</div>' }
    })
    expect(component.find('.modal-footer').exists()).toBe(true)
  })

  it('accepts appearance prop', () => {
    const component = shallowMount(KitModal, {
      propsData: { appearance: 'danger' }
    })
    expect(component.vm.$props.appearance).toBe('danger')
  })

  it('is not pending by default', () => {
    const component = shallowMount(KitModal)
    expect(component.vm.$props.pending).toBe(false)
  })

  it('accepts pending state', () => {
    const component = shallowMount(KitModal, {
      propsData: { pending: true }
    })
    expect(component.vm.$props.pending).toBe(true)
  })

  it('closes on ESC by default', () => {
    const component = shallowMount(KitModal)
    expect(component.vm.$props.closeOnEsc).toBe(true)
  })

  it('can disable close on ESC', () => {
    const component = shallowMount(KitModal, {
      propsData: { closeOnEsc: false }
    })
    expect(component.vm.$props.closeOnEsc).toBe(false)
  })

  it('does not close on outside click by default', () => {
    const component = shallowMount(KitModal)
    expect(component.vm.$props.closeOnOutsideClick).toBe(false)
  })

  it('can enable close on outside click', () => {
    const component = shallowMount(KitModal, {
      propsData: { closeOnOutsideClick: true }
    })
    expect(component.vm.$props.closeOnOutsideClick).toBe(true)
  })

  it('has default width 600px', () => {
    const component = shallowMount(KitModal)
    expect(component.vm.$props.width).toBe('600px')
  })

  it('accepts custom width', () => {
    const component = shallowMount(KitModal, {
      propsData: { width: '800px' }
    })
    expect(component.vm.$props.width).toBe('800px')
  })

  it('does not auto-focus by default', () => {
    const component = shallowMount(KitModal)
    expect(component.vm.$props.autoFocus).toBe(false)
  })

  it('can enable auto-focus', () => {
    const component = shallowMount(KitModal, {
      propsData: { autoFocus: true }
    })
    expect(component.vm.$props.autoFocus).toBe(true)
  })

  it('has default z-index 999', () => {
    const component = shallowMount(KitModal)
    expect(component.vm.$props.zIndex).toBe(999)
  })

  it('accepts custom z-index', () => {
    const component = shallowMount(KitModal, {
      propsData: { zIndex: 1000 }
    })
    expect(component.vm.$props.zIndex).toBe(1000)
  })

  it('renders as form element', () => {
    const component = shallowMount(KitModal)
    const form = component.find('form')
    expect(form.exists()).toBe(true)
  })

  it('has novalidate attribute on form', () => {
    const component = shallowMount(KitModal)
    const form = component.find('form')
    expect(form.attributes('novalidate')).toBeDefined()
  })
})
