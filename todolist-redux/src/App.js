import React, { Component } from 'react';
import './App.css';
import TodoList   from './components/todolist'
import Header from './components/header'
import AddNewTodo from './containers/addnew'
import MyTodoList from './containers/mytodolist';



class App extends Component {
  constructor(){
    super();
   
   
  }
  
  render() {
    return (
      <div className="App">
       <Header/>
       <AddNewTodo/>
        <MyTodoList/>
      </div>
    );
  }
}

export default App;
