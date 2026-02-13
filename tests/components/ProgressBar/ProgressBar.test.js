import { shallowMount } from '@vue/test-utils'
import KitProgressBar from '@components/ProgressBar/KitProgressBar.vue'

describe('KitProgressBar', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitProgressBar)
    expect(component.exists()).toBe(true)
  })

  it('renders progress bar element', () => {
    const component = shallowMount(KitProgressBar)
    const progressBar = component.find('.kit-progress-bar')
    expect(progressBar.exists()).toBe(true)
  })

  it('renders progress indicator', () => {
    const component = shallowMount(KitProgressBar)
    const progress = component.find('.progress')
    expect(progress.exists()).toBe(true)
  })

  it('applies default progress of 0', () => {
    const component = shallowMount(KitProgressBar)
    const progress = component.find('.progress')
    expect(progress.attributes('style')).toContain('width: 0%')
  })

  it('applies custom progress value', () => {
    const component = shallowMount(KitProgressBar, {
      propsData: { progress: 50 }
    })
    const progress = component.find('.progress')
    expect(progress.attributes('style')).toContain('width: 50%')
  })

  it('applies 100% progress', () => {
    const component = shallowMount(KitProgressBar, {
      propsData: { progress: 100 }
    })
    const progress = component.find('.progress')
    expect(progress.attributes('style')).toContain('width: 100%')
  })

  it('shows labels by default', () => {
    const component = shallowMount(KitProgressBar)
    const labels = component.find('.labels')
    expect(labels.exists()).toBe(true)
  })

  it('hides labels when showLabels is false', () => {
    const component = shallowMount(KitProgressBar, {
      propsData: { showLabels: false }
    })
    const labels = component.find('.labels')
    expect(labels.exists()).toBe(false)
  })

  it('displays default label "Processing"', () => {
    const component = shallowMount(KitProgressBar)
    const label = component.find('.label')
    expect(label.text()).toBe('Processing')
  })

  it('displays custom label', () => {
    const component = shallowMount(KitProgressBar, {
      propsData: { label: 'Uploading' }
    })
    const label = component.find('.label')
    expect(label.text()).toBe('Uploading')
  })

  it('displays progress percentage', () => {
    const component = shallowMount(KitProgressBar, {
      propsData: { progress: 75 }
    })
    expect(component.text()).toContain('75%')
  })

  it('applies custom transition duration', () => {
    const component = shallowMount(KitProgressBar, {
      propsData: { transitionDuration: '1s' }
    })
    const progress = component.find('.progress')
    expect(progress.attributes('style')).toContain('transition-duration: 1s')
  })

  it('has wrapper element', () => {
    const component = shallowMount(KitProgressBar)
    const wrapper = component.find('.kit-progress-bar-wrapper')
    expect(wrapper.exists()).toBe(true)
  })
})
