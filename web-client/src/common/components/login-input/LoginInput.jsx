import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from '../label/Label';
import Icon from '../icon/Icon';
import Input from '../input/Input';

import INPUT_TYPES from '../input/constants';

import './login-input.scss';

export default function LoginInput(props) {
  const {
    className,
    caption,
    name,
    type,
    placeholder,
    glyph1,
    glyph2,
    viewBox1,
    viewBox2,
  } = props;

  return (
    <Label
      className={classNames('login-input', className)}
      captionClassName="login-input__label"
      caption={caption}
    >
      <div>
        <Icon
          glyph={glyph1}
          viewBox={viewBox1}
          className="login-input__icon"
        />
        <Icon
          glyph={glyph2}
          viewBox={viewBox2}
          className={classNames('login-input__icon', className)}
        />
      </div>
      <Input
        className={className}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
      />
    </Label>
  );
}

LoginInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  caption: PropTypes.string,
  glyph1: PropTypes.string,
  glyph2: PropTypes.string,
  viewBox1: PropTypes.string,
  viewBox2: PropTypes.string,
};

LoginInput.defaultProps = {
  type: INPUT_TYPES.TEXT,
  className: undefined,
  name: undefined,
  placeholder: undefined,
  caption: undefined,
  glyph1: undefined,
  glyph2: undefined,
  viewBox1: undefined,
  viewBox2: undefined,
};
