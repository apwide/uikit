import { shallowMount } from '@vue/test-utils'
import Calendar from '@components/Calendar/Calendar.vue'
import Weeks from '@components/Calendar/Weeks.vue'
import CalendarHeader from '@components/Calendar/CalendarHeader.vue'

describe('Calendar', () => {
  it('renders with default props', () => {
    const component = shallowMount(Calendar)
    expect(component.exists()).toBe(true)
  })

  it('has the kit-calendar class', () => {
    const component = shallowMount(Calendar)
    expect(component.classes()).toContain('kit-calendar')
  })

  it('renders the header with data-cy="header"', () => {
    const component = shallowMount(Calendar)
    expect(component.find('[data-cy="header"]').exists()).toBe(true)
  })

  it('shows the weeks/days view by default', () => {
    const component = shallowMount(Calendar, { propsData: { visibleDate: new Date(2026, 1, 15) } })
    expect(component.findComponent(Weeks).exists()).toBe(true)
  })

  it('switches to the months view when change-interval("months") is emitted from the header', async () => {
    const component = shallowMount(Calendar, { propsData: { visibleDate: new Date(2026, 1, 15) } })
    await component.findComponent(CalendarHeader).vm.$emit('change-interval', 'months')
    expect(component.findComponent(Weeks).exists()).toBe(false)
  })

  it('switches to the years view when change-interval("years") is emitted from the header', async () => {
    const component = shallowMount(Calendar, { propsData: { visibleDate: new Date(2026, 1, 15) } })
    await component.findComponent(CalendarHeader).vm.$emit('change-interval', 'years')
    expect(component.findComponent(Weeks).exists()).toBe(false)
  })

  it('emits date-selected with the UTC-converted date when a day is selected', async () => {
    const component = shallowMount(Calendar, { propsData: { visibleDate: new Date(2026, 1, 15), timeZone: 'UTC' } })
    const selectedDay = { date: new Date(2026, 1, 20) }
    await component.findComponent(Weeks).vm.$emit('date-selected', selectedDay)
    expect(component.emitted('date-selected')).toBeTruthy()
    const [emittedDate] = component.emitted('date-selected')[0]
    expect(emittedDate.getUTCDate()).toBe(20)
  })

  it('uses visibleDate to set the initial month and year shown', () => {
    const component = shallowMount(Calendar, { propsData: { visibleDate: new Date(2026, 5, 1) } })
    expect(component.find('[data-cy="header"]').attributes('month')).toBe('June')
    expect(component.find('[data-cy="header"]').attributes('year')).toBe('2026')
  })

  it('defaults rangeValue to false', () => {
    const component = shallowMount(Calendar)
    expect(component.vm.$props.rangeValue).toBe(false)
  })
})
