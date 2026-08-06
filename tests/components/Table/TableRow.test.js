import { shallowMount } from '@vue/test-utils'
import TableRow from '@components/Table/TableRow.vue'
import TableRowCell from '@components/Table/TableRowCell.vue'

describe('TableRow', () => {
  const columns = [
    { id: 'name' },
    { id: 'age' }
  ]
  const row = { id: 1, name: 'John Doe', age: 30 }

  it('renders with required props', () => {
    const component = shallowMount(TableRow, {
      propsData: { columns, row }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders as tr element', () => {
    const component = shallowMount(TableRow, {
      propsData: { columns, row }
    })
    expect(component.element.tagName).toBe('TR')
  })

  it('renders with kit-table-row class', () => {
    const component = shallowMount(TableRow, {
      propsData: { columns, row }
    })
    expect(component.classes()).toContain('kit-table-row')
  })

  it('applies custom row class', () => {
    const component = shallowMount(TableRow, {
      propsData: { columns, row: { ...row, clazz: 'custom-row' } }
    })
    expect(component.classes()).toContain('custom-row')
  })

  it('renders one TableRowCell per column', () => {
    const component = shallowMount(TableRow, {
      propsData: { columns, row }
    })
    expect(component.findAllComponents(TableRowCell)).toHaveLength(2)
  })

  it('passes the row value to each TableRowCell', () => {
    const component = shallowMount(TableRow, {
      propsData: { columns, row }
    })
    const cells = component.findAllComponents(TableRowCell)
    expect(cells.at(0).props('value')).toBe('John Doe')
    expect(cells.at(1).props('value')).toBe(30)
  })

  it('emits click event', async () => {
    const component = shallowMount(TableRow, {
      propsData: { columns, row }
    })
    await component.trigger('click')
    expect(component.emitted('click')).toBeTruthy()
  })

  it('emits dblclick event', async () => {
    const component = shallowMount(TableRow, {
      propsData: { columns, row }
    })
    await component.trigger('dblclick')
    expect(component.emitted('dblclick')).toBeTruthy()
  })
})
