import test from 'tape'
import Enum from 'es6-enum'
import {createStore, compose, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reduxReset from '../src'

let initState
let reducers
const APP = Enum('RESET')

const before = test
before('Setup', (t) => {
  // Initial state in app reducer
  initState = {
    isLogin: false,
    user: {}
  }
  // Reducers
  const app = (state = initState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          isLogin: true,
          user: {
            token: 'test'
          }
        }
      default:
        return state
    }
  }
  reducers = combineReducers({app})
  t.end()
})

test('Should rest success if use default reset action', (t) => {
  const enHanceCreateStore = reduxReset()(createStore)
  const store = enHanceCreateStore(reducers)

  store.dispatch({ type: 'LOGIN' })
  store.dispatch({ type: 'RESET' })
  t.deepEqual(store.getState(), {
    app: initState
  })
  t.end()
})

test('Should rest success if use custom reset action', (t) => {
  const enHanceCreateStore = reduxReset(APP.RESET)(createStore)
  const store = enHanceCreateStore(reducers)

  store.dispatch({ type: 'LOGIN' })
  store.dispatch({ type: APP.RESET })
  t.deepEqual(store.getState(), {
    app: initState
  })
  t.end()
})

test('Should works well with other store enhancer like applyMiddleware', (t) => {
  const enHanceCreateStore = compose(
    applyMiddleware(thunk),
    reduxReset(APP.RESET)
  )(createStore)
  const store = enHanceCreateStore(reducers)

  store.dispatch({ type: 'LOGIN' })
  store.dispatch({ type: APP.RESET })
  t.deepEqual(store.getState(), {
    app: initState
  })
  t.end()
})
