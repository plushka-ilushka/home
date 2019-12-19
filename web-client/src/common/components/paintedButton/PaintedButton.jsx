import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './paintedButton.scss';

export default function PaintedButton(props) {

    const {
        className,
        type,
        onClick,
        caption,
        ...setProps
    } = props;

    return (
        <button
            className={ classNames("painted-button", className) }
            type={type}
            onClick={onClick}
            {...setProps}
        >
            {caption}
        </button>
    );
};

PaintedButton.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.bool,
    caption: PropTypes.string
};

PaintedButton.defaultProps = {
    type: "button",
    className: undefined,
    caption: undefined
};
