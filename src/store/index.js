import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import { loadState, saveState } from './localStorage.js';
import root from '../redux';

const key = 'state';
const persistedState = loadState(key);
const store = createStore(root, persistedState, applyMiddleware(ReduxPromise));

store.subscribe(() => {
  const currentState = store.getState();
  saveState(currentState, key);
});

export default store;
