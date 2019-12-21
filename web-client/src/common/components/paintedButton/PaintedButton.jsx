import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './paintedButton.scss';

export default function PaintedButton(props) {
  const {
    className,
    onClick,
    caption,
    ...setProps
  } = props;

  return (
    <button
      className={classNames('painted-button', className)}
      type="button"
      onClick={onClick}
      {...setProps}
    >
      {caption}
    </button>
  );
}

PaintedButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.bool,
  caption: PropTypes.string,
};

PaintedButton.defaultProps = {
  className: undefined,
  caption: undefined,
  onClick: undefined,
};
