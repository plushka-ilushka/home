import React, { Component } from 'react';

import PaintedButton from '../common/components/PaintedButton';
import NoPaintedButton from '../common/components/NoPaintedButton';

import './app.scss';

export default class App extends Component {

  render() {
    return (
      <div>
        <PaintedButton caption="Register" />
        <NoPaintedButton caption="Login" />
      </div>
    );
  }
}
