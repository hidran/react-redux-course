import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import {connect } from 'react-redux';
import {getTodos} from './actions';
import {getLists} from './actions/lists';
import Mytodos from './containers/mytodos';
import Lists from './containers/mytodolists';
import {Route, Switch} from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Logout from './components/logout';
import PrivateRoute from './containers/privateroute';
import {UserDataProvider} from './containers/logincontext';


class App extends Component {
 componentDidMount() {
     //this.props.getTodos();
     this.props.getLists();
 }

    render() {
    return (
      <UserDataProvider>
      <div className="App">
       <Header/>
       <Switch>
        <PrivateRoute path ="(/|/todos)" component={Mytodos} />
        <PrivateRoute path ="/lists/:list([0-9]+)/todos" component={Mytodos} />
        <PrivateRoute path="/lists"  component={Lists}   />
       
        <Route path="/signup"  component={Signup}   />
        <Route path="/login"   component ={Login}   />
        <Route path="/logout"   component ={Logout}   />
       
        </Switch>
      </div>
      </UserDataProvider>
    );
  }
}

export default connect(null, {getTodos, getLists})(App);
