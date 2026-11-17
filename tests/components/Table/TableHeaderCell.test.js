import { shallowMount } from '@vue/test-utils'
import TableHeaderCell from '@components/Table/TableHeaderCell.vue'

describe('TableHeaderCell', () => {
  const column = { id: 'name', name: 'Name' }
  const sortableColumn = { id: 'age', name: 'Age', sortable: true, width: 120 }

  it('renders with required column prop', () => {
    const component = shallowMount(TableHeaderCell, {
      propsData: { column }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders as th element', () => {
    const component = shallowMount(TableHeaderCell, {
      propsData: { column }
    })
    expect(component.element.tagName).toBe('TH')
  })

  // WCAG 1.3.1 (accessibility audit finding F-013): no empty header for action / drag handle columns
  it('renders the label of a column without a name as visually hidden header text', () => {
    const component = shallowMount(TableHeaderCell, { propsData: { column: { id: 'actions', name: '', label: 'Actions' } } })
    expect(component.element.tagName).toBe('TH')
    expect(component.find('.kit-table-header-cell__hidden-label').text()).toBe('Actions')
  })

  it('does not render the label when the column has a name', () => {
    const component = shallowMount(TableHeaderCell, { propsData: { column: { id: 'n', name: 'Name', label: 'Hidden' } } })
    expect(component.find('.kit-table-header-cell__hidden-label').exists()).toBe(false)
  })

  it('renders column name by default', () => {
    const component = shallowMount(TableHeaderCell, {
      propsData: { column }
    })
    expect(component.text()).toContain('Name')
  })

  it('renders header slot content when provided', () => {
    const component = shallowMount(TableHeaderCell, {
      propsData: { column },
      slots: { header: '<span class="custom-header">Custom</span>' }
    })
    expect(component.find('.custom-header').exists()).toBe(true)
  })

  it('is not sortable by default', () => {
    const component = shallowMount(TableHeaderCell, {
      propsData: { column }
    })
    expect(component.attributes('sortable')).toBeUndefined()
  })

  it('is sortable when column.sortable is true', () => {
    const component = shallowMount(TableHeaderCell, {
      propsData: { column: sortableColumn }
    })
    expect(component.attributes('sortable')).toBe('true')
  })

  it('applies column width as style when provided', () => {
    const component = shallowMount(TableHeaderCell, {
      propsData: { column: sortableColumn }
    })
    expect(component.element.style.width).toBe('120px')
  })

  it('applies auto width when column has no width', () => {
    const component = shallowMount(TableHeaderCell, {
      propsData: { column }
    })
    expect(component.element.style.width).toBe('auto')
  })

  it('emits sorted event on click when sortable', async () => {
    const component = shallowMount(TableHeaderCell, {
      propsData: { column: sortableColumn }
    })
    await component.trigger('click')
    expect(component.emitted('sorted')).toBeTruthy()
  })

  it('does not emit sorted event on click when not sortable', async () => {
    const component = shallowMount(TableHeaderCell, {
      propsData: { column }
    })
    await component.trigger('click')
    expect(component.emitted('sorted')).toBeFalsy()
  })
})
