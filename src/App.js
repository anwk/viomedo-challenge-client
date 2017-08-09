import React, { Component } from 'react';
import './App.css';
import { InfoMessage } from './components';
import ApplicationForm from './applications/Form';
import sendApplication from './api';


const successMessage = id =>
  `Application has been successfully 
          accepted for consideration. Your application ID is ${id}`;

const errorMessage = () =>
  `Oops... Looks like you have submitted an application already`;

class App extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      message: null,
    }
  }

  submitForm(fields) {
    sendApplication(fields).then(({ errors, id }) => {
      this.setState({
        message: !errors ? successMessage(id) : errorMessage(),
      });
    })
  }

  render() {
    const { message } = this.state;
    return (
      <div className="app">
        <header className="header">
        </header>
        <div className="content">
          {
              message ?
              <InfoMessage text={message}/> :
              <ApplicationForm onSubmit={this.submitForm}/>
          }

        </div>
        <footer className="footer">
        </footer>
      </div>
    );
  }
}

export default App;
