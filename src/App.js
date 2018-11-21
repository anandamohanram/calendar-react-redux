import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import Year from './components/Year/Year';
import Header from './components/Header/Header';


class App extends Component {

  state={
    year:2018,
    currentYear:2018
  }

  prevYear = () => {
    this.setState((prevState, props) => ({
      year: prevState.year - 1
    }));
  }

  nextYear = () => {
    this.setState((prevState, props) => ({
      year: prevState.year + 1
    }));
  }

  componentWillMount = () => {
    this.today();
  }

  today = () => {
    let currentYear = moment().format('YYYY');
    this.setState({year:Number(currentYear), currentYear:Number(currentYear)});  
  }

  render() {
    

    return (
      <div className="App">
        <Header year={this.state.year} yearNow={this.state.currentYear} prev={this.prevYear} next={this.nextYear} today={this.today}></Header>
        <Year year={this.state.year}></Year>
      </div>
    );
  }
}

export default App;
