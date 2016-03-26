# redux-reset
[![Version](http://img.shields.io/npm/v/redux-reset.svg)](https://www.npmjs.org/package/redux-reset)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Circle CI](https://circleci.com/gh/wwayne/redux-reset/tree/master.svg?style=svg)](https://circleci.com/gh/wwayne/redux-reset/tree/master)

### Installation

```sh
npm install redux-reset
```

### Usage
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

#####You can set any custom action.type to trigger reset. e.g:

```JavaScript
import Enum from 'es6-enum'
const APP = Enum('RESET')

const enHanceCreateStore = compose(
    applyMiddleware(...),
    reduxReset(APP.RESET) // Set action.type here
  )(createStore)
const store = enHanceCreateStore(reducers)

store.dispatch({
  type: APP.RESET
})
```
### License

MIT
