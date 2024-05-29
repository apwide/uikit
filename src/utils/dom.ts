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
