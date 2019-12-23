import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './secondary-button.scss';
import PrimaryButton from '../primary-button'

export default function SecondaryButton(props) {
  const { className, restProps } = props;

  return (
    <PrimaryButton 
      className={classNames('secondary-button', className)}
      {...restProps}
    />
  );
};

SecondaryButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.bool,
  caption: PropTypes.string
};

SecondaryButton.defaultProps = {
  type: "button",
  className: undefined,
  caption: undefined
};
