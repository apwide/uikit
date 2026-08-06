import { shallowMount } from '@vue/test-utils'
import KitDateRenderer from '@components/field-renderers/KitDateRenderer.vue'

describe('KitDateRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitDateRenderer)
    expect(component.exists()).toBe(true)
  })

  it('renders nothing when no date is provided', () => {
    const component = shallowMount(KitDateRenderer)
    expect(component.text()).toBe('')
  })

  it('formats a date string as "dd MMMM yyyy"', () => {
    const component = shallowMount(KitDateRenderer, { propsData: { date: '2026-02-13T12:00:00.000Z' } })
    expect(component.text()).toBe('13 February 2026')
  })

  it('formats a numeric timestamp', () => {
    const timestamp = new Date('2026-01-01T12:00:00.000Z').getTime()
    const component = shallowMount(KitDateRenderer, { propsData: { date: timestamp } })
    expect(component.text()).toBe('01 January 2026')
  })

  it('has the date class', () => {
    const component = shallowMount(KitDateRenderer, { propsData: { date: '2026-02-13T12:00:00.000Z' } })
    expect(component.classes()).toContain('date')
  })
})
