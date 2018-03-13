import axios from 'axios';

const ROOT_URL =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

export const setCities = async () => {
  const response = await axios.get(ROOT_URL);
  const cities = response.data.map(({ city }) => city);

  const serializedState = JSON.stringify(cities);
  localStorage.setItem('cities', serializedState);

  return cities;
};

export const cities = JSON.parse(localStorage.getItem('cities'));
