import createStore from 'redux-zero'

// I guess... I don't need them to be separate fields (income/expense)
const initialState: GlobalStore = {
  financialItems: [],
}
initialState.financialItems = [
  ...initialState.financialItems,
  {
    amount: 24,
    datesOf: [5],
    frequencyType: 'singular',
    id: 'sadf',
    name: 'banan',
    weekendShift: 'after',
  },
]

export default createStore(initialState)
