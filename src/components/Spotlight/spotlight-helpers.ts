export type Rectangle = Pick<DOMRectReadOnly, 'x' | 'y' | 'height' | 'width'>

export type KitSpotlightStep = {
  elements: () => HTMLElement[]
  title?: string
  p?: string[]
  before?: () => Promise<void> | void
  cleanup?: () => Promise<void> | void
  textWidth?: number
  margin?: number | [number, number]
}

export function calculateRectangle(elements: Element[]): Rectangle {
  let x = Infinity
  let y = Infinity
  let height = 0
  let width = 0
  let first = true

  for (const el of elements) {
    const rect = el.getBoundingClientRect()
    if (first) {
      x = rect.x
      y = rect.y
      height = rect.height
      width = rect.width
      first = false
    } else {
      x = Math.round(Math.min(x, rect.x))
      y = Math.round(Math.min(y, rect.y))
      width = Math.round(Math.max(x + width, rect.x + rect.width) - x)
      height = Math.round(Math.max(y + height, rect.y + rect.height) - y)
    }
  }
  return { x, y, height, width }
}
