import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import Routes from './routes';
import rootReducer from './redux';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

window.store = createStoreWithMiddleware(rootReducer);

render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
