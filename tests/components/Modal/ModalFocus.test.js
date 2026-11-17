import { mount } from '@vue/test-utils'
import { h, nextTick, ref } from 'vue'
import KitModal from '@components/Modal/KitModal.vue'

// jsdom has no layout: every element would count as hidden for the focusable filter
beforeAll(() => {
  vi.spyOn(Element.prototype, 'getClientRects').mockReturnValue([{}])
})

function mountWithOpener(slots = {}) {
  const open = ref(false)
  const wrapper = mount(
    {
      render: () => [
        h('button', { id: 'opener', onClick: () => (open.value = true) }, 'Open'),
        open.value ? h(KitModal, { heading: 'Create thing', onCancel: () => (open.value = false) }, slots) : null
      ]
    },
    { attachTo: document.body }
  )
  return { wrapper, open }
}

const dialog = () => document.querySelector('[role="dialog"]')

function tab(shiftKey = false) {
  const e = new KeyboardEvent('keydown', { key: 'Tab', shiftKey, bubbles: true, cancelable: true })
  document.activeElement.dispatchEvent(e)
  return e
}

describe('KitModal focus management', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('is a labelled modal dialog and focuses the first field on open', async () => {
    const { wrapper, open } = mountWithOpener({ content: () => [h('input', { id: 'name' }), h('input', { id: 'desc' })] })
    document.getElementById('opener').focus()
    open.value = true
    await nextTick()
    await nextTick()
    expect(dialog().getAttribute('aria-modal')).toBe('true')
    const labelId = dialog().getAttribute('aria-labelledby')
    expect(document.getElementById(labelId).textContent.trim()).toBe('Create thing')
    expect(document.activeElement.id).toBe('name')
    wrapper.unmount()
  })

  it('keeps Tab inside the dialog and returns focus to the opener on close', async () => {
    const { wrapper, open } = mountWithOpener({ content: () => h('input', { id: 'name' }) })
    document.getElementById('opener').focus()
    open.value = true
    await nextTick()
    await nextTick()
    const items = Array.from(dialog().querySelectorAll('input, button:not([disabled])'))
    const last = items[items.length - 1]

    last.focus()
    expect(tab().defaultPrevented).toBe(true)
    expect(document.activeElement.id).toBe('name')

    expect(tab(true).defaultPrevented).toBe(true)
    expect(document.activeElement).toBe(last)

    open.value = false
    await nextTick()
    expect(document.activeElement.id).toBe('opener')
    wrapper.unmount()
  })

  it('focuses the dialog itself when it has no field', async () => {
    const { wrapper, open } = mountWithOpener({ content: () => h('p', 'Sure?') })
    open.value = true
    await nextTick()
    await nextTick()
    // the footer buttons are outside .kit-content: the dialog gets focus, Tab then reaches them
    expect(document.activeElement).toBe(dialog())
    wrapper.unmount()
  })
})
