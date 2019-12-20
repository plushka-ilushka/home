import React, { Component } from 'react';

import Icon from '../common/components/icon';

import shape from '../assets/icons/shape.svg';
import key from '../assets/icons/key.svg';
import suche from '../assets/icons/suche.svg';

import './app.scss';

export default class App extends Component {

  render() {
    return (
      <div>
        <Icon src={shape} />
        <Icon src={key} />
        <Icon src={suche} />
      </div>
    );
  }
}
