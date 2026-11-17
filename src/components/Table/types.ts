export type Column = {
  id: number | string
  width?: number
  sortable?: boolean
  name?: string
  // visually hidden header text for a column without a name (e.g. 'Actions')
  label?: string
}

export type BasicRow = {
  id: number | string
  clazz: string | undefined
}
