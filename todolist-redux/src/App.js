import React, { Component } from 'react';

import { createStore } from 'redux'
import './App.css';


let todos = [
  'Fare la spesa',
'Fare i compiti',
'chiamare la mamma'
];

 function storeReducer(state = {}, action) {
  return  {...state};
 }


class App extends Component {
  constructor(){
    super();
    this.state = {
      todos : [
        
      ]
    }
  }
  componentDidMount() {

    const store = createStore(storeReducer, {todos: [...todos]} );
    console.log(store.getState())
    this.setState({todos:[...store.getState().todos] })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
   
          <h1>
           TODO LIST
          </h1>
         
        </header>
        
        <ul>
         {
           this.state.todos.map( (todo,i) => <li key={i}>{todo}</li>)
         }
        </ul>
      </div>
    );
  }
}

export default App;
