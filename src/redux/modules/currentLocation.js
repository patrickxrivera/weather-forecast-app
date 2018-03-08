import axios from 'axios';
import { handleActions } from 'redux-actions';
import moment from 'moment-timezone';

const API_KEY = '5367d13ed05e34e3342d4fdbc4f5cb7e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/`;
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
  const days = list.slice(0, daysToForecast);
  return days;
};

const getForecast = (day) => {
  const timestamp = day.dt;
  const temp = day.temp.day;
  const description = day.weather[0].main;

  const roundedTemp = round(temp);
  const date = getDateFrom(timestamp);

  const newForecast = {
    [timestamp]: {
      id: timestamp,
      date,
      temp,
      description
    }
  };

  return newForecast;
};

const getDateFrom = (timestamp) => {
  return moment
    .unix(timestamp)
    .format('ddd')
    .toUpperCase();
};

const round = (num) => Math.round(num);
