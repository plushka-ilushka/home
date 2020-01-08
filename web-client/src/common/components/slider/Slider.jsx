import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../buttons/main-button/Button';

import './slider.scss';

export default function Slider(props) {
  const {
    className,
    ...restProps
  } = props;

  return (
    <div className={classNames('button-container', className)}>
      <Button
        className={classNames('button-container__button', className)}
        {...restProps}
      />
      <Button
        className={classNames('button-container__button', className)}
        {...restProps}
      />
      <Button
        className={classNames('button-container__button', className)}
        {...restProps}
      />
      <Button
        className={classNames('button-container__button', className)}
        {...restProps}
      />
    </div>
  );
}

Slider.propTypes = {
  className: PropTypes.string,
};

Slider.defaultProps = {
  className: undefined,
};
