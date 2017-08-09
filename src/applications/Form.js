import React, { Component, PropTypes } from 'react';
import { TextInput, Select, TextArea, Button } from '../components';
import validator from './validator';
import './Form.css';

class ApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    const { onSubmit, ...others } = props;
    this.state = {
      fields: others,
      errors: {},
      isValid: false,
    };
  }

  onChange(prop, value) {
    const { fields } = this.state;
    fields[prop] = value;
    const { errors, isValid } = validator(fields);
    this.setState({
      fields: fields,
      errors,
      isValid,
    })
  }

  onSubmit(event) {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { isValid, fields } = this.state;
    if (isValid) onSubmit(fields);
  }

  render() {
    const { fields, errors, isValid } = this.state;
    return (
        <form className="vm-application-form clear-fix">
          <TextInput
            name="firstname"
            label="First Name* : "
            placeholder="Please enter first name"
            value={fields.firstname}
            onChange={this.onChange}
            error={errors.firstname}
          />
          <TextInput
            name="lastname"
            label="Last Name* : "
            placeholder="Please enter last name"
            value={fields.lastname}
            onChange={this.onChange}
            error={errors.lastname}
          />
          <TextInput
            name="email"
            label="Email* : "
            placeholder="Please enter email"
            value={fields.email}
            onChange={this.onChange}
            error={errors.email}
          />
          <TextInput
            name="phone"
            label="Phone number* : "
            placeholder="Please enter phone number"
            value={fields.phone}
            onChange={this.onChange}
            error={errors.phone}
          />
          <TextInput
            name="age"
            label="Age* : "
            placeholder="Please enter your age"
            value={fields.age}
            onChange={this.onChange}
            error={errors.age}
          />
          <Select
            label="Gender* : "
            name="gender"
            options={['gender', 'male', 'female']}
            onChange={this.onChange}
            error={errors.gender}
          />
          <TextInput
            label="Zip code* : "
            name="zip"
            placeholder="Please enter zip code"
            value={fields.zip}
            onChange={this.onChange}
            error={errors.zip}
          />
          <TextArea
            label="Terms* : "
            name="termsAccepted"
            placeholder="Please enter terms"
            value={fields.termsAccepted}
            onChange={this.onChange}
            error={errors.termsAccepted}
          />
          <Button
            text="Send"
            disabled={!isValid}
            onCLick={this.onSubmit}
            extendClass="vm-form-button"
          />
        </form>
    );
  }
}

const { number, string, func } = PropTypes;

ApplicationForm.propTypes = {
  gender: string,
  lastname: string,
  firstname: string,
  email: string,
  phone: string,
  age: number,
  zip: number,
  termsAccepted: string,
  onSubmit: func.isRequired,
};

ApplicationForm.defaultProps = {
  gender: undefined,
  lastname: undefined,
  firstname: undefined,
  email: undefined,
  phone: undefined,
  age: undefined,
  zip: undefined,
  termsAccepted: undefined,
};

export default ApplicationForm;

