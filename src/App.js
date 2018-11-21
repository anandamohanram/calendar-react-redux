import React, { Component } from 'react';
import './App.css';
import Year from './components/Year/Year';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Year year='2018' />
      </div>
    );
  }
}

export default App;
