import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from  './Clock'
const happy =  <h2>I am happy</h2>;
 function getDate(date) {
    return date.toLocaleDateString()  + ' ' + date.toLocaleTimeString();
 }
class App extends Component {

  render() {
    return (
      <React.Fragment>
      <div className="App">
       <h1> My firsr React App</h1>
      </div>
      { happy }
      { 4+4}
      <Clock country="Italy" timezone="0" />
      <Clock country="Russia"  timezone="2" />
      <Clock country="Cuba" timezone="-6" ></Clock>
      </React.Fragment>
    );
  }
}

export default App;
