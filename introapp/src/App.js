import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <h2> Today is  { new Date().toLocaleDateString()  + ' ' +new Date().toLocaleTimeString() }</h2>
      <h2> { getDate(new Date())}</h2>
      <h2> { getDate(new Date())}</h2>
      </React.Fragment>
    );
  }
}

export default App;
