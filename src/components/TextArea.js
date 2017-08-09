import React, { PropTypes } from 'react';
import './TextArea.css';

const TextInput = ({ label, onChange, error, ...others }) => (
  <div className='vm-text-area-wrapper clear-fix'>
    <label className="vm-text-area-label">{label}</label>
    <textarea className={'vm-text-area ' + (error && 'error')}
      onChange={({ target }) => onChange(target.name, target.value)}
      {...others}
    />
    { error && <div className='vm-error-msg'>{error}</div> }
  </div>
);

const { string, func } = PropTypes;
TextInput.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  value: string,
  placeholder: string,
  error: string,
};

export default TextInput;
