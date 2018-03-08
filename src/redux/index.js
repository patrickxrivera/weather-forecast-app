import { combineReducers } from 'redux';

import currentLocation from './modules/currentLocation';

const root = combineReducers({
  currentLocation
});

export default root;
