import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import {connect } from 'react-redux';
import {getTodos} from './actions';
import Mytodos from './containers/mytodos';
import Lists from './components/lists';
import {Route} from 'react-router-dom';

class App extends Component {
 componentDidMount() {
     this.props.getTodos();
 }

    render() {
    return (
      <div className="App">
       <Header/>
        <Route path ="(/|/todos)" component={Mytodos} />
        
        <Route path="/lists"  component={Lists}  exact />
      </div>
    );
  }
}

export default connect(null, {getTodos})(App);
