import { shallowMount } from '@vue/test-utils'
import Years from '@components/Calendar/Years.vue'

describe('Years', () => {
  const yearsOfDecade = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029]

  it('renders with required props', () => {
    const component = shallowMount(Years, { propsData: { yearsOfDecade } })
    expect(component.exists()).toBe(true)
  })

  it('renders all years of the decade', () => {
    const component = shallowMount(Years, { propsData: { yearsOfDecade } })
    const years = component.findAll('anonymous-stub')
    expect(years).toHaveLength(10)
    expect(years.at(0).text()).toBe('2020')
    expect(years.at(9).text()).toBe('2029')
  })

  it('chunks the years into rows of 5', () => {
    const component = shallowMount(Years, { propsData: { yearsOfDecade } })
    const rows = component.findAll('tr')
    expect(rows).toHaveLength(2)
    expect(rows.at(0).findAll('td')).toHaveLength(5)
  })

  it('emits year-selected with the clicked year', async () => {
    const component = shallowMount(Years, { propsData: { yearsOfDecade } })
    await component.findAll('anonymous-stub').at(3).vm.$emit('click')
    expect(component.emitted('year-selected')).toEqual([[2023]])
  })
})
