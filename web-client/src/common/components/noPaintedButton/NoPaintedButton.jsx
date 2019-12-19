import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './noPaintedButton.scss';

export default function NoPaintedButton(props) {

    const {
        className,
        type,
        onClick,
        caption,
        ...setProps
    } = props;

    return (
        <button
            className={ classNames("no-painted-button", className) }
            type={type}
            onClick={onClick}
            {...setProps}
        >
            {caption}
        </button>
    );
};

NoPaintedButton.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.bool,
    caption: PropTypes.string
};

NoPaintedButton.defaultProps = {
    type: "button",
    className: undefined,
    caption: undefined
};
