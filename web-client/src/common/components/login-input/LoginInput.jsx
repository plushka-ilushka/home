import React, { useState } from 'react';
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
    value,
    onChange,
    onMouseDown,
    onMouseUp,
  } = props;

  const [hidden, isHidden] = useState(type);

  return (
    <Label
      className={classNames('login-input', className)}
      captionClassName="login-input__label"
      caption={caption}
    >
      <Icon
        glyph={glyph1}
        viewBox={viewBox1}
        className="login-input__icon"
      />
      <Input
        className={className}
        id={name}
        name={name}
        type={hidden}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
      <Icon
        glyph={glyph2}
        viewBox={viewBox2}
        className="login-input__icon"
        onMouseDown={() => isHidden(onMouseDown)}
        onMouseUp={() => isHidden(onMouseUp)}
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
  value: PropTypes.string,
  onChange: PropTypes.func,
  onMouseDown: PropTypes.string,
  onMouseUp: PropTypes.string,
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
  value: undefined,
  onChange: undefined,
  onMouseDown: undefined,
  onMouseUp: undefined,
};
