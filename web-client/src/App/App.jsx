import React, { Component } from 'react';

import Input from '../common/components/input';

import './app.scss';

export default class App extends Component {

  render() {
    return (
      <div>
        <Input name="Email" label="Email" htmlFor="Email" title="Email" placeholder="email" />
        <Input type="password" name="password" label="password" htmlFor="password" title="Password" />
      </div>
    );
  }
}
