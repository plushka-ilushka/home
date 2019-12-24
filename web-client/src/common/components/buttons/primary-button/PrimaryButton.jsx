import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './primary-button.scss';
import Button from '../main-button/Button';

export default function PrimaryButton(props) {
    const { className, restProps, caption } = props;

    return (
        <Button
            className={classNames('primary-button', className)}
            {...restProps}
            
        />
    );
};

PrimaryButton.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.bool,
    caption: PropTypes.string
};

PrimaryButton.defaultProps = {
    type: "button",
    className: undefined,
    caption: undefined
};
