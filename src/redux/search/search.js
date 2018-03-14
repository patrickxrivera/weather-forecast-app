import { createAction, handleActions } from 'redux-actions';

import { filterSuggestions } from './helpers.js';

export const fetchSuggestions = createAction('FETCH_SUGGESTIONS');
export const resetSuggestions = createAction('RESET_SUGGESTIONS');

const initialState = { suggestions: [] };

export default handleActions(
  {
    FETCH_SUGGESTIONS: (state, action) => {
      const suggestions = filterSuggestions(action.payload);
      return {
        ...state,
        suggestions
      };
    },

    RESET_SUGGESTIONS: (state, action) => {
      const suggestions = [];
      return {
        ...state,
        suggestions
      };
    }
  },
  initialState
);

export const getSuggestions = (state) => state.search.suggestions;
