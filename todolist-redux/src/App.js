import React, { Component } from 'react';

import { createStore } from 'redux'
import './App.css';
import TodoList   from './components/todolist'
import Header from './components/header'
import AddTodo from './components/addtodo'
import MyTodoList from './containers/mytodolist';



class App extends Component {
  constructor(){
    super();
   
   
  }
  
 
  render() {
    return (
      <div className="App">
       <Header/>
       <AddTodo/>
        <MyTodoList/>
      </div>
    );
  }
}

export default App;
