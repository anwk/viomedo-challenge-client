import React from 'react';
import './input.css';

export default ({ name, value, onChange, error }) => (
  <div>
    <input name={name} value={value}/>
  </div>
);
