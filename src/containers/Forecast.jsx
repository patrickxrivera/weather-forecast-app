import { connect } from 'react-redux';

import { fetchForecast } from '../redux/modules/currentLocation';
import ForecastWrapper from '../components/Forecast/ForecastWrapper/ForecastWrapper.jsx';

const mapStateToProps = (state) => ({
  currentLocation: state.root.currentLocation
});

export default connect(mapStateToProps, { fetchForecast })(ForecastWrapper);
