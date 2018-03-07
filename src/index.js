import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Routes from './routes';
import thunk from 'redux-thunk';
import rootReducer from './redux';
import { compose } from 'redux';

const middleware = [thunk];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
