import {APIURL, APIFILTERURL} from '../config/config';
import axios from 'axios';
export  const getTodos = () => {
    return {
        type:'TODOS',
        payload: axios.get(APIURL)
    }
}

export const addTodo = (todo) => {
   //ADD_TODO_FULFILLED
    return  {
         type: 'ADD_TODO',
        payload: axios.post(APIURL, 
            {
            todo:todo,
            completed : false
        })

     };
 };

 export const  removeTodo = (i) => {
   
   return {
        type: 'REMOVE_TODO',
        payload: axios.delete(APIURL + '/' + i, {id: i})

    };
};

export const  toggleTodo = (i, value) => {
   
    return {
         type: 'TOGGLE_TODO',
        payload: axios.patch(APIURL + '/' + i, {
            completed : value
        })
         
 
     };
 };

 export const filterTodo = (filter = 'ALL') => {

    return {
        type : 'SET_FILTER',
         payload : axios.post(APIFILTERURL, {
             filter
         })
        
    }

 }
 