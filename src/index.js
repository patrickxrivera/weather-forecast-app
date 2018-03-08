import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import App from './components/App/App.jsx';
import rootReducer from './redux';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

window.store = createStoreWithMiddleware(rootReducer);

render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
