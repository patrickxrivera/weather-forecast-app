import axios from 'axios';
import { handleActions } from 'redux-actions';

import { API_KEY, ROOT_URL, round, getDateFrom } from '../../utils/api.js';

const FETCH_WEATHER = 'FETCH_WEATHER';
const FETCH_FORECAST = 'FETCH_FORECAST';

export const fetchWeather = ({ latitude, longitude }) => {
  const url = `${ROOT_URL}weather?units=imperial&appid=${API_KEY}&lat=${latitude}&lon=${longitude}`;
  console.log(url);
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};

export const fetchForecast = (lat, lon) => {
  const url = `${ROOT_URL}forecast/daily?units=imperial&appid=${API_KEY}&lat=${lat}&lon=${lon}`;
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
      const weather = normalizeWeatherData(action);
      return {
        ...state,
        weather
      };
    },

    FETCH_FORECAST: (state, action) => {
      const forecast = normalizeForecastData(action);
      return {
        ...state,
        forecast
      };
    }
  },
  initialState
);

const normalizeWeatherData = ({ payload }) => {
  const { data } = payload;
  const { name } = data;
  const { lat, lon } = data.coord;
  let { temp } = data.main;
  temp = round(temp);
  const description = data.weather[0].main;

  const weather = {
    name,
    temp,
    lat,
    lon,
    description
  };

  return weather;
};

const normalizeForecastData = ({ payload }) => {
  const { list } = payload.data;
  const days = getDaysFrom(list);
  const forecast = days.map(getForecast);
  return forecast;
};

const getDaysFrom = (list) => {
  const daysToForecast = 5;
  const days = list.slice(1, daysToForecast + 1); // first forecast is current day so "+1 offsets to get forecasts starting tomorrow"
  return days;
};

const getForecast = (day) => {
  const timestamp = day.dt;
  const tempDecimal = day.temp.day;
  const description = day.weather[0].main;

  const temp = round(tempDecimal);
  const date = getDateFrom(timestamp);

  const newForecast = {
    id: timestamp,
    date,
    temp,
    description
  };

  return newForecast;
};

export const getCurrentLocation = (state) => state.root.currentLocation;
