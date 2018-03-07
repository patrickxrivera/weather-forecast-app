import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './components/App/App.jsx';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
);

export default Routes;
