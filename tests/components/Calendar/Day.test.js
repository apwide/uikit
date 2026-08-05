import { shallowMount } from '@vue/test-utils'
import Day from '@components/Calendar/Day.vue'

function makeDay(overrides = {}) {
  return {
    date: new Date(2026, 1, 14),
    isToday: false,
    isNotSameMonth: false,
    isSelected: false,
    isDisabled: false,
    isHighlighted: false,
    isRangeStart: false,
    isRangeEnd: false,
    ...overrides
  }
}

describe('Day', () => {
  it('renders with required props', () => {
    const component = shallowMount(Day, { propsData: { day: makeDay() } })
    expect(component.exists()).toBe(true)
  })

  it('renders the day number', () => {
    const component = shallowMount(Day, { propsData: { day: makeDay() } })
    expect(component.text()).toBe('14')
  })

  it('sets the highlighted attribute when the day is highlighted', () => {
    const component = shallowMount(Day, { propsData: { day: makeDay({ isHighlighted: true }) } })
    expect(component.attributes('highlighted')).toBe('true')
  })

  it('does not set the highlighted attribute by default', () => {
    const component = shallowMount(Day, { propsData: { day: makeDay() } })
    expect(component.attributes('highlighted')).toBeUndefined()
  })

  it('sets range-start and range-end attributes', () => {
    const component = shallowMount(Day, {
      propsData: { day: makeDay({ isRangeStart: true, isRangeEnd: true }) }
    })
    expect(component.attributes('range-start')).toBe('true')
    expect(component.attributes('range-end')).toBe('true')
  })

  it('forwards isDisabled to the day button', () => {
    const component = shallowMount(Day, { propsData: { day: makeDay({ isDisabled: true }) } })
    expect(component.find('anonymous-stub').attributes('disabled')).toBe('true')
  })

  it('forwards isToday, isNotSameMonth and isSelected to the day button', () => {
    const component = shallowMount(Day, {
      propsData: { day: makeDay({ isToday: true, isNotSameMonth: true, isSelected: true }) }
    })
    const button = component.find('anonymous-stub')
    expect(button.attributes('today')).toBe('true')
    expect(button.attributes('is-not-same-month')).toBe('true')
    expect(button.attributes('isselected')).toBe('true')
  })

  it('emits date-selected with the day object on click', async () => {
    const day = makeDay()
    const component = shallowMount(Day, { propsData: { day } })
    const fakeEvent = { stopPropagation: jest.fn() }
    await component.find('anonymous-stub').vm.$emit('click', fakeEvent)
    expect(component.emitted('date-selected')).toEqual([[day]])
  })
})
