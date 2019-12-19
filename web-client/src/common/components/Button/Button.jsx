import React from 'react';

import PropTypes from 'prop-types';
import './Button.scss';

export default function Button(props) {

    return (
        <div>
            <button
                className={props.className}
                type={props.type}
                onChange={props.handleChange}
            >{props.value}</button>
        </div>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.bool,
    value: PropTypes.string
};

Button.defaultProps = {
    type: "submit",
    className: "",
    value: ""
};
