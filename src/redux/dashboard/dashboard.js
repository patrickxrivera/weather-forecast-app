import axios from 'axios';
import { createAction, handleActions } from 'redux-actions';

import { API_KEY, ROOT_URL, round, getDateFrom } from '../helpers/helpers.js';
import * as color from 'material-ui/styles/colors';
import * as schema from './dashboardSchema.js';

const FETCH_DASHBOARD_WEATHER = 'FETCH_DASHBOARD_WEATHER';
const FETCH_DASHBOARD_FORECAST = 'FETCH_DASHBOARD_FORECAST';

export const fetchView = createAction('FETCH_VIEW');
export const receiveCity = createAction('RECEIVE_CITY');

export const fetchDashboardWeather = async (city, id) => {
  const url = `${ROOT_URL}forecast/daily?units=imperial&appid=${API_KEY}&q=${city}`;
  const request = await axios.get(url); // wait for promise so we can pass id as well

  return {
    type: FETCH_DASHBOARD_WEATHER,
    payload: { ...request, id }
  };
};

export const fetchForecast = async (city, id) => {
  const url = `${ROOT_URL}forecast/daily?units=imperial&appid=${API_KEY}&q=${city}`;
  const request = await axios.get(url);

  return {
    type: FETCH_DASHBOARD_FORECAST,
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
      const newState = schema.normalizeViewData(state, action);
      return newState;
    },

    RECEIVE_CITY: (state, action) => {
      const newState = schema.normalizeCityData(state, action);
      return newState;
    },

    FETCH_DASHBOARD_WEATHER: (state, action) => {
      const newState = schema.normalizeWeatherData(state, action);
      return newState;
    },

    FETCH_DASHBOARD_FORECAST: (state, action) => {
      const newState = schema.normalizeForecastData(state, action);
      return newState;
    }
  },
  initialState
);

export const getDashboard = (state) => state.dashboard;
