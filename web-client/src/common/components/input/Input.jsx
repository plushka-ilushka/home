import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './input.scss';

export default function Input(props) {
  const {
    title,
    className,
    name,
    type,
    value,
    placeholder,
    ...setProps
  } = props;

  return (
    <label className={classNames('label', className)} htmlFor={name}>
      {title}
      <input
        className={classNames('input', className)}
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        {...setProps}
      />
    </label>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
};

Input.defaultProps = {
  className: undefined,
  id: '',
  name: '',
  type: undefined,
  placeholder: '',
  title: '',
  value: '',
};
