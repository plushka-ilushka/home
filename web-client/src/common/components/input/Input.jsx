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
        ...setProps
    } = props;

    return (
        <label className={classNames("label", className)} htmlFor={name}>
            {title}
            <input
                className={classNames("input", className)}
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                {...setProps}
            />
        </label>
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
    id: "",
    name: "",
    type: undefined,
    placeholder: ""
};

