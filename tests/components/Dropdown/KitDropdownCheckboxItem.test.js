import { shallowMount } from '@vue/test-utils'
import KitDropdownCheckboxItem from '@components/Dropdown/KitDropdownCheckboxItem.vue'
import KitCheckbox from '@components/Checkbox/KitCheckbox.vue'
import KitButton from '@components/Button/KitButton.vue'

describe('KitDropdownCheckboxItem', () => {
  it('renders with required checked prop', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { checked: false }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders with kit-dropdown-checkbox-item class', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { checked: false }
    })
    expect(component.classes()).toContain('kit-dropdown-checkbox-item')
  })

  it('renders slot content', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { checked: false },
      slots: { default: 'Option label' }
    })
    expect(component.text()).toContain('Option label')
  })

  it('passes checked and value to KitCheckbox', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { checked: true, value: 'option-1' }
    })
    const checkbox = component.findComponent(KitCheckbox)
    expect(checkbox.props('checked')).toBe(true)
    expect(checkbox.props('value')).toBe('option-1')
  })

  it('accepts an array as checked value', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { checked: ['a', 'b'] }
    })
    const checkbox = component.findComponent(KitCheckbox)
    expect(checkbox.props('checked')).toEqual(['a', 'b'])
  })

  it('emits update:checked event when KitCheckbox emits update:checked', async () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { checked: false }
    })
    await component.findComponent(KitCheckbox).vm.$emit('update:checked', true)
    expect(component.emitted('update:checked')).toBeTruthy()
    expect(component.emitted('update:checked')[0]).toEqual([true])
  })

  it('does not render the "only" button when checked is a boolean', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { checked: false, value: 'option-1' }
    })
    expect(component.findComponent(KitButton).exists()).toBe(false)
  })

  it('renders the "only" button when checked is an array and value is set', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { checked: ['option-1'], value: 'option-1' }
    })
    expect(component.findComponent(KitButton).exists()).toBe(true)
  })

  it('hides the "only" button when showOnlyButton is false', () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { checked: ['option-1'], value: 'option-1', showOnlyButton: false }
    })
    expect(component.findComponent(KitButton).exists()).toBe(false)
  })

  it('emits update:checked with only this value when the "only" button is clicked', async () => {
    const component = shallowMount(KitDropdownCheckboxItem, {
      propsData: { checked: ['option-1', 'option-2'], value: 'option-1' }
    })
    await component.findComponent(KitButton).vm.$emit('click')
    expect(component.emitted('update:checked')).toBeTruthy()
    expect(component.emitted('update:checked')[0]).toEqual([['option-1']])
  })
})
