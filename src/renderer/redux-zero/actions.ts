function addFinancialItem({financialItems = []}: GlobalStore, newItem: FinancialItem) {
  // All the logic check here.
  // const newItem

  return {
    financialItems: [...financialItems, newItem],
  }
}

// initialState.financialItems = [
//   ...initialState.financialItems,
//   {
//     amount: 24,
//     datesOf: [5],
//     frequencyType: 'singular',
//     id: 'sadf',
//     name: 'banan',
//     weekendShift: 'after',
//   },
// ]

const removeFinancialItem = ({financialItems = []}: GlobalStore, removalId: string) => ({
  financialItems: financialItems.filter(({id}) => id !== removalId),
})

export default (store: GlobalStore) => ({
  addFinancialItem,
  removeFinancialItem,
})
