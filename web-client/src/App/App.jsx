import React, { Component } from 'react';

import Input from '../common/components/input';
import PaintedButton from '../common/components/PaintedButton';
import NoPaintedButton from '../common/components/NoPaintedButton';
import Icon from '../common/components/icon';
import Image from '../common/components/image';
import Checkbox from '../common/components/checkbox';

import shape from '../assets/icons/shape.svg';
import key from '../assets/icons/key.svg';
import suche from '../assets/icons/suche.svg';

import './app.scss';

export default class App extends Component {

  render() {
    return (
      <div>
        <Input name="Email" label="Email" htmlFor="Email" title="Email" placeholder="email" />
        <Input type="password" name="password" label="password" htmlFor="password" title="Password" />
        <PaintedButton caption="Register" />
        <NoPaintedButton caption="Login" />
        <Icon src={shape} />
        <Icon src={key} />
        <Icon src={suche} />
        <Image />
        <Checkbox htmlFor="checkbox" name="checkbox" title="Remember me" htmlFor="checkbox" id="checkbox" />
      </div>
    );
  }
}
