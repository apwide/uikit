import { shallowMount } from '@vue/test-utils'
import KitMarkdownEditableRenderer from '@components/field-renderers/KitMarkdownEditableRenderer.vue'
import KitInlineEdit from '@components/Form/KitInlineEdit.vue'
import KitMarkdownEditor from '@components/MarkdownEditor/KitMarkdownEditor.vue'

// KitMarkdownEditableRenderer creates a ResizeObserver/IntersectionObserver unconditionally at
// setup() time (used to reposition the floating editor while editing), so these need to exist
// even for tests that never trigger editing.
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('KitMarkdownEditableRenderer', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitMarkdownEditableRenderer)
    expect(component.exists()).toBe(true)
  })

  it('renders with kit-markdown-editable-renderer class', () => {
    const component = shallowMount(KitMarkdownEditableRenderer)
    expect(component.classes()).toContain('kit-markdown-editable-renderer')
  })

  it('is editable by default and renders KitInlineEdit', () => {
    const component = shallowMount(KitMarkdownEditableRenderer, { propsData: { value: 'hello' } })
    expect(component.findComponent(KitInlineEdit).exists()).toBe(true)
  })

  it('forwards the value to KitInlineEdit', () => {
    const component = shallowMount(KitMarkdownEditableRenderer, { propsData: { value: 'hello' } })
    expect(component.findComponent(KitInlineEdit).props('value')).toBe('hello')
  })

  it('forwards blurToSave and forceIsEditing to KitInlineEdit', () => {
    const component = shallowMount(KitMarkdownEditableRenderer, {
      propsData: { blurToSave: true, forceIsEditing: true }
    })
    const inlineEdit = component.findComponent(KitInlineEdit)
    expect(inlineEdit.props('blurToSave')).toBe(true)
    expect(inlineEdit.props('forceIsEditing')).toBe(true)
  })

  it('renders a plain readonly KitMarkdownEditor when editable is false', () => {
    const component = shallowMount(KitMarkdownEditableRenderer, {
      propsData: { value: 'hello', editable: false }
    })
    expect(component.findComponent(KitInlineEdit).exists()).toBe(false)
    const editor = component.findComponent(KitMarkdownEditor)
    expect(editor.exists()).toBe(true)
    expect(editor.props('value')).toBe('hello')
    expect(editor.props('readonly')).toBe(true)
  })

  it('renders custom slot content instead of the default readonly editor when not editable', () => {
    const component = shallowMount(KitMarkdownEditableRenderer, {
      propsData: { value: 'hello', editable: false },
      slots: { default: '<div class="custom-view">Custom</div>' }
    })
    expect(component.find('.custom-view').exists()).toBe(true)
    expect(component.findComponent(KitMarkdownEditor).exists()).toBe(false)
  })

  it('emits save-requested when the size limit is not exceeded', async () => {
    const component = shallowMount(KitMarkdownEditableRenderer, {
      propsData: { value: 'hi', sizeLimit: 100 }
    })
    const callback = jest.fn()
    await component.findComponent(KitInlineEdit).vm.$emit('save-requested', 'new value', callback)
    expect(component.emitted('save-requested')).toBeTruthy()
    expect(component.emitted('save-requested')[0]).toEqual(['new value', callback])
    expect(callback).not.toHaveBeenCalled()
  })

  it('calls back with an error and does not emit save-requested when the size limit is exceeded', async () => {
    const component = shallowMount(KitMarkdownEditableRenderer, {
      propsData: { value: 'hi', sizeLimit: 5 }
    })
    const callback = jest.fn()
    await component.findComponent(KitInlineEdit).vm.$emit('save-requested', 'this is too long', callback)
    expect(callback).toHaveBeenCalledWith(expect.any(Error))
    expect(component.emitted('save-requested')).toBeFalsy()
  })

  it('forwards stop-editing from KitInlineEdit', async () => {
    // attachTo is required here: onStopEditing() walks `element.parentElement` up to
    // `document.body` (via findTableParent) with no null-guard, which throws on a detached tree.
    const component = shallowMount(KitMarkdownEditableRenderer, {
      propsData: { value: 'hi' },
      attachTo: document.body
    })
    await component.findComponent(KitInlineEdit).vm.$emit('stop-editing')
    expect(component.emitted('stop-editing')).toBeTruthy()
    component.destroy()
  })
})
