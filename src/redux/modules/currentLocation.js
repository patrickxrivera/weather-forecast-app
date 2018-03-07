import axios from 'axios';
import { createAction, handleActions } from 'redux-actions';

const API_KEY = '5367d13ed05e34e3342d4fdbc4f5cb7e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&`;
const FETCH_CURRENT_LOCATION_WEATHER = 'FETCH_CURRENT_LOCATION_WEATHER';

window.fetchCurrentLocationWeather = fetchCurrentLocationWeather;

export const fetchCurrentLocationWeather = ({ latitude, longitude }) => {
  const url = `${ROOT_URL}lat=${latitude}&lon=${longitude}`;
  console.log(url);
  const request = axios.get(url);

  return {
    type: FETCH_CURRENT_LOCATION_WEATHER,
    payload: request
  };
};

const initialState = {};

export default handleActions(
  {
    FETCH_CURRENT_LOCATION_WEATHER: (state, action) => {
      const hello = 'test';
      return {
        ...state
      };
    }
  },
  initialState
);

export const getTodos = (state) => state;
