export function closest(node: HTMLElement, classToFind: string): HTMLElement | null {
  if (!node.classList) {
    return null
  }
  if (node.classList.contains(classToFind)) {
    return node
  }
  if (!node.parentElement) {
    return null
  }
  return closest(node.parentElement, classToFind)
}

const uniqueIdBase = Math.floor(Math.random() * 1_000_000_000)
let uniqueBaseCounter = 0

export function uniqueId() {
  uniqueBaseCounter += 1
  return `kit-id-${uniqueIdBase + uniqueBaseCounter}`
}

export function convertNumbersToPx(
  from: Record<keyof Partial<CSSStyleDeclaration>, string | number>
): Partial<CSSStyleDeclaration> {
  const result: Partial<CSSStyleDeclaration> = {}
  for (const fromKey in from) {
    let style = from[fromKey]
    if (typeof style === 'number') {
      style = `${style}px`
    }
    result[fromKey] = style
  }
  return result
}

export function setStyles(element: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
  if (!element) {
    return
  }
  for (const stylesKey in styles) {
    const style = styles[stylesKey]
    element.style[stylesKey] = style
  }
}

export function findTableParent(element: HTMLElement): HTMLElement | null {
  if (!element) {
    return null
  }
  let walk: HTMLElement = element
  while (walk !== document.body) {
    if (walk.tagName === 'TABLE') {
      return walk
    } else {
      walk = walk.parentElement
    }
  }
  return null
}
