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
