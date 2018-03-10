import axios from 'axios';
import { createAction, handleActions } from 'redux-actions';

import * as color from 'material-ui/styles/colors';
import { API_KEY, ROOT_URL, round } from '../../utils/api.js';

const FETCH_PIN_WEATHER = 'FETCH_PIN_WEATHER';

export const fetchView = createAction('FETCH_VIEW');
export const receiveCity = createAction('RECEIVE_CITY');

export const fetchPinWeather = async (city, id) => {
  const url = `${ROOT_URL}forecast/daily?units=imperial&appid=${API_KEY}&q=${city}`;
  const request = await axios.get(url); // wait for promise so we can pass id as well

  return {
    type: FETCH_PIN_WEATHER,
    payload: { ...request, id }
  };
};

const initialState = {
  1: {
    id: 1,
    View: 'Pin',
    primaryColor: color.deepPurple400,
    secondaryColor: color.deepPurple50
  },
  2: {
    id: 2,
    View: 'Pin',
    primaryColor: color.blue700,
    secondaryColor: color.blue50
  },
  3: {
    id: 3,
    View: 'Pin',
    primaryColor: color.cyan400,
    secondaryColor: color.cyan50
  }
};

export default handleActions(
  {
    FETCH_VIEW: (state, action) => {
      const newState = normalizeViewData(state, action);
      return newState;
    },

    RECEIVE_CITY: (state, action) => {
      const newState = normalizeCityData(state, action);
      return newState;
    },

    FETCH_PIN_WEATHER: (state, action) => {
      const newState = normalizeWeatherData(state, action);
      return newState;
    }
  },
  initialState
);

const normalizeViewData = (state, action) => {
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

const normalizeCityData = (state, action) => {
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

const normalizeWeatherData = (state, { payload }) => {
  const { id } = payload;
  const { list } = payload.data;
  const today = getTodayFrom(list);
  const data = { today, id, state };
  const updatedCard = updateCardWithWeather(data);

  return {
    ...state,
    [id]: updatedCard
  };
};

const getTodayFrom = (list) => {
  let today = list.slice(0, 1); // array of forecasts for next 7 days, today is idx 0
  return today[0]; // extract object from array
};

const updateCardWithWeather = (data) => {
  const { today, id, state } = data;
  const cardToChange = state[id];

  const description = today.weather[0].main;
  const { day, min, max } = today.temp;

  const weather = {
    description,
    average: round(day),
    high: round(max),
    low: round(min)
  };

  const updatedCard = {
    ...cardToChange,
    weather
  };

  return updatedCard;
};

export const getDashboard = (state) => state.dashboard;
