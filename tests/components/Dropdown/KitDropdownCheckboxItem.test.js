import { shallowMount } from '@vue/test-utils'
import KitDropdownCheckboxItem from '@components/Dropdown/KitDropdownCheckboxItem.vue'
import KitCheckbox from '@components/Checkbox/KitCheckbox.vue'
import KitButton from '@components/Button/KitButton.vue'

describe('KitDropdownCheckboxItem', () => {
  it('renders with required checked prop', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { modelValue: false }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders with kit-dropdown-checkbox-item class', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { modelValue: false }
    })
    expect(component.classes()).toContain('kit-dropdown-checkbox-item')
  })

  it('renders slot content', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { modelValue: false },
      slots: { default: 'Option label' }
    })
    expect(component.text()).toContain('Option label')
  })

  it('passes checked and value to KitCheckbox', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { modelValue: true, value: 'option-1' }
    })
    const checkbox = component.findComponent(KitCheckbox)
    expect(checkbox.props('modelValue')).toBe(true)
    expect(checkbox.props('value')).toBe('option-1')
  })

  it('accepts an array as checked value', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { modelValue: ['a', 'b'] }
    })
    const checkbox = component.findComponent(KitCheckbox)
    expect(checkbox.props('modelValue')).toEqual(['a', 'b'])
  })

  it('emits update:modelValue event when KitCheckbox emits update:modelValue', async () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { modelValue: false }
    })
    await component.findComponent(KitCheckbox).vm.$emit('update:modelValue', true)
    expect(component.emitted('update:modelValue')).toBeTruthy()
    expect(component.emitted('update:modelValue')[0]).toEqual([true])
  })

  it('does not render the "only" button when checked is a boolean', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { modelValue: false, value: 'option-1' }
    })
    expect(component.findComponent(KitButton).exists()).toBe(false)
  })

  it('renders the "only" button when checked is an array and value is set', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { modelValue: ['option-1'], value: 'option-1' }
    })
    expect(component.findComponent(KitButton).exists()).toBe(true)
  })

  it('hides the "only" button when showOnlyButton is false', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { modelValue: ['option-1'], value: 'option-1', showOnlyButton: false }
    })
    expect(component.findComponent(KitButton).exists()).toBe(false)
  })

  it('emits update:modelValue with only this value when the "only" button is clicked', async () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { modelValue: ['option-1', 'option-2'], value: 'option-1' }
    })
    await component.findComponent(KitButton).vm.$emit('click')
    expect(component.emitted('update:modelValue')).toBeTruthy()
    expect(component.emitted('update:modelValue')[0]).toEqual([['option-1']])
  })
})
