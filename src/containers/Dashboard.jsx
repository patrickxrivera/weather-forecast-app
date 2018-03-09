import { connect } from 'react-redux';

import { fetchView } from '../redux/modules/dashboard';
import DashboardWrapper from '../components/Dashboard/DashboardWrapper/DashboardWrapper.jsx';

const mapStateToProps = (state) => ({
  dashboard: state.root.dashboard
});

export default connect(mapStateToProps, { fetchView })(DashboardWrapper);
