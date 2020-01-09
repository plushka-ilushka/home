import React, { Component } from 'react';

import LoginPage from '../page/LoginPage';

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      RememberMe: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const RememberMe = localStorage.getItem('RememberMe') === 'true';
    const email = RememberMe ? localStorage.getItem('email') : '';
    const password = RememberMe ? localStorage.getItem('password') : '';
    this.setState({ email, password, RememberMe });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleRememberMeChange(event) {
    this.setState({
      RememberMe: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      email,
      password,
      RememberMe,
    } = this.state;

    localStorage.setItem('RememberMe', RememberMe);
    localStorage.setItem('email', RememberMe ? email : '');
    localStorage.setItem('password', RememberMe ? password : '');

    const apiBase = `/login?password=${password}&userName=${email}`;
    fetch(apiBase, {
      method: 'post',
      body: JSON.stringify({
        // email: this.state.email,
        // password: this.state.password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res.status);

        if (!res.ok) {
          alert('Ошибка авторизации!');
          throw new Error(`Could not fetch ${apiBase}, received ${res.status}`);
        }
      })
      .catch((error) => {
        console.error(`Could not fetch${error}`);
      });
  }

  render() {
    return (
      <LoginPage
        onSubmit={this.handleSubmit}
        // value1={this.state.email}
        onChange1={this.handleEmailChange}
        // value2={this.state.password}
        onChange2={this.handlePasswordChange}
        // checked={this.state.RememberMe}
        onChange3={this.handleRememberMeChange}
      />
    );
  }
}
