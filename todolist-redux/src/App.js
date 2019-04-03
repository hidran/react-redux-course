import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import {connect } from 'react-redux';
import {getTodos} from './actions';
import Mytodos from './containers/mytodos';
import Lists from './components/lists';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
 componentDidMount() {
     this.props.getTodos();
 }

    render() {
    return (
      <div className="App">
       <Header/>
        <Route path ="(/|/todos)" component={Mytodos} />
        
        <Route path="/lists"  component={Lists}   />
        <Route path="/signup"  render ={() => <div>SIGNUP</div>}   />
        <Route path="/login"   render ={() => <div title="LOGIN">LOGIN</div>}   />
      </div>
    );
  }
}

export default connect(null, {getTodos})(App);
