import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from '../login/components/page/LoginPage';
import Dashboard from '../dashboard/Dashboard';

import './app.scss';

export default function App() {
  return (
    <Router>
      <Route exact path="/" render={() => <h2>Welcome</h2>} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={LoginPage} />
    </Router>
  );
}
