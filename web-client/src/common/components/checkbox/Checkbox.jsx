import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Input from '../input/Input';
import Icon from '../icon/Icon';
import Label from '../label/Label';

import './checkbox.scss';

export default function Checkbox(props) {
  const {
    caption,
    className,
    name,
    onClick,
    type,
    glyph,
    viewBox,
    ...restProps
  } = props;


  return (
    <div>
      <Label
        htmlFor={name}
      >
        <Input
          type={type}
          id={name}
          name={name}
          className={classNames('none-input', className)}
          onClick={onClick}
          {...restProps}
        />
        <Icon glyph={glyph} viewBox={viewBox} />
        {caption}
      </Label>
    </div>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  caption: PropTypes.string,
  onClick: PropTypes.func,
  glyph: PropTypes.string,
  viewBox: PropTypes.string,
};

Checkbox.defaultProps = {
  type: 'checkbox',
  className: undefined,
  name: undefined,
  onClick: undefined,
  caption: undefined,
  glyph: undefined,
  viewBox: undefined,
};
