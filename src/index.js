export default function resetMiddleware (type) {
  return (next) => (reducer, initialState) => {
    const resetType = type || 'RESET'
    const enhanceReducer = (state, action) => {
      if (action.type === resetType) {
        state = undefined
      }
      return reducer(state, action)
    }

    return next(enhanceReducer, initialState)
  }
}
