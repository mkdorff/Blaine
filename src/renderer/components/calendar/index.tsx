// To create/calculate, just start with new Date() and work from there
import React, {Component} from 'react'
import {connect} from 'redux-zero/react'
import actions from '../../redux-zero/actions'

class Calendar extends Component {
  public render() {
    return (
      <>
        <div>Banana</div>
        <button>add</button>
        <button>remove</button>
      </>
    )
  }
}

export default connect(
  ({financialItems}: GlobalStore) => ({financialItems}),
  actions
)(Calendar)
