import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';

import App from './App'
import './index.css'
import store from './store'
import './_variables.scss'

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// )

const root = createRoot(document.getElementById('root'));
root.render(

<App />

);