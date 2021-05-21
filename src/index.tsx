import React from 'react'
import ReactDOM from 'react-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <App />
      <Toaster />
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
)
