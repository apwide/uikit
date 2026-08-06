import { mount } from '@vue/test-utils'
import KitMarkdownEditor from '@components/MarkdownEditor/KitMarkdownEditor.vue'
import EasyMDE from 'easymde'

jest.mock('easymde', () => {
  const MockEasyMDE = jest.fn().mockImplementation(function (options) {
    this.options = options
    this._value = ''
    this.codemirror = {
      on: jest.fn(),
      off: jest.fn(),
      setOption: jest.fn(),
      focus: jest.fn(),
      setCursor: jest.fn(),
      lineCount: jest.fn(() => 1)
    }
    this.value = jest.fn((v) => {
      if (v === undefined) {
        return this._value
      }
      this._value = v
    })
    this.isPreviewActive = jest.fn(() => false)
    this.cleanup = jest.fn()
    this.toTextArea = jest.fn()
  })
  MockEasyMDE.togglePreview = jest.fn()
  // The compiled <script setup lang="ts"> in KitMarkdownEditor.vue accesses the module's
  // `.default` directly (matching webpack's CJS interop, which Jest's require() doesn't do on
  // its own) — the mock must shape itself the same way for `new EasyMDE(...)` to resolve.
  return { __esModule: true, default: MockEasyMDE }
})

const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0))

const handlerFor = (instance, event) => {
  const call = instance.codemirror.on.mock.calls.find(([name]) => name === event)
  return call ? call[1] : undefined
}

const mountEditor = async (propsData = {}) => {
  const wrapper = mount(KitMarkdownEditor, { propsData, attachTo: document.body })
  await flushPromises()
  const instance = EasyMDE.mock.instances[EasyMDE.mock.instances.length - 1]
  return { wrapper, instance }
}

