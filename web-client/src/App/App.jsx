import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from '../login/components/page/LoginPage';
import Dashboard from '../dashboard/Dashboard';

import './app.scss';

export default function App() {
  return (
    <Router>
      <Route exact path="/" render={() => <h1>Welcome to the club, body</h1>} />
      <Route
        path="/login"
        render={() => (
          <LoginPage
            isLoggedIn={false}
            onLogin={() => {}}
          />
        )}
      />

      <Route
        path="/dashboard"
        render={() => (
          <Dashboard isLoggedIn={false} />)}
      />
    </Router>
  );
}
