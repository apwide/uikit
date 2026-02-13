import { shallowMount } from '@vue/test-utils'
import KitSpotlightHintContainer from '@components/Spotlight/KitSpotlightHintContainer.vue'

describe('KitSpotlightHintContainer', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitSpotlightHintContainer)
    expect(component.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = shallowMount(KitSpotlightHintContainer, {
      slots: { default: '<div class="hint-content">Hint</div>' }
    })
    expect(component.find('.hint-content').exists()).toBe(true)
  })

  it('does not show a step counter when total is not provided', () => {
    const component = shallowMount(KitSpotlightHintContainer)
    expect(component.text()).not.toMatch(/\d+ \/ \d+/)
  })

  it('shows the step counter when step and total are provided', () => {
    const component = shallowMount(KitSpotlightHintContainer, {
      propsData: { step: 0, total: 3 }
    })
    expect(component.text()).toContain('1 / 3')
  })

  it('does not render step controls when step prop is absent', () => {
    const component = shallowMount(KitSpotlightHintContainer, {
      propsData: { total: 3 }
    })
    expect(component.findAll('button')).toHaveLength(0)
  })

  it('on the first step, shows Dismiss and Next but not Go back', () => {
    const component = shallowMount(KitSpotlightHintContainer, {
      propsData: { step: 0, total: 3 }
    })
    expect(component.text()).toContain('Dismiss')
    expect(component.text()).toContain('Next')
    expect(component.text()).not.toContain('Go back')
  })

  it('on a middle step, shows Dismiss, Go back and Next', () => {
    const component = shallowMount(KitSpotlightHintContainer, {
      propsData: { step: 1, total: 3 }
    })
    expect(component.text()).toContain('Dismiss')
    expect(component.text()).toContain('Go back')
    expect(component.text()).toContain('Next')
  })

  it('on the last step, hides Dismiss, shows Go back, and the Next button reads Done', () => {
    const component = shallowMount(KitSpotlightHintContainer, {
      propsData: { step: 2, total: 3 }
    })
    expect(component.text()).not.toContain('Dismiss')
    expect(component.text()).toContain('Go back')
    expect(component.text()).toContain('Done')
    expect(component.text()).not.toContain('Next')
  })

  it('emits close when Dismiss is clicked', async () => {
    const component = shallowMount(KitSpotlightHintContainer, {
      propsData: { step: 0, total: 3 }
    })
    const dismiss = component.findAll('button').filter(w => w.text() === 'Dismiss').at(0)
    await dismiss.trigger('click')
    expect(component.emitted('close')).toBeTruthy()
  })

  it('emits go-to with the previous step when Go back is clicked', async () => {
    const component = shallowMount(KitSpotlightHintContainer, {
      propsData: { step: 1, total: 3 }
    })
    const goBack = component.findAll('button').filter(w => w.text() === 'Go back').at(0)
    await goBack.trigger('click')
    expect(component.emitted('go-to')).toBeTruthy()
    expect(component.emitted('go-to')[0]).toEqual([0])
  })

  it('emits go-to with the next step when Next is clicked and not on the last step', async () => {
    const component = shallowMount(KitSpotlightHintContainer, {
      propsData: { step: 0, total: 3 }
    })
    const next = component.findAll('button').filter(w => w.text() === 'Next').at(0)
    await next.trigger('click')
    expect(component.emitted('go-to')).toBeTruthy()
    expect(component.emitted('go-to')[0]).toEqual([1])
  })

  it('emits close when Done is clicked on the last step', async () => {
    const component = shallowMount(KitSpotlightHintContainer, {
      propsData: { step: 2, total: 3 }
    })
    const done = component.findAll('button').filter(w => w.text() === 'Done').at(0)
    await done.trigger('click')
    expect(component.emitted('close')).toBeTruthy()
    expect(component.emitted('go-to')).toBeFalsy()
  })
})
