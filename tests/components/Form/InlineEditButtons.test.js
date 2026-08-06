import { shallowMount } from '@vue/test-utils'
import InlineEditButtons from '@components/Form/InlineEditButtons.vue'
import KitIconButton from '@components/Button/KitIconButton.vue'

const findByDataCy = (component, dataCy) =>
  component.findAllComponents(KitIconButton).find(w => w.attributes('data-cy') === dataCy)

describe('InlineEditButtons', () => {
  it('renders with default props', () => {
    const component = shallowMount(InlineEditButtons)
    expect(component.exists()).toBe(true)
  })

  it('renders a submit and a cancel button', () => {
    const component = shallowMount(InlineEditButtons)
    expect(component.find('[data-cy="submit-button"]').exists()).toBe(true)
    expect(component.find('[data-cy="cancel-button"]').exists()).toBe(true)
  })

  it('emits confirm when the submit button is clicked', () => {
    const component = shallowMount(InlineEditButtons)
    findByDataCy(component, 'submit-button').vm.$emit('click')
    expect(component.emitted('confirm')).toBeTruthy()
  })

  it('emits cancel when the cancel button is pressed (mousedown)', () => {
    const component = shallowMount(InlineEditButtons)
    findByDataCy(component, 'cancel-button').vm.$emit('mousedown')
    expect(component.emitted('cancel')).toBeTruthy()
  })

  it('emits focus with the original event from either button', () => {
    const component = shallowMount(InlineEditButtons)
    const event = { type: 'focus' }
    findByDataCy(component, 'submit-button').vm.$emit('focus', event)
    expect(component.emitted('focus')).toEqual([[event]])
  })

  it('emits blur with the original event from either button', () => {
    const component = shallowMount(InlineEditButtons)
    const event = { type: 'blur' }
    findByDataCy(component, 'cancel-button').vm.$emit('blur', event)
    expect(component.emitted('blur')).toEqual([[event]])
  })
})
