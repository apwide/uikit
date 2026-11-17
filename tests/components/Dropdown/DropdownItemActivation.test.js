import { h } from 'vue'
import { mount } from '@vue/test-utils'
import KitDropdownItem from '@components/Dropdown/KitDropdownItem.vue'

const press = (el, key) => {
  const e = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true })
  el.dispatchEvent(e)
  return e
}

describe('KitDropdownItem keyboard activation', () => {
  it('Enter on an item wrapping a link follows the link (like a mouse click on it) and selects', () => {
    const onLink = vi.fn((e) => e.preventDefault())
    const wrapper = mount(KitDropdownItem, {
      slots: { default: () => h('a', { href: '#release-matrix', onClick: onLink }, 'Release matrix') },
      attachTo: document.body
    })
    press(wrapper.element, 'Enter')
    expect(onLink).toHaveBeenCalledTimes(1)
    expect(wrapper.emitted('select')).toHaveLength(1)
    wrapper.unmount()
  })

  it('keys typed in a field inside the item are left alone', () => {
    const wrapper = mount(KitDropdownItem, {
      slots: { default: () => h('input', { 'aria-label': 'Search view' }) },
      attachTo: document.body
    })
    const e = press(wrapper.find('input').element, ' ')
    expect(e.defaultPrevented).toBe(false)
    press(wrapper.find('input').element, 'Enter')
    expect(wrapper.emitted('select')).toBeUndefined()
    wrapper.unmount()
  })
})
