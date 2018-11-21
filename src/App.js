import React, { Component } from 'react';
import './App.css';
import Month from './Month/Month';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Month year='2018' month='11'/>
      </div>
    );
  }
}

export default App;
