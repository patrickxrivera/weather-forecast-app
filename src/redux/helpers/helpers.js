import moment from 'moment-timezone';

export const API_KEY = '5367d13ed05e34e3342d4fdbc4f5cb7e';
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/`;

export const round = (num) => Math.round(num);

export const getDateFrom = (timestamp) => {
  return moment
    .unix(timestamp)
    .format('ddd')
    .toUpperCase();
};

export const getDaysFrom = (list) => {
  const daysToForecast = 5;
  const days = list.slice(1, daysToForecast + 1); // first forecast is current day so "+1 offsets to get forecasts starting tomorrow"
  return days;
};

export const getForecast = (day) => {
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
