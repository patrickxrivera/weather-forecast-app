import { combineReducers } from 'redux';

import currentLocation from './modules/currentLocation';
import dashboard from './modules/dashboard';

const root = combineReducers({
  currentLocation,
  dashboard
});

export default root;
