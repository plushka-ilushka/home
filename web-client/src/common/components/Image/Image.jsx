import React from 'react';

import PropTypes from 'prop-types';
import './Image.scss';

export default function Image(props) {

    return (
        <img
            className={props.className}
            src={props.src}
        />
    );
};

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string
};

Image.defaultProps = {
    className: "",
    src: ""
};