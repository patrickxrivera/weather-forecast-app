import { connect } from 'react-redux';

import {
  fetchWeather,
  fetchForecast,
  getCurrentLocation
} from '../redux/modules/currentLocation';
import NavWrapper from '../components/Nav/NavWrapper/NavWrapper.jsx';

const mapStateToProps = (state) => ({
  currentLocation: getCurrentLocation(state)
});

export default connect(mapStateToProps, { fetchWeather, fetchForecast })(
  NavWrapper
);
