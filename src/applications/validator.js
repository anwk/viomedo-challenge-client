import { isNumeric, isInt, isEmail, isLength } from 'validator';

export const errorMessages = {
  gender: 'Please select gender',
  firstname: 'First name should contain at least 3 letters',
  lastname: 'Last name should contain at least 3 letters',
  email: 'Please input correct email address',
  phone: 'Please input correct phone number',
  age: 'Accepted age is between 1-99',
  zip: 'Please input correct zip code',
  termsAccepted: 'This filed should contain at least 10 symbols',
};

const isGender = (v) => ['male', 'female'].indexOf(v) > -1;
export const isPhone = v =>
  /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/.test(v);

// Util methods
const isDefined = v => v !== undefined;
const isEmpty = errors => Object.keys(errors).length === 0;
const isFilled = fields => {
  for (let prop in fields) {
    if (fields[prop] === null || fields[prop] === undefined)
      return false
  }
  return true
};

// application => { isValid, errMessages }
export default (app) => {
  const errors = {};

  if(isDefined(app.gender) && !isGender(app.gender)) {
    errors.gender = errorMessages.gender;
  }

  if(isDefined(app.firstname) && !isLength(app.firstname, { min: 3 })) {
    errors.firstname = errorMessages.firstname;
  }

  if(isDefined(app.lastname) && !isLength(app.lastname, { min: 3 })) {
    errors.lastname = errorMessages.lastname;
  }

  if(isDefined(app.email) && !isEmail(app.email)) {
    errors.email = errorMessages.email;
  }

  if(isDefined(app.phone) && !isPhone(app.phone)) {
    errors.phone = errorMessages.phone;
  }

  if(isDefined(app.age) && !isInt(app.age, { min: 1, max: 99 })) {
    errors.age = errorMessages.age;
  }
  if(isDefined(app.zip) && (!isLength(app.zip, { min: 3, max: 5 }) || !isNumeric(app.zip))) {
    errors.zip = errorMessages.zip;
  }

  if(isDefined(app.termsAccepted) && !isLength(app.termsAccepted, { min: 10 })) {
    errors.termsAccepted = errorMessages.termsAccepted;
  }

  return {
    errors,
    isValid: isEmpty(errors) && isFilled(app),
  };
};