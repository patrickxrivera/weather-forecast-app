import { connect } from 'react-redux';

import ForecastEnhancer from './ForecastEnhancer';
import ForecastWrapper from '../../components/Forecast/ForecastWrapper/ForecastWrapper.jsx';

const mapStateToProps = (state) => ({
  forecast: state.currentLocation.forecast,
  name: getName(state)
});

const getName = (state) =>
  state.currentLocation.weather ? state.currentLocation.weather.name : '';

export default connect(mapStateToProps)(ForecastEnhancer(ForecastWrapper));
