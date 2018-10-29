import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'redux-zero/react'
import store from './redux-zero/store'

// Components
import Calendar from './components/calendar'

const App = () => (
  <Provider store={store}>
    <>
      <div>BLAINE DOES THINGS</div>
      <Calendar />
    </>
  </Provider>
)

render(<App />, document.getElementById('app'))
