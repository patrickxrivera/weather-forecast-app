import { createAction, handleActions } from 'redux-actions';

import Pin from '../../components/Dashboard/Pin/Pin';
import Search from '../../components/Dashboard/Search/Search';
import * as color from 'material-ui/styles/colors';

export const fetchView = createAction('FETCH_VIEW');

const initialState = {
  1: {
    id: 1,
    View: Pin,
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
    View: Pin,
    primaryColor: color.cyan400,
    secondaryColor: color.cyan50
  }
};

export default handleActions(
  {
    FETCH_VIEW: (state, action) => {
      const newState = getNewStateFrom(state, action);
      return newState;
    }
  },
  initialState
);

const getNewStateFrom = (state, action) => {
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

export const getDashboard = (state) => state.root.dashboard;
