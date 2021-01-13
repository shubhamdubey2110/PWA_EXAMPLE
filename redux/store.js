import { createStore, applyMiddleware, } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import { createLogger } from 'redux-logger';

import reducers from './reducers'
import sagas from './sagas'
import { HYDRATE, createWrapper, } from 'next-redux-wrapper'

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = (middleware,) => {
  const arrMiddleware = [middleware,]

  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools, } = require('redux-devtools-extension',)
    return composeWithDevTools(applyMiddleware(...arrMiddleware,),)
  }
  return applyMiddleware(...arrMiddleware,)
}

/**
 *  Redux store configure
 * @returns {Object} Returns store.
 */
function configureStore() {
  const store = createStore(reducers, bindMiddleware(sagaMiddleware,),)

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(sagas,)
  }

  store.runSagaTask()

  return store
}
export const storeData = configureStore()
export const wrapper = createWrapper(configureStore,)
// export default {wrapper, configureStore}
