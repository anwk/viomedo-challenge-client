import React, { PropTypes } from 'react';
import './Select.css';

const SuccessMessage = ({ text }) => (
  <div className="vm-success-message">{text}</div>
);

SuccessMessage.propTypes = {
  text: PropTypes.string.isRequired,

};

export default SuccessMessage;