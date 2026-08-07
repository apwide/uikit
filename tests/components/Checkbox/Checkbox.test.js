import { shallowMount } from '@vue/test-utils'
import Checkbox from '@/components/Checkbox/KitCheckbox.vue'

describe('Checkbox', () => {
  it('emits correct value on click', async () => {
    const component = shallowMount(Checkbox, { propsData: { checked: false } })
    const input = component.find('input')
    await input.setChecked()
    // Vue 3 devtools instrumentation also records the native bubbled 'input' DOM event as an
    // 'emit' (matching event name); the genuine v-model emit is always the last recorded call.
    const inputEmits = component.emitted('input')
    const emitted = inputEmits[inputEmits.length - 1]
    expect(emitted).toEqual([true])
  })

  it('check if input is focused when passing is-focued prop and focus event is emitted', async () => {
    const component = shallowMount(Checkbox, {
      propsData: { checked: false, isFocused: true },
      attachTo: document.body
    })
    const input = component.find('input').element
    await component.vm.$nextTick()
    expect(input).toBe(document.activeElement)
    expect(component.emitted('focus')).toBeTruthy()
  })

  it('check if input is disabled when passing disabled', async () => {
    const component = shallowMount(Checkbox, { propsData: { checked: false, disabled: true } })
    const input = component.find('input')
    await input.setChecked()
    expect(input.element.disabled).toBe(true)
    expect(component.emitted('focus')).toBeFalsy()
  })
})
