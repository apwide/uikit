import { shallowMount } from '@vue/test-utils'
import KitIcon from '@components/Icon/KitIcon.vue'

describe('KitIcon', () => {
  it('renders with required props', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home' }
    })
    expect(component.exists()).toBe(true)
  })

  it('renders FontAwesomeIcon component', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home' }
    })
    expect(component.findComponent({ name: 'FontAwesomeIcon' }).exists()).toBe(true)
  })

  it('accepts type prop', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'search' }
    })
    expect(component.props('type')).toBe('search')
  })

  it('has default iconStyle of solid', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home' }
    })
    expect(component.props('iconStyle')).toBe('solid')
  })

  it('accepts iconStyle prop', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home', iconStyle: 'regular' }
    })
    expect(component.props('iconStyle')).toBe('regular')
  })

  it('accepts brands iconStyle', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'github', iconStyle: 'brands' }
    })
    expect(component.props('iconStyle')).toBe('brands')
  })

  it('has default size of 1x', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home' }
    })
    expect(component.props('size')).toBe('1x')
  })

  it('accepts size prop', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home', size: '2x' }
    })
    expect(component.props('size')).toBe('2x')
  })

  it('accepts size in pixels', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home', size: '24px' }
    })
    expect(component.props('size')).toBe('24px')
  })

  it('accepts size in em', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home', size: '1.5em' }
    })
    expect(component.props('size')).toBe('1.5em')
  })

  it('has default color of inherit', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home' }
    })
    expect(component.props('color')).toBe('inherit')
  })

  it('accepts color prop', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home', color: '#FF0000' }
    })
    expect(component.props('color')).toBe('#FF0000')
  })

  it('has default bgColor of transparent', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home' }
    })
    expect(component.props('bgColor')).toBe('transparent')
  })

  it('accepts bgColor prop', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home', bgColor: '#000000' }
    })
    expect(component.props('bgColor')).toBe('#000000')
  })

  it('has default margin of 0px', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home' }
    })
    expect(component.props('margin')).toBe('0px')
  })

  it('accepts margin prop', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home', margin: '10px' }
    })
    expect(component.props('margin')).toBe('10px')
  })

  it('has default padding of 0px', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home' }
    })
    expect(component.props('padding')).toBe('0px')
  })

  it('accepts padding prop', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home', padding: '5px' }
    })
    expect(component.props('padding')).toBe('5px')
  })

  it('accepts title prop', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home', title: 'Home Icon' }
    })
    expect(component.props('title')).toBe('Home Icon')
  })

  it('has kit-icon class', () => {
    const component = shallowMount(KitIcon, {
      propsData: { type: 'home' }
    })
    const icon = component.findComponent({ name: 'FontAwesomeIcon' })
    expect(icon.classes()).toContain('kit-icon')
  })
})
