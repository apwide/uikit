import { mount } from '@vue/test-utils'
import KitSpotlight from '@components/Spotlight/KitSpotlight.vue'
import KitSpotlightMask from '@components/Spotlight/KitSpotlightMask.vue'
import KitSpotlightHintContainer from '@components/Spotlight/KitSpotlightHintContainer.vue'

const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0))

const makeStep = (overrides = {}) => ({
  elements: () => [document.createElement('div')],
  title: 'Step Title',
  p: ['Paragraph'],
  ...overrides
})

describe('KitSpotlight', () => {
  let wrapper

  afterEach(() => {
    if (wrapper) {
      wrapper.destroy()
      wrapper = null
    }
  })

  it('sets the body position to fixed on mount', () => {
    wrapper = mount(KitSpotlight, { propsData: { steps: [makeStep()] } })
    expect(document.body.style.position).toBe('fixed')
  })

  it('moves its root element into document.body', async () => {
    wrapper = mount(KitSpotlight, { propsData: { steps: [makeStep()] } })
    await flushPromises()
    expect(wrapper.element.parentElement).toBe(document.body)
  })

  it('does not render the mask when the step has no elements', async () => {
    wrapper = mount(KitSpotlight, {
      propsData: { steps: [makeStep({ elements: () => [] })] }
    })
    await flushPromises()
    expect(wrapper.findComponent(KitSpotlightMask).exists()).toBe(false)
  })

  it('renders the mask and hint container once the first step resolves', async () => {
    wrapper = mount(KitSpotlight, { propsData: { steps: [makeStep()] } })
    await flushPromises()
    expect(wrapper.findComponent(KitSpotlightMask).exists()).toBe(true)
    expect(wrapper.findComponent(KitSpotlightHintContainer).exists()).toBe(true)
  })

  it('shows the step title and paragraphs by default', async () => {
    wrapper = mount(KitSpotlight, {
      propsData: { steps: [makeStep({ title: 'Welcome', p: ['First line'] })] }
    })
    await flushPromises()
    expect(wrapper.text()).toContain('Welcome')
    expect(wrapper.text()).toContain('First line')
  })

  it('renders a custom step slot instead of the default hint when provided', async () => {
    wrapper = mount(KitSpotlight, {
      propsData: { steps: [makeStep()] },
      scopedSlots: { step1: '<div class="custom-step">Custom content</div>' }
    })
    await flushPromises()
    expect(wrapper.find('.custom-step').exists()).toBe(true)
    expect(wrapper.text()).not.toContain('Step Title')
  })

  it('uses a default margin of [10, 10] when the step does not specify one', async () => {
    wrapper = mount(KitSpotlight, { propsData: { steps: [makeStep()] } })
    await flushPromises()
    expect(wrapper.findComponent(KitSpotlightMask).props('margin')).toEqual([10, 10])
  })

  it('converts a numeric margin into a [margin, margin] pair', async () => {
    wrapper = mount(KitSpotlight, { propsData: { steps: [makeStep({ margin: 20 })] } })
    await flushPromises()
    expect(wrapper.findComponent(KitSpotlightMask).props('margin')).toEqual([20, 20])
  })

  it('keeps an array margin as-is', async () => {
    wrapper = mount(KitSpotlight, { propsData: { steps: [makeStep({ margin: [5, 15] })] } })
    await flushPromises()
    expect(wrapper.findComponent(KitSpotlightMask).props('margin')).toEqual([5, 15])
  })

  it('shows the correct step counter', async () => {
    wrapper = mount(KitSpotlight, {
      propsData: { steps: [makeStep(), makeStep(), makeStep()] }
    })
    await flushPromises()
    expect(wrapper.text()).toContain('1 / 3')
  })

  it('navigates to the next step on ArrowRight', async () => {
    wrapper = mount(KitSpotlight, {
      propsData: { steps: [makeStep({ title: 'First' }), makeStep({ title: 'Second' })] }
    })
    await flushPromises()
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight' }))
    await flushPromises()
    expect(wrapper.text()).toContain('Second')
  })

  it('navigates to the next step on Enter', async () => {
    wrapper = mount(KitSpotlight, {
      propsData: { steps: [makeStep({ title: 'First' }), makeStep({ title: 'Second' })] }
    })
    await flushPromises()
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter' }))
    await flushPromises()
    expect(wrapper.text()).toContain('Second')
  })

  it('navigates back to the previous step on ArrowLeft', async () => {
    wrapper = mount(KitSpotlight, {
      propsData: { steps: [makeStep({ title: 'First' }), makeStep({ title: 'Second' })] }
    })
    await flushPromises()
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight' }))
    await flushPromises()
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft' }))
    await flushPromises()
    expect(wrapper.text()).toContain('First')
  })

  it('does not navigate when the ctrl key is held', async () => {
    wrapper = mount(KitSpotlight, {
      propsData: { steps: [makeStep({ title: 'First' }), makeStep({ title: 'Second' })] }
    })
    await flushPromises()
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight', ctrlKey: true }))
    await flushPromises()
    expect(wrapper.text()).toContain('First')
    expect(wrapper.text()).not.toContain('Second')
  })

  it('emits close on Escape', async () => {
    wrapper = mount(KitSpotlight, { propsData: { steps: [makeStep()] } })
    await flushPromises()
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }))
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('emits close when the Dismiss button is clicked', async () => {
    wrapper = mount(KitSpotlight, { propsData: { steps: [makeStep(), makeStep()] } })
    await flushPromises()
    const dismiss = wrapper.findAll('button').filter(w => w.text() === 'Dismiss').at(0)
    await dismiss.trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('restores the body position and removes itself from the DOM on unmount', async () => {
    wrapper = mount(KitSpotlight, { propsData: { steps: [makeStep()] } })
    await flushPromises()
    const el = wrapper.element
    wrapper.destroy()
    wrapper = null
    expect(document.body.style.position).toBe('static')
    expect(el.parentElement).toBeNull()
  })
})
