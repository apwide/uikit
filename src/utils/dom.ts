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
