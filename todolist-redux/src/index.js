import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {applyMiddleware,  createStore } from 'redux';
import storeReducer from './reducers/index';
import {Provider} from 'react-redux';
let storeTodos = {
  activeFilter: 'ALL',
    todos:[

    { 
      id:0, 
      todo: 'Fare la spesa',
      completed: false
      },
      {
        id:1,
        todo: 'Fare i compiti', 
        completed: true
        },
    {
      id:2, 
      todo: 'chiamare la mamma', 
      completed: false
    }

  ]
};
  
  if(localStorage.getItem('mytodolist')){
    const currState = JSON.parse(localStorage.getItem('mytodolist'));
     if(currState){
      storeTodos = currState;
     }
  }
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  function logger({getState, dispatch}) {
    console.log('MIDDLEWARE CHIAMATO');
    return function (next) {
            console.log('PRIMA DELLA CHIAMATA', getState());
       return function (action) {
           console.log('AZIONE', action)
         console.log('PRIMA DELL\'AZIONE ', getState());
          let result =  next(action);
         console.log('DOPO DELLA AZIONE', getState());
       //  console.log('RESULT', result);
         return result;
       }
    }
    
  }
   const logger2 = store  => next => action  => {
    //store.dispatch({type:'LOADING'})
     let result =  next(action);
     console.log('RESULT2', result);
     return result;
   }
   const store = createStore(storeReducer, { ...storeTodos },
       applyMiddleware(logger, logger2)
   
   );

    store.subscribe(()=>{
      const currState = JSON.stringify(store.getState());
      localStorage.setItem('mytodolist', currState);
    }
      );
ReactDOM.render(
<Provider store ={store}>
  <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
