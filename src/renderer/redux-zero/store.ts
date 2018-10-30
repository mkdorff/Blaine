import createStore from 'redux-zero'
// import {connect} from 'redux-zero/devtools'
// import {applyMiddleware} from 'redux-zero/middleware'
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const initialState: GlobalStore = {
  financialItems: [],
}
// const middlewares = connect ? applyMiddleware(connect(initialState)) : []
// export default createStore(initialState, middlewares)

export default createStore(initialState)
