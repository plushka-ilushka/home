import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './secondary-button.scss';
import PrimaryButton from '../primary-button';

export default function SecondaryButton(props) {
  const { className, ...restProps } = props;

  return (
    <PrimaryButton
      className={classNames('secondary-button', className)}
      {...restProps}
    />
  );
}

SecondaryButton.propTypes = {
  className: PropTypes.string,
};

SecondaryButton.defaultProps = {
  className: undefined,
};
