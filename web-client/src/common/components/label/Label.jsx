import React from 'react';
import classNames from 'classnames';

import "./label.scss";

export default function Label(props) {
    const {
        className,
        children,
    } = props;

    return (
        <label className = {classNames('label', className)}>
            {children}
        </label>
    )
}
