import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor} from './store/configureStore'
import App from './App'
import AppLoader from './Components/layouts/Loaders/AppLoader'


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<AppLoader/>} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);