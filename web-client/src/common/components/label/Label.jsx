import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './label.scss';

export default function Label(props) {
  const {
    className,
    children,
    name,
    caption,
    captionClassName,
  } = props;

  return (
    <label
      className={classNames('label', className)}
      htmlFor={name}
    >
      <div className={captionClassName}>{caption}</div>
      {children}
    </label>
  );
}

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  caption: PropTypes.string,
  captionClassName: PropTypes.string,
};

Label.defaultProps = {
  className: undefined,
  name: undefined,
  caption: undefined,
  captionClassName: undefined,
};
