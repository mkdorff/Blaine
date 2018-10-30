import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'redux-zero/react'
import styled from 'styled-components'
import store from './redux-zero/store'
import {GlobalStyle} from './theme/globalStyles'

// Components
import Calendar from './components/calendar'

const TempHeader = styled.div`
  height: 25px;
  text-align: center;
`

const App = () => (
  <Provider store={store}>
    <>
      <GlobalStyle />
      <TempHeader>BLAINE DOES THINGS</TempHeader>
      <Calendar />
    </>
  </Provider>
)

render(<App />, document.getElementById('app'))
