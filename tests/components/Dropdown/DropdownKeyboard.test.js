import { defineComponent, h, nextTick } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import KitDropdown from '@components/Dropdown/KitDropdown.vue'
import KitDropdownItem from '@components/Dropdown/KitDropdownItem.vue'
import KitIconMenu from '@components/Menu/KitIconMenu.vue'

// WAI-ARIA menu button pattern (accessibility audit finding F-002)
function mountMenu({ items = ['One', 'Two', 'Three'], disabled = [], onSelect = () => {} } = {}) {
  const Host = defineComponent({
    setup: () => () =>
      h(KitDropdown, { label: 'Actions' }, () =>
        items.map((label) =>
          h(KitDropdownItem, { value: label, disabled: disabled.includes(label), onSelect: () => onSelect(label) }, () => label)
        )
      )
  })
  return mount(Host, { attachTo: document.body })
}

const trigger = () => document.querySelector('.dropdown-container > button')
const key = (k) => document.activeElement.dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true }))
const focused = () => document.activeElement?.textContent.trim()

async function open() {
  trigger().focus()
  trigger().click()
  await flushPromises()
  await nextTick()
}

describe('KitDropdown keyboard and ARIA', () => {
  let wrapper
  afterEach(() => wrapper?.unmount())

  it('exposes a menu button and a menu of menu items', async () => {
    wrapper = mountMenu()
    expect(trigger().getAttribute('aria-haspopup')).toBe('menu')
    expect(trigger().getAttribute('aria-expanded')).toBe('false')
    await open()
    expect(trigger().getAttribute('aria-expanded')).toBe('true')
    expect(document.querySelector('.kit-popup').getAttribute('role')).toBe('menu')
    const item = document.querySelector('.dropdown-item')
    expect(item.getAttribute('role')).toBe('menuitem')
    expect(item.getAttribute('tabindex')).toBe('-1')
  })

  it('focuses the first item on open and moves with the arrows, Home and End (wrapping)', async () => {
    wrapper = mountMenu()
    await open()
    expect(focused()).toBe('One')
    key('ArrowDown')
    expect(focused()).toBe('Two')
    key('End')
    expect(focused()).toBe('Three')
    key('ArrowDown')
    expect(focused()).toBe('One')
    key('ArrowUp')
    expect(focused()).toBe('Three')
    key('Home')
    expect(focused()).toBe('One')
  })

  it('skips disabled items', async () => {
    wrapper = mountMenu({ disabled: ['Two'] })
    await open()
    key('ArrowDown')
    expect(focused()).toBe('Three')
    expect(document.querySelectorAll('.dropdown-item')[1].getAttribute('aria-disabled')).toBe('true')
  })

  it('selects with Enter, closes and returns focus to the button', async () => {
    const onSelect = vi.fn()
    wrapper = mountMenu({ onSelect })
    await open()
    key('ArrowDown')
    key('Enter')
    await flushPromises()
    expect(onSelect).toHaveBeenCalledWith('Two')
    expect(document.querySelector('.kit-popup')).toBeNull()
    expect(document.activeElement).toBe(trigger())
  })

  it('selects with Space', async () => {
    const onSelect = vi.fn()
    wrapper = mountMenu({ onSelect })
    await open()
    key(' ')
    expect(onSelect).toHaveBeenCalledWith('One')
  })

  it('closes on Escape and returns focus to the button', async () => {
    wrapper = mountMenu()
    await open()
    key('Escape')
    await flushPromises()
    expect(document.querySelector('.kit-popup')).toBeNull()
    expect(document.activeElement).toBe(trigger())
    expect(trigger().getAttribute('aria-expanded')).toBe('false')
  })

  it('closes on Tab from an item', async () => {
    wrapper = mountMenu()
    await open()
    key('Tab')
    await flushPromises()
    expect(document.querySelector('.kit-popup')).toBeNull()
  })

  it('gives no menu role to content without menu items, and keeps Tab and arrows for its controls', async () => {
    const Host = defineComponent({
      setup: () => () => h(KitDropdown, { label: 'Filters' }, () => [h('input', { type: 'checkbox' }), h('input')])
    })
    wrapper = mount(Host, { attachTo: document.body })
    await open()
    expect(document.querySelector('.kit-popup').hasAttribute('role')).toBe(false)
    expect(document.activeElement).toBe(document.querySelector('.kit-popup input'))
    key('Tab')
    key('ArrowDown')
    await flushPromises()
    expect(document.querySelector('.kit-popup')).not.toBeNull()
  })

  it('keeps focus in a text field trigger (search picker) on open', async () => {
    const Host = defineComponent({
      setup: () => () =>
        h(KitDropdown, null, {
          trigger: ({ toggle }) => h('input', { class: 'search', onFocus: toggle }),
          default: () => h(KitDropdownItem, () => 'Anyone')
        })
    })
    wrapper = mount(Host, { attachTo: document.body })
    const input = document.querySelector('.search')
    input.focus()
    await flushPromises()
    await nextTick()
    expect(document.querySelector('.kit-popup')).not.toBeNull()
    expect(document.activeElement).toBe(input)
  })

  it('KitIconMenu exposes its icon button as a menu button', async () => {
    const Host = defineComponent({
      setup: () => () =>
        h(KitIconMenu, { title: 'More' }, { icon: () => h('span', '…'), default: () => h(KitDropdownItem, () => 'Clone') })
    })
    wrapper = mount(Host, { attachTo: document.body })
    expect(trigger().getAttribute('aria-haspopup')).toBe('menu')
    await open()
    expect(trigger().getAttribute('aria-expanded')).toBe('true')
    expect(focused()).toBe('Clone')
  })
})
