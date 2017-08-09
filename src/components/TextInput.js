import React, { PropTypes } from 'react';
import './TextInput.css';

const TextInput = ({ label, error, onChange, name, value, placeholder }) => (
  <div className='vm-input-wrapper clear-fix'>
    <label className='vm-input-label'>{label}</label>
    <input className={'vm-input ' + (error ? 'error' : '')}
      type='text'
      defaultValue={value}
      onChange={({ target }) => { onChange(name, target.value) }}
      placeholder={placeholder}
    />
    { error && <div className='vm-error-msg'>{error}</div> }
  </div>
);

const { string, func } = PropTypes;
TextInput.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  value: string,
  error: string,
};

export default TextInput;
