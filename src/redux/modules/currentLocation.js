import axios from 'axios';
import { handleActions } from 'redux-actions';

const API_KEY = '5367d13ed05e34e3342d4fdbc4f5cb7e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${API_KEY}&`;
const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = ({ latitude, longitude }) => {
  const url = `${ROOT_URL}lat=${latitude}&lon=${longitude}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};

const initialState = {};

export default handleActions(
  {
    FETCH_WEATHER: (state, action) => {
      const weather = normalizeWeatherData(action);
      return { weather };
    }
  },
  initialState
);

const normalizeWeatherData = ({ payload }) => {
  const { data } = payload;
  const { name } = data;
  let { temp } = data.main;
  temp = Math.round(temp);
  const description = data.weather[0].main;

  const weather = {
    name,
    temp,
    description
  };

  return weather;
};
