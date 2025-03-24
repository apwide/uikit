export type CalendarDate = {
  date?: Date
  isDisabled?: boolean
  isHighlighted?: boolean
  isRangeStart?: boolean
  isRangeEnd?: boolean
}

export type DateRange = {
  from?: Date | number
  to?: Date | number
}