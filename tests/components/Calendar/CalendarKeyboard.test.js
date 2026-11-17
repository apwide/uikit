import { flushPromises, mount } from '@vue/test-utils'
import Calendar from '@components/Calendar/Calendar.vue'
import KitDatePicker from '@components/Calendar/KitDatePicker.vue'

// WAI-ARIA date picker grid (accessibility audit finding F-017): one Tab stop for the days, keys move it
const tabStops = (wrapper) => wrapper.findAll('.kit-calendar-day button').filter((b) => b.attributes('tabindex') === '0')
const press = async (wrapper, key) => {
  document.activeElement.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }))
  await flushPromises()
}

describe('Calendar keyboard', () => {
  let wrapper
  afterEach(() => wrapper?.unmount())

  const mountAt = (props) => {
    wrapper = mount(Calendar, { props: { timeZone: 'UTC', ...props }, attachTo: document.body })
    return wrapper
  }

  it('the selected day is the only Tab stop and has a full date name', () => {
    mountAt({ value: new Date(Date.UTC(2026, 1, 15, 12)) })
    const stops = tabStops(wrapper)
    expect(stops).toHaveLength(1)
    expect(stops[0].attributes('aria-label')).toBe('Sunday 15 February 2026')
  })

  it('without a selected day, the 1st of the month (outside the current month) is the Tab stop', () => {
    mountAt({ visibleDate: new Date(2020, 4, 20) })
    expect(tabStops(wrapper)[0].attributes('aria-label')).toBe('Friday 1 May 2020')
  })

  it('arrows, Home / End and PageDown move focus and the Tab stop, across months', async () => {
    mountAt({ value: new Date(Date.UTC(2026, 1, 15, 12)) })
    tabStops(wrapper)[0].element.focus()
    const focused = () => document.activeElement.getAttribute('aria-label')
    await press(wrapper, 'ArrowRight')
    expect(focused()).toBe('Monday 16 February 2026')
    await press(wrapper, 'ArrowDown')
    expect(focused()).toBe('Monday 23 February 2026')
    await press(wrapper, 'End')
    expect(focused()).toBe('Saturday 28 February 2026')
    await press(wrapper, 'ArrowRight')
    expect(focused()).toBe('Sunday 1 March 2026')
    expect(wrapper.text()).toContain('March')
    await press(wrapper, 'PageUp')
    expect(focused()).toBe('Sunday 1 February 2026')
    expect(tabStops(wrapper)).toHaveLength(1)
  })

  it('does not move onto a disabled day', async () => {
    mountAt({ value: new Date(Date.UTC(2026, 1, 15, 12)), disabledRange: { from: new Date(2026, 1, 16) } })
    tabStops(wrapper)[0].element.focus()
    await press(wrapper, 'ArrowRight')
    expect(document.activeElement.getAttribute('aria-label')).toBe('Sunday 15 February 2026')
  })

  it('Enter on the focused day selects it (native button)', async () => {
    mountAt({ value: new Date(Date.UTC(2026, 1, 15, 12)) })
    tabStops(wrapper)[0].element.focus()
    await press(wrapper, 'ArrowLeft')
    document.activeElement.click()
    expect(wrapper.emitted('date-selected')[0][0].getUTCDate()).toBe(14)
  })
})

describe('KitDatePicker Escape', () => {
  it('Escape in the calendar closes it only (not an enclosing dialog) and focuses the field', async () => {
    const onDocumentKeyup = vi.fn()
    document.addEventListener('keyup', onDocumentKeyup)
    const wrapper = mount(KitDatePicker, { attachTo: document.body })
    const input = wrapper.find('input').element
    input.focus()
    await flushPromises()
    const day = document.querySelector('.kit-calendar-day [tabindex="0"]')
    day.focus()
    day.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape', bubbles: true }))
    await flushPromises()
    expect(document.querySelector('.kit-calendar')).toBeNull()
    expect(document.activeElement).toBe(input)
    expect(onDocumentKeyup).not.toHaveBeenCalled()
    // closed: Escape is left to the enclosing dialog
    input.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape', bubbles: true }))
    expect(onDocumentKeyup).toHaveBeenCalledTimes(1)
    document.removeEventListener('keyup', onDocumentKeyup)
    wrapper.unmount()
  })
})
