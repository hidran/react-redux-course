import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import AddNewTodo from './containers/addnew'
import MyTodoList from './containers/mytodolist';
 import TodoFooter from './components/todofooter'


class App extends Component {
  
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

export default App;
