import { createAction, handleActions } from 'redux-actions';

import Pin from '../../components/Dashboard/Pin/Pin';
import Result from '../../components/Dashboard/Result/Result';
import * as color from 'material-ui/styles/colors';

export const fetchView = createAction('FETCH_VIEW');
export const receiveSearch = createAction('RECEIVE_SEARCH');

const initialState = {
  1: {
    id: 1,
    View: Result,
    primaryColor: color.deepPurple400,
    secondaryColor: color.deepPurple50
  },
  2: {
    id: 2,
    View: Pin,
    primaryColor: color.blue700,
    secondaryColor: color.blue50
  },
  3: {
    id: 3,
    View: Result,
    primaryColor: color.cyan400,
    secondaryColor: color.cyan50
  }
};

export default handleActions(
  {
    FETCH_VIEW: (state, action) => {
      const newState = getViewFrom(state, action);
      return newState;
    },

    RECEIVE_SEARCH: (state, action) => {
      const newState = addSearchTo(state, action);
      return newState;
    }
  },
  initialState
);

const getViewFrom = (state, action) => {
  const { id, newView } = action.payload;
  const cardToChange = state[id];

  const updatedCard = {
    ...cardToChange,
    View: newView
  };

  return {
    ...state,
    [id]: updatedCard
  };
};

const addSearchTo = (state, action) => {
  const { id, searchVal } = action.payload;
  const cardToChange = state[id];

  const updatedCard = {
    ...cardToChange,
    city: searchVal
  };

  return {
    ...state,
    [id]: updatedCard
  };
};

export const getDashboard = (state) => state.root.dashboard;
