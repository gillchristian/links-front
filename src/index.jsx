import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import linksApp from './reducers/index.js';
import App from './components/app.jsx';

let store = createStore(linksApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
  );
