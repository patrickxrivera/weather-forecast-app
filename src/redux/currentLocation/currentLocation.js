import axios from 'axios';
import { handleActions } from 'redux-actions';

import { API_KEY, ROOT_URL, round, getDateFrom } from '../helpers/helpers.js';
import * as schema from './currentLocationSchema.js';

const FETCH_WEATHER = 'FETCH_WEATHER';
const FETCH_FORECAST = 'FETCH_FORECAST';

export const fetchWeather = ({ latitude, longitude }) => {
  const url = `${ROOT_URL}weather?units=imperial&appid=${API_KEY}&lat=${latitude}&lon=${longitude}`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};

export const fetchForecast = (city) => {
  const url = `${ROOT_URL}forecast/daily?units=imperial&appid=${API_KEY}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_FORECAST,
    payload: request
  };
};

const initialState = {};

export default handleActions(
  {
    FETCH_WEATHER: (state, action) => {
      const weather = schema.normalizeWeatherData(action);
      return {
        ...state,
        weather
      };
    },

    FETCH_FORECAST: (state, action) => {
      const forecast = schema.normalizeForecastData(action);
      return {
        ...state,
        forecast
      };
    }
  },
  initialState
);

export const getCurrentLocation = (state) => state.currentLocation;
