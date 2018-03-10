import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { persistCombineReducers } from 'redux-persist'; // import persistStore
import storage from 'redux-persist/lib/storage';

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

// purge store => const persistor = persistStore(store);
// use a combination of set interval and clear interval to reset the store
