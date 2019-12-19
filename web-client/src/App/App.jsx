import React, { Component } from 'react';

import PaintedButton from '../common/components/PaintedButton';
import NoPaintedButton from '../common/components/NoPaintedButton';

import './app.scss';

export default class App extends Component {

  render() {
    return (
      <div>
        <PaintedButton className="blue-outline" caption="Register" />
        <NoPaintedButton className="base" caption="Login" />
      </div>
    );
  }
}
