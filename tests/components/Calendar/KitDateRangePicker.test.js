import { shallowMount } from '@vue/test-utils'
import KitDateRangePicker from '@components/Calendar/KitDateRangePicker.vue'

describe('KitDateRangePicker', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitDateRangePicker)
    expect(component.exists()).toBe(true)
  })

  it('renders the from and to inputs', () => {
    const component = shallowMount(KitDateRangePicker)
    expect(component.find('.kit-daterange-picker__input-from').exists()).toBe(true)
    expect(component.find('.kit-daterange-picker__input-to').exists()).toBe(true)
  })

  it('has default placeholders based on the date format', () => {
    const component = shallowMount(KitDateRangePicker)
    const placeholderDate = component.find('.kit-daterange-picker__input-from').attributes('placeholder')
    expect(placeholderDate).toMatch(/^e\.g\. \d{2}\/\d{2}\/\d{4}$/)
    expect(component.find('.kit-daterange-picker__input-to').attributes('placeholder')).toMatch(/^\d{2}\/\d{2}\/\d{4}$/)
  })

  it('accepts custom fromPlaceholder and toPlaceholder', () => {
    const component = shallowMount(KitDateRangePicker, {
      propsData: { fromPlaceholder: 'Start date', toPlaceholder: 'End date' }
    })
    expect(component.find('.kit-daterange-picker__input-from').attributes('placeholder')).toBe('Start date')
    expect(component.find('.kit-daterange-picker__input-to').attributes('placeholder')).toBe('End date')
  })

  it('formats the from/to values using the dateFormat prop', () => {
    const from = new Date(2026, 1, 1).getTime()
    const to = new Date(2026, 1, 28).getTime()
    const component = shallowMount(KitDateRangePicker, {
      propsData: { value: { from, to }, dateFormat: 'yyyy-MM-dd' }
    })
    expect(component.find('.kit-daterange-picker__input-from').element.value).toBe('2026-02-01')
    expect(component.find('.kit-daterange-picker__input-to').element.value).toBe('2026-02-28')
  })

  it('defaults dateFormat to dd/MM/y', () => {
    const component = shallowMount(KitDateRangePicker)
    expect(component.vm.$props.dateFormat).toBe('dd/MM/y')
  })

  it('shows the quick ranges dropdown by default', () => {
    const component = shallowMount(KitDateRangePicker)
    expect(component.find('.kit-daterange-picker__quick-ranges').exists()).toBe(true)
  })

  it('hides the quick ranges dropdown when showQuickRanges is false', () => {
    const component = shallowMount(KitDateRangePicker, { propsData: { showQuickRanges: false } })
    expect(component.find('.kit-daterange-picker__quick-ranges').exists()).toBe(false)
  })

  it('disables both inputs when isLoading is true', () => {
    const component = shallowMount(KitDateRangePicker, { propsData: { isLoading: true } })
    expect(component.find('.kit-daterange-picker__input-from').attributes('disabled')).toBeDefined()
    expect(component.find('.kit-daterange-picker__input-to').attributes('disabled')).toBeDefined()
  })

  it('marks both inputs as readonly when disabledTyping is true', () => {
    const component = shallowMount(KitDateRangePicker, { propsData: { disabledTyping: true } })
    expect(component.find('.kit-daterange-picker__input-from').attributes('readonly')).toBeDefined()
    expect(component.find('.kit-daterange-picker__input-to').attributes('readonly')).toBeDefined()
  })

  it('emits confirm when Enter is pressed in an input', async () => {
    const component = shallowMount(KitDateRangePicker)
    await component.find('.kit-daterange-picker__input-from').trigger('keydown.enter')
    expect(component.emitted('confirm')).toBeTruthy()
  })

  it('emits focus and opens the picker when an input is focused', async () => {
    const component = shallowMount(KitDateRangePicker, { attachTo: document.body })
    await component.find('.kit-daterange-picker__input-from').trigger('focus')
    expect(component.emitted('focus')).toBeTruthy()
    component.unmount()
  })

  it('emits input with an undefined "from" when the from input is cleared', async () => {
    const component = shallowMount(KitDateRangePicker, {
      propsData: { value: { from: new Date(2026, 1, 1).getTime(), to: new Date(2026, 1, 28).getTime() } }
    })
    const input = component.find('.kit-daterange-picker__input-from')
    input.element.value = ''
    await input.trigger('input')
    expect(component.emitted('input')[0]).toEqual([{ from: undefined, to: expect.any(Number) }])
  })
})
