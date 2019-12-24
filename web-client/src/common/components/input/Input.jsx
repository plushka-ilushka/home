import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './input.scss';

export default function Input(props) {

    const {
        title,
        className,
        name,
        type,
        value,
        handleChange,
        placeholder,
        ...restProps
    } = props;

    return (
            <input
                className={classNames("input", className)}
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                {...restProps}
            />
    );
};

Input.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.bool,
    placeholder: PropTypes.string
};

Input.defaultProps = {
    type: "text",
    className: undefined,
    name: "",
    type: undefined,
    placeholder: ""
};

