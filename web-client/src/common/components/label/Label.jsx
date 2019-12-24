import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './label.scss';

export default function Label(props) {
  const {
    className,
    children,
  } = props;

  return (
    <label className={classNames('label', className)}>
      {children}
    </label>
  );
}

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Label.defaultProps = {
  className: undefined,
};
