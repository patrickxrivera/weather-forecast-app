import { round, getDateFrom } from '../helpers/helpers.js';

export const normalizeViewData = (state, action) => {
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

export const normalizeCityData = (state, action) => {
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

export const normalizeWeatherData = (state, { payload }) => {
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
  const { eve, max, min } = today.temp;

  const weather = {
    description,
    average: round(eve),
    high: round(max),
    low: round(min)
  };

  const updatedCard = {
    ...cardToChange,
    weather
  };

  return updatedCard;
};

export const normalizeForecastData = (state, { payload }) => {
  const { id } = payload;
  const { list } = payload.data;

  const days = getDaysFrom(list);
  const forecast = days.map(getForecast);
  const cardToChange = state[id];

  const updatedCard = {
    ...cardToChange,
    forecast
  };

  return {
    ...state,
    [id]: updatedCard
  };
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
