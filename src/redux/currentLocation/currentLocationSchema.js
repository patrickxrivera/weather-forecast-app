import { getDaysFrom, getForecast } from '../helpers/helpers.js';
import { round } from '../helpers/helpers.js';

export const normalizeWeatherData = ({ payload }) => {
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

export const normalizeForecastData = ({ payload }) => {
  const { list } = payload.data;
  const days = getDaysFrom(list);
  const forecast = days.map(getForecast);
  return forecast;
};
