import { shallowMount } from '@vue/test-utils'
import KitBigModal from '@components/Modal/KitBigModal.vue'
import KitIconButton from '@components/Button/KitIconButton.vue'

// KitBigModal forwards its own named slots (title/default/footer/breadcrumb/actions) into
// KitModal's own named slots. If KitModal is stubbed (shallowMount's default), those named
// slots never render - VTU's renderStubDefaultSlot only covers the unnamed default slot.
// So KitModal itself must render for real; its own children stay shallow-stubbed.
const mountBigModal = (options) =>
  shallowMount(KitBigModal, {
    ...options,
    global: { stubs: { KitModal: false } }
  })

describe('KitBigModal', () => {
  it('renders with default props', () => {
    const component = mountBigModal()
    expect(component.exists()).toBe(true)
  })

  it('renders title slot', () => {
    const component = mountBigModal({
      slots: { title: '<h1 class="custom-title">Modal Title</h1>' }
    })
    expect(component.find('.custom-title').exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const component = mountBigModal({
      slots: { default: '<div class="modal-body">Body Content</div>' }
    })
    expect(component.find('.modal-body').exists()).toBe(true)
  })

  it('renders footer slot', () => {
    const component = mountBigModal({
      slots: { footer: '<div class="modal-footer">Footer</div>' }
    })
    expect(component.find('.modal-footer').exists()).toBe(true)
  })

  it('renders breadcrumb slot', () => {
    const component = mountBigModal({
      slots: { breadcrumb: '<nav class="breadcrumb">Home</nav>' }
    })
    expect(component.find('.breadcrumb').exists()).toBe(true)
  })

  it('renders actions slot', () => {
    const component = mountBigModal({
      slots: { actions: '<button class="action-btn">Action</button>' }
    })
    expect(component.find('.action-btn').exists()).toBe(true)
  })

  it('has default heading empty', () => {
    const component = mountBigModal()
    expect(component.vm.$props.heading).toBe('')
  })

  it('accepts custom heading', () => {
    const component = mountBigModal({
      propsData: { heading: 'Test Modal' }
    })
    expect(component.vm.$props.heading).toBe('Test Modal')
  })

  it('wraps content in KitModal', () => {
    const component = mountBigModal()
    expect(component.html()).toContain('kit-modal')
  })

  it('has header content element', () => {
    const component = mountBigModal()
    const content = component.find('.kit-modal__content')
    expect(content.exists()).toBe(true)
  })

  it('has header pre-title element', () => {
    const component = mountBigModal()
    const preTitle = component.find('.kit-modal__header-pre-title')
    expect(preTitle.exists()).toBe(true)
  })

  it('has header title element', () => {
    const component = mountBigModal()
    const title = component.find('.kit-modal__header-title')
    expect(title.exists()).toBe(true)
  })

  it('renders close button', () => {
    const component = mountBigModal()
    const closeBtn = component.findComponent(KitIconButton)
    expect(closeBtn.exists()).toBe(true)
  })

  it('emits close event on close button click', async () => {
    const component = mountBigModal()
    const closeBtn = component.findComponent(KitIconButton)
    await closeBtn.vm.$emit('click')
    expect(component.emitted('close')).toBeTruthy()
  })

  it('emits cancel event on close button click', async () => {
    const component = mountBigModal()
    const closeBtn = component.findComponent(KitIconButton)
    await closeBtn.vm.$emit('click')
    expect(component.emitted('cancel')).toBeTruthy()
  })
})
