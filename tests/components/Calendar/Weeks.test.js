import { shallowMount } from '@vue/test-utils'
import Weeks from '@components/Calendar/Weeks.vue'

function makeDay(date) {
  return {
    date,
    isToday: false,
    isNotSameMonth: false,
    isSelected: false,
    isDisabled: false,
    isHighlighted: false,
    isRangeStart: false,
    isRangeEnd: false
  }
}

const oneWeek = [
  makeDay(new Date(2026, 1, 1)),
  makeDay(new Date(2026, 1, 2)),
  makeDay(new Date(2026, 1, 3)),
  makeDay(new Date(2026, 1, 4)),
  makeDay(new Date(2026, 1, 5)),
  makeDay(new Date(2026, 1, 6)),
  makeDay(new Date(2026, 1, 7))
]

describe('Weeks', () => {
  it('renders with required props', () => {
    const component = shallowMount(Weeks, { propsData: { weeks: [oneWeek] } })
    expect(component.exists()).toBe(true)
  })

  it('renders the 7 weekday headers', () => {
    const component = shallowMount(Weeks, { propsData: { weeks: [] } })
    const headers = component.findAll('th')
    expect(headers).toHaveLength(7)
    expect(headers.at(0).text()).toBe('Sun')
    expect(headers.at(6).text()).toBe('Sat')
  })

  it('renders one row per week', () => {
    const component = shallowMount(Weeks, { propsData: { weeks: [oneWeek, oneWeek] } })
    expect(component.findAll('tr')).toHaveLength(2)
  })

  it('renders one Day per day in the week', () => {
    const component = shallowMount(Weeks, { propsData: { weeks: [oneWeek] } })
    expect(component.findAll('anonymous-stub')).toHaveLength(7)
  })

  it('forwards date-selected from a Day', async () => {
    const component = shallowMount(Weeks, { propsData: { weeks: [oneWeek] } })
    const day = oneWeek[0]
    await component.find('anonymous-stub').vm.$emit('date-selected', day)
    expect(component.emitted('date-selected')).toEqual([[day]])
  })
})
