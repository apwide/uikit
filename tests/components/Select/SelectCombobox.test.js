import { mount } from '@vue/test-utils'
import { h, nextTick } from 'vue'
import KitSelect from '@components/Select/KitSelect.vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'

const options = ['Alpha', 'Beta', 'Gamma']

function mountInGroup() {
  return mount(
    {
      render: () => h(KitFieldGroup, { label: 'Category' }, () => h(KitSelect, { options, modelValue: 'Beta' }))
    },
    { attachTo: document.body }
  )
}

describe('KitSelect combobox semantics', () => {
  it('names the input with the field group label', () => {
    const wrapper = mountInGroup()
    const label = wrapper.find('.kit-field-group__label')
    const input = wrapper.find('input')
    expect(label.attributes('id')).toBeTruthy()
    expect(input.attributes('aria-labelledby')).toBe(label.attributes('id'))
    wrapper.unmount()
  })

  it('exposes combobox state, listbox and active option', async () => {
    const wrapper = mountInGroup()
    const input = wrapper.find('input')
    expect(input.attributes('role')).toBe('combobox')
    expect(input.attributes('aria-expanded')).toBe('false')
    expect(input.attributes('aria-controls')).toBeUndefined()

    await input.trigger('keydown', { key: 'ArrowDown' })
    await nextTick()
    expect(input.attributes('aria-expanded')).toBe('true')
    const listbox = wrapper.find('[role="listbox"]')
    expect(input.attributes('aria-controls')).toBe(listbox.attributes('id'))

    const opts = wrapper.findAll('[role="option"]')
    expect(opts).toHaveLength(3)
    expect(input.attributes('aria-activedescendant')).toBe(opts[0].attributes('id'))
    expect(opts[1].attributes('aria-selected')).toBe('true')
    expect(opts[0].attributes('aria-selected')).toBe('false')
    wrapper.unmount()
  })

  it.each([
    [true, false],
    [false, true]
  ])('blurOnSelect=%s with confirm=false: focus kept = %s after Enter', async (blurOnSelect, kept) => {
    const wrapper = mount(KitSelect, {
      props: { options, confirm: false, blurOnSelect },
      attachTo: document.body
    })
    const input = wrapper.find('input')
    input.element.focus()
    await input.trigger('keydown', { key: 'ArrowDown' })
    await input.trigger('keydown', { key: 'Enter' })
    await new Promise((resolve) => setTimeout(resolve))
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['Alpha'])
    expect(document.activeElement === input.element).toBe(kept)
    wrapper.unmount()
  })

  it('has no labelledby outside a field group', () => {
    const wrapper = mount(KitSelect, { props: { options } })
    expect(wrapper.find('input').attributes('aria-labelledby')).toBeUndefined()
  })
})
