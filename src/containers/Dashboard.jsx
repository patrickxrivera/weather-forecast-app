import { connect } from 'react-redux';

import {
  fetchView,
  receiveCity,
  fetchDashboardWeather,
  getDashboard
} from '../redux/dashboard/dashboard.js';
import DashboardWrapper from '../components/Dashboard/DashboardWrapper/DashboardWrapper.jsx';

const mapStateToProps = (state) => ({
  dashboard: getDashboard(state)
});

export default connect(mapStateToProps, {
  fetchView,
  receiveCity,
  fetchDashboardWeather
})(DashboardWrapper);
