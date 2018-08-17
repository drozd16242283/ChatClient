import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// import reducers
import user from './user/reducers'
import messages from './messages/reducers'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  user: user,
  messages: messages
})

export default persistReducer(persistConfig, rootReducer)
