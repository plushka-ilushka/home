import React, { Component } from 'react';

import Input from '../input';
import Button from '../button';
import Icon from '../icon';
import Image from '../image';

import './app.scss';

export default class App extends Component {

  render() {
    return (
      <div>
        <Input className="input" name="Email" label="Email" htmlFor="Email" title="Email" />
        <Input className="input" type="password" name="password" label="password" htmlFor="password" title="Password" />
        <Input className="check-box-outline-blank" type="checkbox" name="checkbox" label="checkbox" htmlFor="checkbox" title="Remember me" />
        <Button className="blue-outline button" value="Register" />
        <Button className="base button" value="Login" />
        <Icon />
        <Image />
      </div>
    );
  }
}
