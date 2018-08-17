import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import persistedReducer from './persistedRootReducer'

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)

