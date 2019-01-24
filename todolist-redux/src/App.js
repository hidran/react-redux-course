import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import AddNewTodo from './containers/addnew'
import MyTodoList from './containers/mytodolist';
import FooterLink from './components/filterlink';


class App extends Component {
  
  render() {
    return (
      <div className="App">
       <Header/>
       <div className="container">
       <AddNewTodo/>
        <MyTodoList/>
        <div className="footer">
          <FooterLink actionType="ALL">
            ALL
          </FooterLink>
          {' '}
          <FooterLink actionType="TODO">
            TO DO
          </FooterLink>
          {' '}
          <FooterLink actionType="COMPLETED">
            COMPLETED
          </FooterLink>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