describe('KitMarkdownEditor', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  it('renders with default props', async () => {
    const { wrapper } = await mountEditor()
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })

  it('renders with kit-markdown-editor class', async () => {
    const { wrapper } = await mountEditor()
    expect(wrapper.classes()).toContain('kit-markdown-editor')
    wrapper.unmount()
  })

  it('constructs EasyMDE against the internal textarea', async () => {
    const { wrapper } = await mountEditor()
    expect(EasyMDE.mock.calls[EasyMDE.mock.calls.length - 1][0].element).toBe(wrapper.find('textarea').element)
    wrapper.unmount()
  })

  it('sets the initial value on the editor instance', async () => {
    const { wrapper, instance } = await mountEditor({ value: 'hello world' })
    expect(instance.value).toHaveBeenCalledWith('hello world')
    wrapper.unmount()
  })

  it('passes the placeholder through to EasyMDE', async () => {
    const { wrapper, instance } = await mountEditor({ placeholder: 'Type here' })
    expect(instance.options.placeholder).toBe('Type here')
    wrapper.unmount()
  })

  it('uses the minHeight prop for the editor height when not readonly', async () => {
    const { wrapper, instance } = await mountEditor({ minHeight: 500 })
    expect(instance.options.minHeight).toBe('500px')
    wrapper.unmount()
  })

  it('forces a 1em minHeight when readonly', async () => {
    const { wrapper, instance } = await mountEditor({ readonly: true })
    expect(instance.options.minHeight).toBe('1em')
    wrapper.unmount()
  })

  it('replaces the heading toolbar entry with a headings dropdown when not readonly', async () => {
    const { wrapper, instance } = await mountEditor()
    const toolbar = instance.options.toolbar
    const headingEntry = toolbar.find(item => item && item.name === 'others')
    expect(headingEntry).toEqual({
      name: 'others',
      className: 'fa fa-header',
      title: 'Headings',
      children: ['heading-1', 'heading-2', 'heading-3']
    })
    expect(toolbar).toContain('bold')
    wrapper.unmount()
  })

  it('does not build a toolbar when readonly', async () => {
    const { wrapper, instance } = await mountEditor({ readonly: true })
    expect(instance.options.toolbar).toBeNull()
    wrapper.unmount()
  })

  it('registers change/focus/blur/keyup handlers on the codemirror instance when not readonly', async () => {
    const { wrapper, instance } = await mountEditor()
    expect(instance.codemirror.on).toHaveBeenCalledWith('change', expect.any(Function))
    expect(instance.codemirror.on).toHaveBeenCalledWith('focus', expect.any(Function))
    expect(instance.codemirror.on).toHaveBeenCalledWith('blur', expect.any(Function))
    expect(instance.codemirror.on).toHaveBeenCalledWith('keyup', expect.any(Function))
    wrapper.unmount()
  })

  it('sets the codemirror readOnly option to match the readonly prop', async () => {
    const { wrapper: readonlyWrapper, instance: readonlyInstance } = await mountEditor({ readonly: true })
    expect(readonlyInstance.codemirror.setOption).toHaveBeenCalledWith('readOnly', true)
    readonlyWrapper.unmount()

    const { wrapper: editableWrapper, instance: editableInstance } = await mountEditor({ readonly: false })
    expect(editableInstance.codemirror.setOption).toHaveBeenCalledWith('readOnly', false)
    editableWrapper.unmount()
  })

  it('toggles the EasyMDE preview when readonly and not already previewing', async () => {
    const { wrapper } = await mountEditor({ readonly: true })
    expect(EasyMDE.togglePreview).toHaveBeenCalled()
    wrapper.unmount()
  })

  it('emits input with the trimmed value when the editor changes', async () => {
    const { wrapper, instance } = await mountEditor()
    instance.value = jest.fn(() => '  new content  ')
    handlerFor(instance, 'change')()
    expect(wrapper.emitted('input')).toBeTruthy()
    expect(wrapper.emitted('input')[0]).toEqual(['new content'])
    wrapper.unmount()
  })

  it('emits focus when the editor gains focus', async () => {
    const { wrapper, instance } = await mountEditor()
    handlerFor(instance, 'focus')()
    expect(wrapper.emitted('focus')).toBeTruthy()
    wrapper.unmount()
  })

  it('emits ctrl-enter when Ctrl+Enter is pressed', async () => {
    const { wrapper, instance } = await mountEditor()
    handlerFor(instance, 'keyup')(null, { ctrlKey: true, code: 'Enter' })
    expect(wrapper.emitted('ctrl-enter')).toBeTruthy()
    wrapper.unmount()
  })

  it('does not emit ctrl-enter for a plain Enter without Ctrl', async () => {
    const { wrapper, instance } = await mountEditor()
    handlerFor(instance, 'keyup')(null, { ctrlKey: false, code: 'Enter' })
    expect(wrapper.emitted('ctrl-enter')).toBeFalsy()
    wrapper.unmount()
  })

  it('emits blur when clicking outside the editor container', async () => {
    const { wrapper } = await mountEditor()
    const outside = document.createElement('div')
    document.body.appendChild(outside)

    outside.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(wrapper.emitted('blur')).toBeTruthy()
    document.body.removeChild(outside)
    wrapper.unmount()
  })

  it('does not emit blur when clicking inside the editor container', async () => {
    const { wrapper } = await mountEditor()
    wrapper.element.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(wrapper.emitted('blur')).toBeFalsy()
    wrapper.unmount()
  })

  it('does not react to outside clicks when readonly', async () => {
    const { wrapper } = await mountEditor({ readonly: true })
    const outside = document.createElement('div')
    document.body.appendChild(outside)

    outside.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(wrapper.emitted('blur')).toBeFalsy()
    document.body.removeChild(outside)
    wrapper.unmount()
  })

  it('focuses the codemirror instance after mount when autoFocus is set', async () => {
    jest.useFakeTimers()
    const wrapper = mount(KitMarkdownEditor, { propsData: { autoFocus: true }, attachTo: document.body })
    await wrapper.vm.$nextTick()
    const instance = EasyMDE.mock.instances[EasyMDE.mock.instances.length - 1]
    jest.advanceTimersByTime(250)
    expect(instance.codemirror.focus).toHaveBeenCalled()
    wrapper.unmount()
  })

  it('updates the editor value when the value prop changes externally', async () => {
    const { wrapper, instance } = await mountEditor({ value: 'first' })
    await wrapper.setProps({ value: 'second' })
    expect(instance.value).toHaveBeenCalledWith('second')
    wrapper.unmount()
  })

  it('cleans up the editor and click listener on unmount', async () => {
    const { wrapper, instance } = await mountEditor()
    wrapper.unmount()
    expect(instance.cleanup).toHaveBeenCalled()
    expect(instance.toTextArea).toHaveBeenCalled()
  })
})
