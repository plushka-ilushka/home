/* import React, { Component } from 'react';

import LoginPage from '../page/LoginPage';

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //email: '',
      //password: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    // console.log('handleEmailChange', this);
    this.setState({
      //email: event.target.value,
    });
  }

  handlePasswordChange(event) {
    // console.log('handlePasswordChange', this);
    this.setState({
      //password: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('form submitted and email value is', this.state.email);
    // console.log('form submitted and password value is', this.state.password);
  }

  render() {
    return (
      <LoginPage
        onSubmit={this.handleSubmit}
        // value1={this.state.email}
        onChange1={this.handleEmailChange}
        // value2={this.state.password}
        onChange2={this.handlePasswordChange}
      />
    );
  }
} */
