import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import {connect } from 'react-redux';
import {getTodos} from './actions';
import {getLists} from './actions/lists';
import Mytodos from './containers/mytodos';
import Lists from './containers/mytodolists';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
 componentDidMount() {
     //this.props.getTodos();
     this.props.getLists();
 }

    render() {
    return (
      <div className="App">
       <Header/>
       <Switch>
        <Route path ="(/|/todos)" component={Mytodos} />
        <Route path ="/lists/:list([0-9]+)/todos" component={Mytodos} />
        <Route path="/lists"  component={Lists}   />
        <Route path="/signup"  render ={() => <div>SIGNUP</div>}   />
        <Route path="/login"   render ={() => <div title="LOGIN">LOGIN</div>}   />
        </Switch>
      </div>
    );
  }
}

export default connect(null, {getTodos, getLists})(App);
