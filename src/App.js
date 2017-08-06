import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Select from './components/Select';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input/>
        <Select/>
      </div>
    );
  }
}

export default App;
