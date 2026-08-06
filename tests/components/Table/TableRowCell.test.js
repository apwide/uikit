import { shallowMount } from '@vue/test-utils'
import TableRowCell from '@components/Table/TableRowCell.vue'

describe('TableRowCell', () => {
  it('renders with default props', () => {
    const component = shallowMount(TableRowCell)
    expect(component.exists()).toBe(true)
  })

  it('renders as td element', () => {
    const component = shallowMount(TableRowCell)
    expect(component.element.tagName).toBe('TD')
  })

  it('renders with kit-table-row-cell class', () => {
    const component = shallowMount(TableRowCell)
    expect(component.classes()).toContain('kit-table-row-cell')
  })

  it('renders the value by default', () => {
    const component = shallowMount(TableRowCell, {
      propsData: { value: 'John Doe' }
    })
    expect(component.text()).toContain('John Doe')
  })

  it('renders custom slot content instead of the default value', () => {
    const component = shallowMount(TableRowCell, {
      propsData: { value: 'John Doe' },
      scopedSlots: { default: '<span class="custom-cell">Custom</span>' }
    })
    expect(component.find('.custom-cell').exists()).toBe(true)
    expect(component.text()).not.toContain('John Doe')
  })

  it('exposes value and isActiveRow to the default slot', () => {
    const component = shallowMount(TableRowCell, {
      propsData: { value: 'John Doe', isActiveRow: true },
      scopedSlots: {
        default: '<span class="slot-value">{{ props.value }}-{{ props.isActiveRow }}</span>'
      }
    })
    expect(component.find('.slot-value').text()).toBe('John Doe-true')
  })
})
