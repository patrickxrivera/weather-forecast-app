import { connect } from 'react-redux';

import {
  fetchView,
  receiveSearch,
  getDashboard
} from '../redux/modules/dashboard';
import DashboardWrapper from '../components/Dashboard/DashboardWrapper/DashboardWrapper.jsx';

const mapStateToProps = (state) => ({
  dashboard: getDashboard(state)
});

export default connect(mapStateToProps, { fetchView, receiveSearch })(
  DashboardWrapper
);
