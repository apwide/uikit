import { shallowMount } from '@vue/test-utils'
import Months from '@components/Calendar/Months.vue'
import KitButton from '@components/Button/KitButton.vue'

describe('Months', () => {
  it('renders with default props', () => {
    const component = shallowMount(Months)
    expect(component.exists()).toBe(true)
  })

  it('renders all 12 months', () => {
    const component = shallowMount(Months)
    const months = component.findAll('[data-cy="month"]')
    expect(months).toHaveLength(12)
    expect(months.at(0).text()).toBe('January')
    expect(months.at(11).text()).toBe('December')
  })

  it('renders 4 rows of 3 months each', () => {
    const component = shallowMount(Months)
    expect(component.findAll('tr')).toHaveLength(4)
    expect(component.findAll('tr').at(0).findAll('td')).toHaveLength(3)
  })

  it('emits month-selected with the zero-based month index', async () => {
    const component = shallowMount(Months)
    const months = component.findAllComponents(KitButton)
    await months.at(2).vm.$emit('click')
    expect(component.emitted('month-selected')).toEqual([[2]])
  })

  it('emits month-selected with 0 for January', async () => {
    const component = shallowMount(Months)
    await component.findAllComponents(KitButton).at(0).vm.$emit('click')
    expect(component.emitted('month-selected')).toEqual([[0]])
  })
})
