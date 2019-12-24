import React, { Component } from 'react';

import Input from '../common/components/input';

import './app.scss';

export default class App extends Component {

  render() {
    return (
      <div>
        <Input name = "E - mail"/>
        <Input name = "Password"/>
      </div>
    );
  }
}
