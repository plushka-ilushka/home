import React from 'react';

import PropTypes from 'prop-types';
import './Input.scss';

export default function Input(props) {

    return (
        <div>
            <label className="label" htmlFor={props.name}>
                {props.title}
            </label>
            <input
                className={props.className}
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
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
    className: "",
    id: "",
    name: "",
    type: "",
    placeholder: ""
};

