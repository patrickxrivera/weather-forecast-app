import { combineReducers } from 'redux';

import currentLocation from './modules/currentLocation';

const rootReducer = combineReducers({
  currentLocation
});

export default rootReducer;
