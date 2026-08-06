import { mount } from '@vue/test-utils'
import KitTransitionExpand from '@components/common/KitTransitionExpand.vue'

const flushPromises = () => new Promise(resolve => setTimeout(resolve, 50))

// A host component is needed to actually exercise the enter/leave transition hooks: they only
// fire when the slotted element is inserted/removed via v-if, not on a component's initial mount.
const TestHost = {
  components: { KitTransitionExpand },
  props: {
    show: { type: Boolean, default: false },
    enterTransition: { type: Boolean, default: true },
    leaveTransition: { type: Boolean, default: true }
  },
  template: `
    <KitTransitionExpand :enter-transition="enterTransition" :leave-transition="leaveTransition">
      <div v-if="show" class="content">Content</div>
    </KitTransitionExpand>
  `
}

describe('KitTransitionExpand', () => {
  let consoleErrorSpy

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    expect(consoleErrorSpy).not.toHaveBeenCalled()
    consoleErrorSpy.mockRestore()
  })

  it('renders with default props', () => {
    const component = mount(KitTransitionExpand)
    expect(component.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const component = mount(KitTransitionExpand, {
      slots: { default: '<div class="content">Content</div>' }
    })
    expect(component.find('.content').exists()).toBe(true)
  })

  it('uses default props enterTransition and leaveTransition true', () => {
    const component = mount(KitTransitionExpand)
    expect(component.vm.$props.enterTransition).toBe(true)
    expect(component.vm.$props.leaveTransition).toBe(true)
  })

  it('accepts enterTransition and leaveTransition set to false', () => {
    const component = mount(KitTransitionExpand, {
      propsData: { enterTransition: false, leaveTransition: false }
    })
    expect(component.vm.$props.enterTransition).toBe(false)
    expect(component.vm.$props.leaveTransition).toBe(false)
  })

  it('sets the element height to auto once it has finished entering', async () => {
    const wrapper = mount(TestHost, { propsData: { show: false }, global: { stubs: { transition: false } } })
    await wrapper.setProps({ show: true })
    await wrapper.vm.$nextTick()
    await flushPromises()
    expect(wrapper.find('.content').element.style.height).toBe('auto')
    wrapper.unmount()
  })

  it('does not touch the element height when enterTransition is false', async () => {
    const wrapper = mount(TestHost, {
      propsData: { show: false, enterTransition: false },
      global: { stubs: { transition: false } }
    })
    await wrapper.setProps({ show: true })
    await wrapper.vm.$nextTick()
    await flushPromises()
    expect(wrapper.find('.content').element.style.height).toBe('')
    wrapper.unmount()
  })

  it('removes the content from the DOM after leaving', async () => {
    const wrapper = mount(TestHost, { propsData: { show: true }, global: { stubs: { transition: false } } })
    expect(wrapper.find('.content').exists()).toBe(true)
    await wrapper.setProps({ show: false })
    await wrapper.vm.$nextTick()
    await flushPromises()
    expect(wrapper.find('.content').exists()).toBe(false)
    wrapper.unmount()
  })

  it('removes the content from the DOM after leaving even when leaveTransition is false', async () => {
    const wrapper = mount(TestHost, {
      propsData: { show: true, leaveTransition: false },
      global: { stubs: { transition: false } }
    })
    await wrapper.setProps({ show: false })
    await wrapper.vm.$nextTick()
    await flushPromises()
    expect(wrapper.find('.content').exists()).toBe(false)
    wrapper.unmount()
  })
})
