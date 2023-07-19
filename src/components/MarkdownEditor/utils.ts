export function hasHeadings(str: string) {
  return /^ *#/.test(str) || /\n *#/.test(str)
}
