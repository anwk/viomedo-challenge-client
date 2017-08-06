import React from 'react';
import './input.css';

const Option = (item) =>
  <option value={item}>item</option>;

export default ({ name, value, options = [], onChange, error }) => (
  <div>
    <select name={name}>
      { options.map(Option) }
    </select>
  </div>
);
