 
import {
    TODOS,
    ADD_TODO, 
    REMOVE_TODO,
    TOGGLE_TODO
  
   } from './../actions/actiontypes'; 
  
   export default  function todosReducer(state = [], action) {
       console.log('state for todos', state)
    switch(action.type){
        case `${ADD_TODO}_FULFILLED` :
      return [
            action.payload.data, 
           ...state
         ];
      
      case `${REMOVE_TODO}_FULFILLED` :
     
      return state.filter( ele => ele.id !== action.payload.config.id);
      
    case `${TOGGLE_TODO}_FULFILLED` :
    return state.map((todo) =>{
          if(todo.id !== action.payload.data.id){
            return todo
          }
          return action.payload.data
       });
       
          case `${TODOS}_FULFILLED`:
            return  action.payload.data;
   
      default: 
      return  state;
    }
  
   
  }
