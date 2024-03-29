import { shallowMount } from '@vue/test-utils'
import InlineEditButtons from '@/components/Form/InlineEditButtons'

describe('InlineEditButtons', () => {
  it('should emit event on enter', () => {
    const component = shallowMount(InlineEditButtons)
    component.vm.onConfirm()
    expect(component.emitted('confirm')).toBeTruthy()
  })

  it('should emit event on click', () => {
    const component = shallowMount(InlineEditButtons)
    component.vm.onCancel()
    expect(component.emitted('cancel')).toBeTruthy()
  })
})
