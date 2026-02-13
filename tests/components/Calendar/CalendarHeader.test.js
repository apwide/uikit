import { shallowMount } from '@vue/test-utils'
import CalendarHeader from '@components/Calendar/CalendarHeader.vue'
import KitIconButton from '@components/Button/KitIconButton.vue'

describe('CalendarHeader', () => {
  const requiredProps = { month: 'January', year: 2026, decade: '2020 - 2029' }

  it('renders with required props', () => {
    const component = shallowMount(CalendarHeader, { propsData: requiredProps })
    expect(component.exists()).toBe(true)
  })

  it('shows "month year" for the days interval', () => {
    const component = shallowMount(CalendarHeader, { propsData: { ...requiredProps, currentInterval: 'days' } })
    expect(component.find('.interval').text()).toBe('January 2026')
  })

  it('shows the year for the months interval', () => {
    const component = shallowMount(CalendarHeader, { propsData: { ...requiredProps, currentInterval: 'months' } })
    expect(component.find('.interval').text()).toBe('2026')
  })

  it('shows the decade for the years interval', () => {
    const component = shallowMount(CalendarHeader, { propsData: { ...requiredProps, currentInterval: 'years' } })
    expect(component.find('.interval').text()).toBe('2020 - 2029')
  })

  it('defaults currentInterval to days', () => {
    const component = shallowMount(CalendarHeader, { propsData: requiredProps })
    expect(component.vm.$props.currentInterval).toBe('days')
  })

  it('marks the interval as non-clickable when on the years interval', () => {
    const component = shallowMount(CalendarHeader, { propsData: { ...requiredProps, currentInterval: 'years' } })
    expect(component.find('.interval').attributes('interval')).toBe('years')
  })

  it('switches from days to months when the header is clicked', async () => {
    const component = shallowMount(CalendarHeader, { propsData: { ...requiredProps, currentInterval: 'days' } })
    await component.find('.interval').trigger('click')
    expect(component.emitted('change-interval')).toEqual([['months']])
  })

  it('switches from months to years when the header is clicked', async () => {
    const component = shallowMount(CalendarHeader, { propsData: { ...requiredProps, currentInterval: 'months' } })
    await component.find('.interval').trigger('click')
    expect(component.emitted('change-interval')).toEqual([['years']])
  })

  it('emits a decrementing move function when the previous month button is clicked', async () => {
    const component = shallowMount(CalendarHeader, { propsData: { ...requiredProps, currentInterval: 'days' } })
    const prevButton = component.findAllComponents(KitIconButton).find(w => w.attributes('title') === 'Previous month')
    await prevButton.vm.$emit('click')
    const emittedEvents = component.emitted()
    const moveEvent = emittedEvents.next || emittedEvents.prev
    expect(moveEvent).toBeTruthy()
    const [moveFn] = moveEvent[0]
    const result = moveFn(new Date(2026, 0, 15))
    expect(result.getMonth()).toBe(11)
  })

  it('emits an incrementing move function when the next month button is clicked', async () => {
    const component = shallowMount(CalendarHeader, { propsData: { ...requiredProps, currentInterval: 'days' } })
    const nextButton = component.findAllComponents(KitIconButton).find(w => w.attributes('title') === 'Next month')
    await nextButton.vm.$emit('click')
    const emittedEvents = component.emitted()
    const moveEvent = emittedEvents.next || emittedEvents.prev
    expect(moveEvent).toBeTruthy()
    const [moveFn] = moveEvent[0]
    const result = moveFn(new Date(2026, 0, 15))
    expect(result.getMonth()).toBe(1)
  })
})
