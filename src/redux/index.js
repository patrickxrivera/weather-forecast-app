import { combineReducers } from 'redux';

import currentLocation from './currentLocation/currentLocation.js';
import dashboard from './dashboard/dashboard.js';

const root = combineReducers({
  currentLocation,
  dashboard
});

export default root;
