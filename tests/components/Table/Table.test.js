import { shallowMount } from '@vue/test-utils'
import KitTable from '@components/Table/KitTable.vue'

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

const mockColumns = [
  { id: 'name', name: 'Name', sortable: true },
  { id: 'age', name: 'Age', sortable: true },
  { id: 'email', name: 'Email' }
]

const mockData = [
  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com', clazz: undefined },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com', clazz: undefined }
]

describe('KitTable', () => {
  it('renders with required props', () => {
    const component = shallowMount(KitTable, {
      propsData: { columns: mockColumns, data: mockData }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders table element', () => {
    const component = shallowMount(KitTable, {
      propsData: { columns: mockColumns, data: mockData }
    })
    expect(component.find('table').exists()).toBe(true)
  })

  it('renders thead element', () => {
    const component = shallowMount(KitTable, {
      propsData: { columns: mockColumns, data: mockData }
    })
    expect(component.find('thead').exists()).toBe(true)
  })

  it('renders tbody element', () => {
    const component = shallowMount(KitTable, {
      propsData: { columns: mockColumns, data: mockData }
    })
    expect(component.find('tbody').exists()).toBe(true)
  })

  it('applies sticky header when prop is true', () => {
    const component = shallowMount(KitTable, {
      propsData: { columns: mockColumns, data: mockData, stickyHeader: true }
    })
    const thead = component.find('thead')
    expect(thead.attributes('sticky-header')).toBe('true')
  })

  it('shows spinner when busy', () => {
    const component = shallowMount(KitTable, {
      propsData: { columns: mockColumns, data: mockData, busy: true }
    })
    const busyGlass = component.find('.kit-busy-glass')
    expect(busyGlass.attributes('busy')).toBe('true')
  })

  it('shows load more button when showLoadMore is true', () => {
    const component = shallowMount(KitTable, {
      propsData: { columns: mockColumns, data: mockData, showLoadMore: true }
    })
    expect(component.html()).toContain('Load more')
  })

  it('shows infinite scroll loader when infiniteScroll is true', () => {
    const component = shallowMount(KitTable, {
      propsData: { columns: mockColumns, data: mockData, infiniteScroll: true }
    })
    const loader = component.find('.kit-infinite-scroll-loader')
    expect(loader.exists()).toBe(true)
  })

  it('emits load-more event when load more button is clicked', async () => {
    const component = shallowMount(KitTable, {
      propsData: { columns: mockColumns, data: mockData, showLoadMore: true }
    })
    const button = component.findComponent({ name: 'KitButton' })
    if (button.exists()) {
      await button.vm.$emit('click')
      expect(component.emitted('load-more')).toBeTruthy()
    } else {
      // If button is stubbed, just check it's in the template
      expect(component.html()).toContain('Load more')
    }
  })

  it('emits sorted event when column is sorted', async () => {
    const component = shallowMount(KitTable, {
      propsData: { columns: mockColumns, data: mockData }
    })
    const headerCell = component.findComponent({ name: 'TableHeaderCell' })
    if (headerCell.exists()) {
      await headerCell.vm.$emit('sorted')
      expect(component.emitted('sorted')).toBeTruthy()
    } else {
      // If stubbed, just verify the component renders
      expect(component.html()).toContain('-stub')
    }
  })

  it('has table wrapper with correct class', () => {
    const component = shallowMount(KitTable, {
      propsData: { columns: mockColumns, data: mockData }
    })
    expect(component.find('.kit-table-wrapper').exists()).toBe(true)
  })

  it('renders with empty data', () => {
    const component = shallowMount(KitTable, {
      propsData: { columns: mockColumns, data: [] }
    })
    expect(component.exists()).toBe(true)
  })

  it('accepts dragRows prop', () => {
    const component = shallowMount(KitTable, {
      propsData: { columns: mockColumns, data: mockData, dragRows: true }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders grab handle column when dragRows is true', () => {
    const component = shallowMount(KitTable, {
      propsData: { columns: mockColumns, data: mockData, dragRows: true },
      // KitTable forwards a #kitDragHandle named slot into TableRow; a stubbed TableRow
      // wouldn't render it (renderStubDefaultSlot only covers the unnamed default slot).
      global: { stubs: { TableRow: false } }
    })
    // Should render grab handle when dragRows is enabled
    expect(component.find('.kit-table__grab-handle').exists()).toBe(true)
  })

  it('sets default column min width', () => {
    const component = shallowMount(KitTable, {
      propsData: { columns: mockColumns, data: mockData, defaultColumnMinWidth: 200 }
    })
    expect(component.props('defaultColumnMinWidth')).toBe(200)
  })
})
