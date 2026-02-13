import { shallowMount } from '@vue/test-utils'
import TimePickerMenu from '@components/Calendar/TimePickerMenu.vue'
import KitButton from '@components/Button/KitButton.vue'

// jsdom does not implement innerText (it requires layout); the component relies on it
// to match/highlight options, so we polyfill it with textContent for these tests.
beforeAll(() => {
  Object.defineProperty(HTMLElement.prototype, 'innerText', {
    configurable: true,
    get() {
      return this.textContent.trim()
    }
  })
})

describe('TimePickerMenu', () => {
  it('renders with default props', () => {
    const component = shallowMount(TimePickerMenu)
    expect(component.exists()).toBe(true)
  })

  it('renders 48 half-hour options', () => {
    const component = shallowMount(TimePickerMenu)
    expect(component.findAllComponents(KitButton)).toHaveLength(48)
  })

  it('renders options from 00:00 to 23:30', () => {
    const component = shallowMount(TimePickerMenu)
    const options = component.findAllComponents(KitButton)
    expect(options.at(0).text()).toBe('00:00')
    expect(options.at(1).text()).toBe('00:30')
    expect(options.at(47).text()).toBe('23:30')
  })

  it('emits time-selected with the clicked value', async () => {
    const component = shallowMount(TimePickerMenu)
    await component.findAllComponents(KitButton).at(5).vm.$emit('click')
    expect(component.emitted('time-selected')).toEqual([['02:30']])
  })

  it('highlights the option matching the value prop on mount', async () => {
    const component = shallowMount(TimePickerMenu, { propsData: { value: '01:00' }, attachTo: document.body })
    await new Promise(resolve => setTimeout(resolve, 40))
    const highlighted = component.findAllComponents(KitButton).filter(w => w.attributes('data-highlight') === 'true')
    expect(highlighted).toHaveLength(1)
    expect(highlighted.at(0).text()).toBe('01:00')
    component.unmount()
  })

  it('highlights the hovered option on mousemove', async () => {
    const component = shallowMount(TimePickerMenu, { attachTo: document.body })
    await component.findAllComponents(KitButton).at(10).trigger('mousemove')
    const highlighted = component.findAllComponents(KitButton).at(10)
    expect(highlighted.attributes('data-highlight')).toBe('true')
    component.unmount()
  })
})
