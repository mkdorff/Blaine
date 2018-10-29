type FrequencyType = 'xYears' | 'xMonths' | 'xWeeks' | 'xDays' | 'specificDates' | 'singular'
type DayType = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
type WeekendShiftType = 'before' | 'after'

interface FinancialItem {
  id: string
  name: string
  description?: string
  frequencyType: FrequencyType
  xFrequency?: number
  datesOf?: number[]
  dayOfWeek?: DayType
  singularDate?: Date
  weekendShift: WeekendShiftType
  amount: number
}

interface GlobalStore {
  financialItems?: FinancialItem[]
}
