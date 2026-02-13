import { shallowMount } from '@vue/test-utils'
import KitBigModal from '@components/Modal/KitBigModal.vue'

describe('KitBigModal', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitBigModal)
    expect(component.exists()).toBe(true)
  })

  it('renders title slot', () => {
    const component = shallowMount(KitBigModal, {
      slots: { title: '<h1 class="custom-title">Modal Title</h1>' }
    })
    expect(component.find('.custom-title').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const component = shallowMount(KitBigModal, {
      slots: { default: '<div class="modal-body">Body Content</div>' }
    })
    expect(component.find('.modal-body').exists()).toBe(true)
  })

  it('renders footer slot', () => {
    const component = shallowMount(KitBigModal, {
      slots: { footer: '<div class="modal-footer">Footer</div>' }
    })
    expect(component.find('.modal-footer').exists()).toBe(true)
  })

  it('renders breadcrumb slot', () => {
    const component = shallowMount(KitBigModal, {
      slots: { breadcrumb: '<nav class="breadcrumb">Home</nav>' }
    })
    expect(component.find('.breadcrumb').exists()).toBe(true)
  })

  it('renders actions slot', () => {
    const component = shallowMount(KitBigModal, {
      slots: { actions: '<button class="action-btn">Action</button>' }
    })
    expect(component.find('.action-btn').exists()).toBe(true)
  })

  it('has default heading empty', () => {
    const component = shallowMount(KitBigModal)
    expect(component.vm.$props.heading).toBe('')
  })

  it('accepts custom heading', () => {
    const component = shallowMount(KitBigModal, {
      propsData: { heading: 'Test Modal' }
    })
    expect(component.vm.$props.heading).toBe('Test Modal')
  })

  it('wraps content in KitModal', () => {
    const component = shallowMount(KitBigModal)
    // KitModal is rendered (may be stubbed)
    expect(component.html()).toContain('kit-modal')
  })

  it('has header content element', () => {
    const component = shallowMount(KitBigModal)
    const content = component.find('.kit-modal__content')
    expect(content.exists()).toBe(true)
  })

  it('has header pre-title element', () => {
    const component = shallowMount(KitBigModal)
    const preTitle = component.find('.kit-modal__header-pre-title')
    expect(preTitle.exists()).toBe(true)
  })

  it('has header title element', () => {
    const component = shallowMount(KitBigModal)
    const title = component.find('.kit-modal__header-title')
    expect(title.exists()).toBe(true)
  })

  it('renders close button', () => {
    const component = shallowMount(KitBigModal)
    const closeBtn = component.find('.kit-modal__close')
    expect(closeBtn.exists()).toBe(true)
  })

  it('emits close event on close button click', async () => {
    const component = shallowMount(KitBigModal)
    const closeBtn = component.find('.kit-modal__close')
    // Trigger click on the stubbed KitIconButton
    await closeBtn.vm.$emit('click')
    expect(component.emitted('close')).toBeTruthy()
  })

  it('emits cancel event on close button click', async () => {
    const component = shallowMount(KitBigModal)
    const closeBtn = component.find('.kit-modal__close')
    // Trigger click on the stubbed KitIconButton
    await closeBtn.vm.$emit('click')
    expect(component.emitted('cancel')).toBeTruthy()
  })
})
