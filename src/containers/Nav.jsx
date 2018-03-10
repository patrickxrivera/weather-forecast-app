import { connect } from 'react-redux';

import {
  fetchWeather,
  fetchForecast,
  getCurrentLocation
} from '../redux/currentLocation/currentLocation.js';
import NavWrapper from '../components/Nav/NavWrapper/NavWrapper.jsx';

const mapStateToProps = (state) => ({
  currentLocation: getCurrentLocation(state)
});

export default connect(mapStateToProps, { fetchWeather, fetchForecast })(
  NavWrapper
);
