import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './icon.scss';

export default function Icon(props) {

    const {
        className,
        src,
        ...setProps
    } = props;

    return (
        <img
            className={classNames("shape", className)}
            src={src}
            {...setProps}
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
