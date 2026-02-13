import { shallowMount } from '@vue/test-utils'
import KitTag from '@components/Tag/KitTag.vue'

describe('KitTag', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitTag)
    expect(component.exists()).toBe(true)
  })

  it('displays label text', () => {
    const component = shallowMount(KitTag, {
      propsData: { label: 'Test Tag' }
    })
    expect(component.text()).toContain('Test Tag')
  })

  it('renders as span by default', () => {
    const component = shallowMount(KitTag, {
      propsData: { label: 'Test' }
    })
    const text = component.find('.text')
    expect(text.element.tagName).toBe('SPAN')
  })

  it('renders as anchor when tag is "a"', () => {
    const component = shallowMount(KitTag, {
      propsData: { label: 'Test', tag: 'a', link: 'https://example.com' }
    })
    const text = component.find('.text')
    expect(text.element.tagName).toBe('A')
    expect(text.attributes('href')).toBe('https://example.com')
  })

  it('applies standard color', () => {
    const component = shallowMount(KitTag, {
      propsData: { label: 'Test', color: 'standard' }
    })
    const tag = component.find('.kit-tag')
    expect(tag.attributes('color')).toBe('standard')
  })

  it('applies green color', () => {
    const component = shallowMount(KitTag, {
      propsData: { label: 'Test', color: 'green' }
    })
    const tag = component.find('.kit-tag')
    expect(tag.attributes('color')).toBe('green')
  })

  it('applies blue color', () => {
    const component = shallowMount(KitTag, {
      propsData: { label: 'Test', color: 'blue' }
    })
    const tag = component.find('.kit-tag')
    expect(tag.attributes('color')).toBe('blue')
  })

  it('applies red color', () => {
    const component = shallowMount(KitTag, {
      propsData: { label: 'Test', color: 'red' }
    })
    const tag = component.find('.kit-tag')
    expect(tag.attributes('color')).toBe('red')
  })

  it('applies purple color', () => {
    const component = shallowMount(KitTag, {
      propsData: { label: 'Test', color: 'purple' }
    })
    const tag = component.find('.kit-tag')
    expect(tag.attributes('color')).toBe('purple')
  })

  it('applies grey color', () => {
    const component = shallowMount(KitTag, {
      propsData: { label: 'Test', color: 'grey' }
    })
    const tag = component.find('.kit-tag')
    expect(tag.attributes('color')).toBe('grey')
  })

  it('applies teal color', () => {
    const component = shallowMount(KitTag, {
      propsData: { label: 'Test', color: 'teal' }
    })
    const tag = component.find('.kit-tag')
    expect(tag.attributes('color')).toBe('teal')
  })

  it('applies yellow color', () => {
    const component = shallowMount(KitTag, {
      propsData: { label: 'Test', color: 'yellow' }
    })
    const tag = component.find('.kit-tag')
    expect(tag.attributes('color')).toBe('yellow')
  })

  it('has correct CSS class', () => {
    const component = shallowMount(KitTag)
    expect(component.classes()).toContain('kit-tag')
  })

  it('has text element with correct class', () => {
    const component = shallowMount(KitTag, {
      propsData: { label: 'Test' }
    })
    const text = component.find('.text')
    expect(text.exists()).toBe(true)
  })
})
