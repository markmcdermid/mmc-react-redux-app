import { applyMiddleware, compose, createStore } from 'redux'
import { syncHistory } from 'redux-simple-router'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

export default function configureStore ({ initialState = {}, history }) {
  // Sync with router via history instance (main.js)
  const routerMiddleware = syncHistory(history)

  // Compose final middleware
  let middleware = applyMiddleware(thunk, routerMiddleware)

  // Create final store and subscribe router
  const store = middleware(createStore)(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default

      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
