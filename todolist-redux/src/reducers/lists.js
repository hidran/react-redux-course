import {
  LISTS,
  ADD_LIST, 
  REMOVE_LIST
 

 } from './../actions/actiontypes'; 

 export default function listsReducer(state =[], action){

  switch(action.type){
    case `${LISTS}_FULFILLED`:
      return action.payload.data;

      case   `${ADD_LIST}_FULFILLED`:
      return [
           action.payload.data,
          ...state
      ]
      case    `${REMOVE_LIST}_FULFILLED`:
      return state.filter( list => list.id !== action.payload.config.id);

      default:
      return state;
  }
   
 }