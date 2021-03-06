import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './icon.scss';

export default function Icon({
  glyph, viewBox, className = 'icon', ...props
}) {
  return (
    <svg
      className={classNames('icon', className)}
      viewBox={viewBox}
      {...props}
    >
      <use
        xlinkHref={`#${glyph}`}
      />
    </svg>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  glyph: PropTypes.string,
  viewBox: PropTypes.string,
};

Icon.defaultProps = {
  className: undefined,
  glyph: undefined,
  viewBox: undefined,
};
