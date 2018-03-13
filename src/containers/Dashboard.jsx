import { connect } from 'react-redux';

import {
  fetchView,
  receiveCity,
  fetchDashboardWeather,
  getDashboard
} from '../redux/dashboard/dashboard.js';
import { fetchSuggestions, getSuggestions } from '../redux/search/search.js';
import DashboardWrapper from '../components/Dashboard/DashboardWrapper/DashboardWrapper.jsx';

const mapStateToProps = (state) => ({
  dashboard: getDashboard(state),
  suggestions: getSuggestions(state)
});

export default connect(mapStateToProps, {
  fetchView,
  receiveCity,
  fetchDashboardWeather,
  fetchSuggestions
})(DashboardWrapper);
