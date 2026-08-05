import { shallowMount } from '@vue/test-utils'
import DateRenderer from '@components/field-renderers/DateRenderer.vue'

describe('DateRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(DateRenderer)
    expect(component.exists()).toBe(true)
  })

  it('renders nothing when no date is provided', () => {
    const component = shallowMount(DateRenderer)
    expect(component.text()).toBe('')
  })

  it('formats a date string as "dd MMMM yyyy"', () => {
    const component = shallowMount(DateRenderer, { propsData: { date: '2026-02-13T12:00:00.000Z' } })
    expect(component.text()).toBe('13 February 2026')
  })

  it('formats a numeric timestamp', () => {
    const timestamp = new Date('2026-01-01T12:00:00.000Z').getTime()
    const component = shallowMount(DateRenderer, { propsData: { date: timestamp } })
    expect(component.text()).toBe('01 January 2026')
  })

  it('has the date class', () => {
    const component = shallowMount(DateRenderer, { propsData: { date: '2026-02-13T12:00:00.000Z' } })
    expect(component.classes()).toContain('date')
  })
})
