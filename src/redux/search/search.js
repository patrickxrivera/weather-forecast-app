import axios from 'axios';
import { createAction, handleActions } from 'redux-actions';

import Trie from './autocomplete/';

export const getSuggestions = createAction('GET_SUGGESTIONS');

const initialState = { suggestions: [] };

export default handleActions(
  {
    GET_SUGGESTIONS: (state, action) => {
      const newState = suggest(action.payload);
      return newState;
    }
  },
  initialState
);

const ROOT_URL =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const trie = new Trie();

(async () => {
  const response = await axios.get(ROOT_URL);
  const cities = response.data.map(({ city }) => city);

  trie.populate(cities);
})();

export const suggest = (input) => {
  const suggestions = trie.suggest(input);
  return suggestions.slice(0, 5);
};
