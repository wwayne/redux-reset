# redux-reset
[![Version](http://img.shields.io/npm/v/redux-reset.svg)](https://www.npmjs.org/package/redux-reset)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Circle CI](https://circleci.com/gh/wwayne/redux-reset/tree/master.svg?style=svg)](https://circleci.com/gh/wwayne/redux-reset/tree/master)

## Installation

```sh
npm install redux-reset
```

## Basic Usage
1.Setup in createStore

```JavaScript
import reduxReset from 'redux-reset'
...
const enHanceCreateStore = compose(
    applyMiddleware(...),
    reduxReset()  // Will use 'RESET' as default action.type to trigger reset
  )(createStore)
const store = enHanceCreateStore(reducers)
```


2.Dispatch reset action

```JavaScript
store.dispatch({
  type: 'RESET'
})
```

## Advanced Usage
#### Set any custom action.type to trigger reset

```JavaScript
import Enum from 'es6-enum'
const APP = Enum('RESET')

const enHanceCreateStore = compose(
    applyMiddleware(...),
    reduxReset(APP.RESET) // Set action.type here
  )(createStore)
const store = enHanceCreateStore(reducers)

AFTER:
store.dispatch({
  type: APP.RESET
})
```

#### Reset and specific to a new initial state

```JavaScript
store.dispatch({
  type: 'RESET',
  state: {app: {user: 'anotherUser'}} // Will use this as new initial state
})
```

#### Reset and specific to a new initial state, new state comes from a specific params in action

```JavaScript
import Enum from 'es6-enum'
const APP = Enum('RESET')

const enHanceCreateStore = compose(
    applyMiddleware(...),
    reduxReset({
     type: APP.RESET,
     data: 'initialStateComesFrom'
    })
  )(createStore)
const store = enHanceCreateStore(reducers)

AFTER:
store.dispatch({
  type: APP.RESET,
  initialStateComesFrom: {app: {user: 'anotherUser'}}
})
```

## License

MIT
