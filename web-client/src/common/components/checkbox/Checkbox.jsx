import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Input from '../input/Input';
import Icon from '../icon/Icon';
import Label from '../label/Label';

import checkboxIcon from '../../../assets/icons/checkbox.svg';

import './checkbox.scss';

export default function Checkbox(props) {
  const {
    caption,
    className,
    name,
    onClick,
    type,
    ...restProps
  } = props;

  return (
    <Label
      htmlFor={name}
      className="checkbox"
    >
      <Input
        type={type}
        id={name}
        name={name}
        className={classNames('checkbox__input', className)}
        onClick={onClick}
        {...restProps}
      />
      <Icon glyph={checkboxIcon.id} viewBox={checkboxIcon.viewBox} className="checkbox__icon" />
      {caption}
    </Label>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  caption: PropTypes.string,
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  type: 'checkbox',
  className: undefined,
  name: undefined,
  onClick: undefined,
  caption: undefined,
};
