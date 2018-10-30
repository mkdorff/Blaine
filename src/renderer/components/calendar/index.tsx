// To create/calculate, just start with new Date() and work from there
import React, {Component} from 'react'
// import {Form, Field} from 'react-final-form'
import {connect} from 'redux-zero/react'
import styled from 'styled-components'
import actions from '../../redux-zero/actions'

const FormsWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`

const AddFormWrapper = styled.div`
  margin: 5px;
  border: 1px dashed black;
  flex: 1;
`

const RemoveFormWrapper = styled.div`
  margin: 5px;
  border: 1px dashed black;
  flex: 1;
`

class Calendar extends Component {
  public render() {
    return (
      <FormsWrapper>
        <AddFormWrapper>
          <button>add</button>
        </AddFormWrapper>
        <RemoveFormWrapper>
          <button>remove</button>
        </RemoveFormWrapper>
      </FormsWrapper>
    )
  }
}

export default connect(
  ({financialItems}: GlobalStore) => ({financialItems}),
  actions
)(Calendar)
