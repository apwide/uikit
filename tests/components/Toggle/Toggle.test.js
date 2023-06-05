import { shallowMount } from '@vue/test-utils'
import Toggle from '@/components/Toggle/Toggle'

describe('Toggle', () => {
  it('renders correct content for a button', async () => {
    const component = shallowMount(Toggle, {
      attachTo: document.body
    })
    await component.trigger('click')
    expect(component.emitted('input')).toBeTruthy()
  })
})
