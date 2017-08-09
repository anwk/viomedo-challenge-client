import React, { PropTypes } from 'react';
import './Button.css';

const Button = ({ text, disabled = false, onCLick, extendClass = '' }) => (
  <button
    className={'vm-button ' + extendClass}
    disabled={ disabled }
    onClick={onCLick}
  >
    {text}
  </button>
);

const { string, func, bool } = PropTypes;
Button.propTypes = {
  text: string,
  disabled: bool,
  extendClass: string,
  onCLick: func.isRequired,
};

export default Button;
