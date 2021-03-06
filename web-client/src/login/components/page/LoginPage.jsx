/* import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import { INPUT_TYPES } from '../../../common/components/input';
import PrimaryButton from '../../../common/components/buttons/primary-button/PrimaryButton';
import SecondaryButton from '../../../common/components/buttons/secondary-button/SecondaryButton';
import Checkbox from '../../../common/components/checkbox/Checkbox';
import Image from '../../../common/components/image/Image';
import Slider from '../../../common/components/slider/Slider';
import LoginInput from '../../../common/components/login-input/LoginInput';

import shape from '../../../assets/icons/shape.svg';
import suche from '../../../assets/icons/suche.svg';
import key from '../../../assets/icons/key.svg';
import background from '../../../assets/images/background.jpg';

import { postForm } from '../../../services/requests-form';

import './login-page.scss';

export default function LoginPage(props) {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  const {
    onSubmit,
    value1,
    value2,
    onChange1,
    onChange2,
    onChange3,
    checked,
    isLoggedIn,
    onLogin,
  } = props;

  return (
    <div className="login-page">
      <div className="login-page__form-container">
        <form className="login-page__form-content" onSubmit={onSubmit}>
          <div className="login-page__logo-container">
            <p className="login-page__primary-text">Advance to your personal way of buying</p>
            <h1 className="login-page__secondary-text">Login your account</h1>
          </div>
          <div>
            <LoginInput
              glyph1={shape.id}
              viewBox1={shape.viewBox}
              type={INPUT_TYPES.EMAIL}
              name="Email"
              placeholder="Your E-Mail"
              caption="Email"
              htmlFor="Email"
              value={value1}
              onChange={onChange1}
              onMouseDown={INPUT_TYPES.EMAIL}
              onMouseUp={INPUT_TYPES.EMAIL}
            />
          </div>
          <div>
            <LoginInput
              glyph1={key.id}
              viewBox1={key.viewBox}
              glyph2={suche.id}
              viewBox2={suche.viewBox}
              type={INPUT_TYPES.PASSWORD}
              name="Password"
              placeholder="Your Password"
              caption="Password"
              htmlFor="Password"
              value={value2}
              onChange={onChange2}
              onMouseDown={INPUT_TYPES.EMAIL}
              onMouseUp={INPUT_TYPES.PASSWORD}
            />
          </div>
          <div className="login-page__block">
            <SecondaryButton caption="Register" type="submit" />
            <PrimaryButton caption="Login" type="submit" onClick={postForm} onCkick={onLogin} />
          </div>
          <div className="login-page__block">
            <Checkbox caption="Remember me" name="RememberMe" checked={checked}
            onChange={onChange3} />
            <a href="test.com" className="login-page__block__link">Forgot password?</a>
          </div>
        </form>
      </div>
      <div className="login-page__image-container">
        <Slider />
        <Image src={background} alt="Car" className="login-page__image-container__image" />
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  onSubmit: PropTypes.func,
  value1: PropTypes.string,
  value2: PropTypes.string,
  onChange1: PropTypes.func,
  onChange2: PropTypes.func,
  onChange3: PropTypes.func,
  checked: PropTypes.bool,
};

LoginPage.defaultProps = {
  onSubmit: undefined,
  value1: undefined,
  value2: undefined,
  onChange1: undefined,
  onChange2: undefined,
  onChange3: undefined,
  checked: undefined,
}; */
