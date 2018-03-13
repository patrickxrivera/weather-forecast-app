import { createAction, handleActions } from 'redux-actions';

import { suggest } from './helpers.js';

export const fetchSuggestions = createAction('FETCH_SUGGESTIONS');

const initialState = { suggestions: [] };

export default handleActions(
  {
    FETCH_SUGGESTIONS: (state, action) => {
      const suggestions = suggest(action.payload);
      return {
        ...state,
        suggestions
      };
    }
  },
  initialState
);

export const getSuggestions = (state) => state.search.suggestions;
