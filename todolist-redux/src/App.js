import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import AddNewTodo from './containers/addnew'
import MyTodoList from './containers/mytodolist';
 import TodoFooter from './containers/todofootercontainer'
import {connect } from 'react-redux';
import {getTodos} from "./actions";

class App extends Component {
 componentDidMount() {
     this.props.getTodos();
 }

    render() {
    return (
      <div className="App">
       <Header/>
       <div className="container">
       <AddNewTodo/>
        <MyTodoList/>
        <TodoFooter/>
        </div>
      </div>
    );
  }
}

export default connect(null, {getTodos})(App);
