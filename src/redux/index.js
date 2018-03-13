import { combineReducers } from 'redux';

import currentLocation from './currentLocation/currentLocation.js';
import dashboard from './dashboard/dashboard.js';
import search from './search/search.js';

const root = combineReducers({
  currentLocation,
  dashboard,
  search
});

export default root;
