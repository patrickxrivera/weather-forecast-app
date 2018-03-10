import { connect } from 'react-redux';

import ForecastEnhancer from './ForecastEnhancer';
import ForecastWrapper from '../../components/Forecast/ForecastWrapper/ForecastWrapper.jsx';
import { fetchForecast } from '../../redux/currentLocation/currentLocation.js';

const mapStateToProps = (state, ownProps) => {
  return {
    forecast: state.currentLocation.forecast,
    name: getName(state),
    primaryColor: state.currentLocation.primaryColor,
    secondaryColor: state.currentLocation.secondaryColor
  };
};

const getName = (state) =>
  state.currentLocation.weather ? state.currentLocation.weather.name : '';

export default connect(mapStateToProps, { fetchForecast })(
  ForecastEnhancer(ForecastWrapper)
);
