import React, { Component } from 'react';

import Input from '../common/components/input';
import PaintedButton from '../common/components/PaintedButton';
import NoPaintedButton from '../common/components/NoPaintedButton';
import Icon from '../common/components/icon';
import Image from '../common/components/image';
import Checkbox from '../common/components/checkbox';

import './app.scss';

export default class App extends Component {

  render() {
    return (
      <div>
        <Input name="Email" label="Email" htmlFor="Email" title="Email" placeholder="email" />
        <Input type="password" name="password" label="password" htmlFor="password" title="Password" />
        <PaintedButton className="blue-outline" caption="Register" />
        <NoPaintedButton className="base" caption="Login" />
        <Icon />
        <Image />
        <Checkbox htmlFor="checkbox" name="checkbox" title="Remember me" htmlFor="checkbox" id="checkbox" />
      </div>
    );
  }
}
