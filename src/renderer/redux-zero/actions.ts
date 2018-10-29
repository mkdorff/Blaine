function addFinancialItem({financialItems = []}: GlobalStore, newItem: FinancialItem) {
  // All the logic check here.
  // const newItem

  return {
    financialItems: [...financialItems, newItem],
  }
}

const removeFinancialItem = ({financialItems = []}: GlobalStore, removalId: string) => ({
  financialItems: financialItems.filter(({id}) => id !== removalId),
})

export default (store: GlobalStore) => ({
  addFinancialItem,
  removeFinancialItem,
})
