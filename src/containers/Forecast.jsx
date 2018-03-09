import { connect } from 'react-redux';

import {
  fetchForecast,
  getCurrentLocation
} from '../redux/modules/currentLocation';
import ForecastWrapper from '../components/Forecast/ForecastWrapper/ForecastWrapper.jsx';

const mapStateToProps = (state) => ({
  currentLocation: getCurrentLocation(state)
});

export default connect(mapStateToProps, { fetchForecast })(ForecastWrapper);
