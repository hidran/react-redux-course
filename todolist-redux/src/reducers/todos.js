 import {
     TODOS,
     ADD_TODO,
     REMOVE_TODO,
     TOGGLE_TODO

 } from './../actions/actiontypes';

 export default function todosReducer(state = [], action) {
     console.log('state for todos', state)
     switch (action.type) {
         case `${ADD_TODO}_FULFILLED`:
             return [
                 action.payload.data.result,
                 ...state
             ];

         case `${REMOVE_TODO}_FULFILLED`:
             {

                 const success = action.payload.data.success;

                 return state.filter(ele => success && ele.id !== action.payload.config.id);
             }
         case `${TOGGLE_TODO}_FULFILLED`:
             {
                 const result = action.payload.data.result;

                 return state.map((todo) => {
                     if (todo.id !== result.id) {
                         return todo
                     }
                     return result;
                 });

             }

         case `${TODOS}_FULFILLED`:
             {
                 const list = +action.payload.config.list;
                 console.log(action.payload.config);
                 const todos = action.payload.data.result.data;
                 console.log(todos);
                 const success = action.payload.data.success;
                 // alert(list)
                 return todos;
             }


         default:
             return state;
     }


 }