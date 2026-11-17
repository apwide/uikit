import { mount } from '@vue/test-utils'
import { h } from 'vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import KitInput from '@components/Form/KitInput.vue'
import KitTextArea from '@components/Form/KitTextArea.vue'
import KitFlag from '@components/Flag/KitFlag.vue'
import KitDatePicker from '@components/Calendar/KitDatePicker.vue'
import KitTimePicker from '@components/Calendar/KitTimePicker.vue'
import KitDateRangePicker from '@components/Calendar/KitDateRangePicker.vue'

const inGroup = (control, errors, controlProps = {}) =>
  mount({ render: () => h(KitFieldGroup, { label: 'Name', errors }, () => h(control, controlProps)) })

describe('KitFieldGroup ties label and errors to its control', () => {
  it.each([
    ['KitInput', KitInput, 'input'],
    ['KitTextArea', KitTextArea, 'textarea']
  ])('%s: labelled, described by the errors and invalid', async (_, control, tag) => {
    const wrapper = inGroup(control, ['Name cannot be empty'])
    const field = wrapper.find(tag)
    const alert = wrapper.find('[role="alert"]')
    expect(wrapper.find(`#${field.attributes('aria-labelledby')}`).text()).toBe('Name')
    expect(field.attributes('aria-describedby')).toBe(alert.attributes('id'))
    expect(alert.text()).toBe('Name cannot be empty')
    expect(field.attributes('aria-invalid')).toBe('true')
  })

  it('no error (or an empty one): not described, not invalid, no error row', () => {
    const wrapper = inGroup(KitInput, [''])
    const field = wrapper.find('input')
    expect(field.attributes('aria-describedby')).toBeUndefined()
    expect(field.attributes('aria-invalid')).toBeUndefined()
    expect(wrapper.findAll('.kit-field-group__error-message')).toHaveLength(0)
    expect(wrapper.find('[role="alert"]').exists()).toBe(true)
  })

  it.each([
    [{ required: '' }, 'true'],
    [{}, undefined]
  ])('group attrs %o -> aria-required=%s', (groupAttrs, expected) => {
    const wrapper = mount({
      render: () => h(KitFieldGroup, { label: 'Name', ...groupAttrs }, () => h(KitInput))
    })
    expect(wrapper.find('input').attributes('aria-required')).toBe(expected)
  })

  it('an aria-label set by the consumer keeps precedence over the group label', () => {
    const field = inGroup(KitInput, [], { 'aria-label': 'Status name' }).find('input')
    expect(field.attributes('aria-label')).toBe('Status name')
    expect(field.attributes('aria-labelledby')).toBeUndefined()
  })

  it('attributes set by the consumer win', () => {
    const wrapper = inGroup(KitInput, ['x'], { 'aria-describedby': 'mine' })
    expect(wrapper.find('input').attributes('aria-describedby')).toBe('mine')
  })
})

describe('KitFlag live region role', () => {
  it.each([
    [{ type: 'success' }, 'status'],
    [{ type: 'info' }, 'status'],
    [{ type: 'error' }, 'alert'],
    [{ type: 'warning' }, 'alert'],
    [{ appearance: 'error' }, 'alert'],
    [{ appearance: 'success' }, 'status']
  ])('%o -> role=%s', (props, role) => {
    const wrapper = mount(KitFlag, { props: { title: 'Saved', ...props } })
    expect(wrapper.find('.kit-flag').attributes('role')).toBe(role)
  })
})

// WCAG 3.3.2 (accessibility audit finding F-010): date and time fields named by the group label, not the placeholder
describe('date and time pickers in a field group', () => {
  const nameOf = (wrapper, input) =>
    input
      .attributes('aria-labelledby')
      .split(' ')
      .map((id) => wrapper.find(`#${id}`).text())
      .join(' ')

  it('date and time sharing a group are named "<label> date" and "<label> time"', () => {
    const wrapper = mount({
      render: () => h(KitFieldGroup, { label: 'Start' }, () => [h(KitDatePicker), h(KitTimePicker)])
    })
    const [date, time] = wrapper.findAll('input')
    expect(nameOf(wrapper, date)).toBe('Start date')
    expect(nameOf(wrapper, time)).toBe('Start time')
  })

  it('a date range is named "<label> from" and "<label> to"', () => {
    const wrapper = mount({ render: () => h(KitFieldGroup, { label: 'Period' }, () => h(KitDateRangePicker)) })
    const [from, to] = wrapper.findAll('input')
    expect(nameOf(wrapper, from)).toBe('Period from')
    expect(nameOf(wrapper, to)).toBe('Period to')
  })

  it('outside a group, or in a group without label, no aria-labelledby', () => {
    expect(mount(KitDatePicker).find('input').attributes('aria-labelledby')).toBeUndefined()
    const wrapper = mount({ render: () => h(KitFieldGroup, null, () => h(KitTimePicker)) })
    expect(wrapper.find('input').attributes('aria-labelledby')).toBeUndefined()
  })
})
