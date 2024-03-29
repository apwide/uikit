import { shallowMount } from '@vue/test-utils'
import InlineEditViewContent from '@/components/Form/InlineEditViewContent'

describe('InlineEditViewContent', () => {
  it('should emit event on enter', () => {
    const component = shallowMount(InlineEditViewContent)
    component.trigger('keyup.enter')
    expect(component.emitted('edit-requested')).toBeTruthy()
  })

  it('should emit event on click', () => {
    const component = shallowMount(InlineEditViewContent)
    component.trigger('click')
    expect(component.emitted('edit-requested')).toBeTruthy()
  })
})
