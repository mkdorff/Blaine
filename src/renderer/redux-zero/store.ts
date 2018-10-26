import createStore from 'redux-zero'

type FrequencyType = 'xYears' | 'xMonths' | 'xWeeks' | 'xDays' | 'specificDates'
type DayType = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
type WeekendShiftType = 'before' | 'after'

interface RecurringItem {
  frequencyType: FrequencyType
  xFrequency?: number
  datesOf: [number]
  dayOfWeek?: DayType
  weekendShift: WeekendShiftType
  amount: number
}

interface GlobalStore {
  [field: string]: [RecurringItem?]
}

const initialState: GlobalStore = {
  expenseItems: [],
  incomeItems: [],
}

export default createStore(initialState)
