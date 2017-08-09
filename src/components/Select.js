import React, { PropTypes } from 'react';
import './Select.css';

const Select = ({ label, options = [], onChange, error = '', ...others }) => (
  <div className={'vm-select clear-fix ' + (error && 'error')}>
    <label className='vm-select-label'>{label}</label>
    <select
      onChange={({ target }) => onChange(target.name, target.value)}
      {...others}
    >
      {
        options.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))
      }
    </select>
    { error && <div className='vm-error-msg'>{error}</div> }
  </div>
);

const { string, array, func } = PropTypes;
Select.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  options: array.isRequired,
  onChange: func.isRequired,
  value: string,
  error: string,
};

export default Select;