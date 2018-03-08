import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { persistCombineReducers } from 'redux-persist'; // import persistStore
import storage from 'redux-persist/lib/storage';

import root from '../redux';

const config = {
  key: 'root',
  storage
};

const reducers = persistCombineReducers(config, {
  root
});

export const store = createStore(reducers, applyMiddleware(ReduxPromise));

// purge store => const persistor = persistStore(store);
// use a combination of set interval and clear interval to reset the store
