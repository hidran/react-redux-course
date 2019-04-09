import {LISTSURL} from '../config/config';
import axios from 'axios';
import {
     LISTS,
     ADD_LIST, 
     REMOVE_LIST

    } from './actiontypes'; 

export  const getLists = () => {
    return {
        type: LISTS,
        payload: axios.get(LISTSURL)
    }
}

export const addList = (name) => {
   //ADD_TODO_FULFILLED
    return  {
         type: ADD_LIST,
        payload: axios.post(LISTSURL, 
            {
            name
        })

     };
 };

 export const  removeList = (i) => {
   
   return {
        type: REMOVE_LIST,
        payload: axios.delete(LISTSURL + '/' + i, {id: i})

    };
};