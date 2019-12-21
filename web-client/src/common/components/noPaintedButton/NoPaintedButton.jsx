import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './noPaintedButton.scss';

export default function NoPaintedButton(props) {
  const {
    className,
    onClick,
    caption,
    ...setProps
  } = props;

  return (
    <button
      className={classNames('no-painted-button', className)}
      type="button"
      onClick={onClick}
      {...setProps}
    >
      {caption}
    </button>
  );
}

NoPaintedButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.bool,
  caption: PropTypes.string,
};

NoPaintedButton.defaultProps = {
  className: undefined,
  caption: undefined,
  onClick: undefined,
};
