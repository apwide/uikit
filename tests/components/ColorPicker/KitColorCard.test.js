import { shallowMount } from '@vue/test-utils'
import KitColorCard from '@components/ColorPicker/KitColorCard.vue'
import KitIcon from '@components/Icon/KitIcon.vue'

describe('KitColorCard', () => {
  it('renders with default props', () => {
    const component = shallowMount(KitColorCard)
    expect(component.exists()).toBe(true)
  })

  it('renders with kit-color-card__wrapper class', () => {
    const component = shallowMount(KitColorCard)
    expect(component.classes()).toContain('kit-color-card__wrapper')
  })

  it('has default color of #000000', () => {
    const component = shallowMount(KitColorCard)
    expect(component.vm.$props.color).toBe('#000000')
  })

  it('applies the color as background-color style', () => {
    const component = shallowMount(KitColorCard, {
      propsData: { color: '#ff5630' }
    })
    const card = component.find('.kit-color-card')
    expect(card.element.style.backgroundColor).toBe('rgb(255, 86, 48)')
  })

  it('exposes the color via a data-cy-color attribute', () => {
    const component = shallowMount(KitColorCard, {
      propsData: { color: '#ff5630' }
    })
    const card = component.find('.kit-color-card')
    expect(card.attributes('data-cy-color')).toBe('#ff5630')
  })

  it('shows the check icon by default since color and selected share the same default', () => {
    const component = shallowMount(KitColorCard)
    expect(component.findComponent(KitIcon).exists()).toBe(true)
  })

  it('shows the check icon when selected matches color', () => {
    const component = shallowMount(KitColorCard, {
      propsData: { color: '#ff5630', selected: '#ff5630' }
    })
    expect(component.findComponent(KitIcon).exists()).toBe(true)
    expect(component.findComponent(KitIcon).props('type')).toBe('check')
  })

  it('does not show the check icon when selected does not match color', () => {
    const component = shallowMount(KitColorCard, {
      propsData: { color: '#ff5630', selected: '#000000' }
    })
    expect(component.findComponent(KitIcon).exists()).toBe(false)
  })

  it('emits color-selected with the color when clicked', async () => {
    const component = shallowMount(KitColorCard, {
      propsData: { color: '#ff5630' }
    })
    await component.trigger('click')
    expect(component.emitted('color-selected')).toBeTruthy()
    expect(component.emitted('color-selected')[0]).toEqual(['#ff5630'])
  })
})
