import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './checkbox.scss';

export default function Checkbox(props) {
  const {
    title,
    className,
    name,
    type,
    onClick,
    ...setProps
  } = props;

  return (
    <label className={classNames('labels i', className)} htmlFor={name}>
      {title}
      <input
        className={classNames('check-box', className)}
        id={name}
        name={name}
        type={type}
        onClick={onClick}
        {...setProps}
      />
      <i />
    </label>
  );
}

Checkbox.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.bool,
};

Checkbox.defaultProps = {
  title: '',
  type: 'checkbox',
  className: undefined,
  id: '',
  name: '',
  onClick: undefined,
};
