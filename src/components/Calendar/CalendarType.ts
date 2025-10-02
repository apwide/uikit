export type CalendarDate = {
  date?: Date
  isToday?: boolean
  isDisabled?: boolean
  isHighlighted?: boolean
  isRangeStart?: boolean
  isRangeEnd?: boolean
}

export type DateRange = {
  from?: Date | number
  to?: Date | number
}