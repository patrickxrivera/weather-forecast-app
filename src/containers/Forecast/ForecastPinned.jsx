import { connect } from 'react-redux';

import ForecastEnhancer from './ForecastEnhancer';
import ForecastWrapper from '../../components/Forecast/ForecastWrapper/ForecastWrapper.jsx';

const mapStateToProps = (state) => ({
  name: state.currentLocation.weather.name
});

export default connect(mapStateToProps)(ForecastEnhancer(ForecastWrapper));
