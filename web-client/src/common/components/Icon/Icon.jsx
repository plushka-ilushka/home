import React from 'react';

import PropTypes from 'prop-types';
import './Icon.scss';

export default function Icon(props) {

    return (
        <i
            className={props.className}
            src={props.src}
        />
    );
};

Icon.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string
};

Icon.defaultProps = {
    className: "",
    src: ""
};
