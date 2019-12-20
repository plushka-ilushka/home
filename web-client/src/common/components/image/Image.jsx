import React from 'react';

import PropTypes from 'prop-types';
import './image.scss';

export default function Image(props) {

    const {
        className,
        src
    } = props;

    return (
        <img
            className={className}
            src={src}
        />
    );
};

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string
};

Image.defaultProps = {
    className: undefined,
    src: ""
};