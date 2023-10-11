import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Select from '@/components/Select/Select.vue'
import SelectMenu from '@/components/Select/SelectMenu.vue'
import TextField from '@/components/Form/TextField.vue'
import Tag from '@/components/Select/Tag.vue'
import Icons from '@/components/Select/Icons.vue'

const options = ['foo', 'bar', 'baz']
const normalizer = (option) => ({ id: option.id, label: option.id, value: option })
const stubs = { Icons }

global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document
  }
})

describe('Select', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-unused-expressions
    document.activeElement && document.activeElement.blur()
  })

  test('input gets focused on select click', async () => {
    const component = mount(Select, {
      propsData: { value: 'foo', options },
      attachTo: document.body
    })
    component.findComponent(TextField).trigger('click')
    await nextTick()

    const input = component.find('input').element

    expect(input).toBe(document.activeElement)
    expect(component.emitted('focus')).toBeTruthy()
    expect(component.emitted('open')).toBeTruthy()
  })

  test('hide options list on input blur', async () => {
    const component = mount(Select, {
      propsData: {
        value: 'foo',
        options
      }
    })

    await nextTick()
    const input = component.find('input')
    input.trigger('click')
    await nextTick()
    expect(component.findComponent(SelectMenu).isVisible()).toBe(true)
    input.trigger('blur')
    await nextTick()
    expect(() => component.getComponent(SelectMenu)).toThrowError()
  })

  test('options list are visible on select click', async () => {
    const component = mount(Select, { propsData: { value: 'foo', options } })
    component.findComponent(TextField).trigger('click')
    await nextTick()

    const menu = component.findComponent(SelectMenu)

    expect(menu.exists()).toBe(true)
  })

  test('should preselect passed array of options', () => {
    const [a, b] = options
    const component = mount(Select, { propsData: { value: [a, b], options, multi: true } })

    expect(component.findAllComponents(Tag).at(0).props('tag').label).toBe(a)
    expect(component.findAllComponents(Tag).at(1).props('tag').label).toBe(b)
  })

  test('should reset search input after option selected', () => {
    const component = mount(Select, {
      propsData: {
        value: undefined,
        options
      }
    })
    component.find('input').element.focus()
    component.find('input').setValue('test\n')
    expect(component.find('input').text()).toBe('')
  })

  test('input should be emitted after each select passing the selected option', async () => {
    const component = mount(Select, {
      propsData: {
        value: null,
        options
      }
    })
    const [selected] = options

    component.find('input').element.click()
    await nextTick()
    component.findAll('.kit-select-option').at(0).element.click()

    expect(component.emitted('input')).toEqual([[selected]])
  })

  test('input should be emitted after removing an option, passing the undefined value', async () => {
    const component = mount(Select, {
      propsData: {
        value: 'foo',
        isClearable: true,
        options
      }
    })

    await nextTick()
    component.getComponent('.clear-icon').trigger('click')
    expect(component.emitted('input')).toEqual([[undefined]])
  })

  test('should preselect passed array of values', () => {
    const selected = ['1', '2']
    const component = mount(Select, {
      propsData: {
        value: selected,
        options: ['1', '2', '3'],
        multi: true
      }
    })
    expect(component.findAllComponents(Tag).length).toBe(2)
    expect(component.findAllComponents(Tag).at(0).text()).toContainEqual('1')
    expect(component.findAllComponents(Tag).at(1).text()).toContainEqual('2')
  })

  test('should preselect passed array of objects', () => {
    const customNormalizer = (option) => ({ id: option.id, label: option.id, value: option })
    const selected = [{ id: '3' }, { id: '2' }]
    const component = mount(Select, {
      propsData: {
        value: selected,
        options: [{ id: '1' }, { id: '2' }, { id: '3' }],
        normalizer: customNormalizer,
        multi: true
      }
    })
    // expect(component.vm.selected).toEqual(selected.map((o) => customNormalizer(o)))
    expect(component.findAllComponents(Tag).at(0).text()).toContainEqual('3')
    expect(component.findAllComponents(Tag).at(1).text()).toContainEqual('2')
  })

  test('should preselect passed simple value', () => {
    const component = mount(Select, {
      propsData: {
        value: '1',
        options: ['1', '2', '3']
      }
    })
    expect(component.find('.text').text()).toContainEqual('1')
  })

  test('should preselect passed object', () => {
    const component = mount(Select, {
      propsData: {
        value: { id: '2' },
        options: [{ id: '1' }, { id: '2' }, { id: '3' }],
        normalizer
      }
    })
    expect(component.find('.text').text()).toContainEqual('2')
  })

  test('should have visible clear icon when option is selected', () => {
    const component = mount(Select, {
      propsData: {
        value: '1',
        options: ['1', '2', '3']
      },
      stubs
    })
    const ClearIcon = component.find('.clear-icon')
    expect(ClearIcon.exists()).toBe(true)
  })

  test('should hide clear icon when option is selected and is-clearable is set to false', () => {
    const component = mount(Select, {
      propsData: {
        value: '1',
        options: ['1', '2', '3'],
        isClearable: false
      },
      stubs
    })
    const ClearIcon = component.find('.clear-icon')
    expect(ClearIcon.exists()).toBe(false)
  })

  test('should add values to selected array', async () => {
    const component = mount(Select, {
      propsData: {
        multi: true,
        value: ['foo'],
        options
      }
    })
    component.getComponent(TextField).trigger('click')
    await nextTick()
    component.findAll('.kit-select-option').at(0).element.click()
    expect(component.emitted('input')).toEqual([[['foo', 'bar']]])
  })

  test('should add objects to selected array', async () => {
    const component = mount(Select, {
      propsData: {
        value: [{ id: '1' }],
        options: [{ id: '1' }, { id: '2' }, { id: '3' }],
        multi: true
      }
    })
    component.getComponent(TextField).trigger('click')
    await nextTick()
    component.findAll('.kit-select-option').at(1).element.click()
    expect(component.emitted('input')).toEqual([[[{ id: '1' }, { id: '2' }]]])
  })

  test('should remove already selected object', () => {
    const component = mount(Select, {
      propsData: {
        value: [{ id: '2' }],
        options: [{ id: '1' }, { id: '2' }, { id: '3' }],
        normalizer,
        multi: true
      }
    })

    component.findAll('.remove-tag').at(0).trigger('click')
    expect(component.emitted('input')).toEqual([[[]]])
  })

  test('should push new value when createable is set to true', async () => {
    const component = mount(Select, {
      propsData: {
        multi: true,
        createable: true,
        value: ['1']
      }
    })
    await nextTick()
    expect(component.findAllComponents(Tag).length).toBe(1)

    component.getComponent(TextField).trigger('click')
    component.find('input').setValue('TEST')
    component.find('input').trigger('blur')

    await nextTick()

    expect(component.emitted()).toHaveProperty('input')
    expect(component.emitted('input')).toEqual([[['1', 'TEST']]])
  })

  test('should prevent pushing new values when max number of options is reached', async () => {
    const component = mount(Select, {
      propsData: {
        multi: true,
        createable: true,
        max: 1,
        value: ['1']
      }
    })
    component.find('input').setValue('TEST')
    component.find('input').trigger('blur')

    expect(component.emitted('input')).toBeFalsy()
  })
})
