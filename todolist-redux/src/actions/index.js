import { APIURL, APIFILTERURL } from '../config/config';
import axios from 'axios';
import {
    TODOS,
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    SET_FILTER

} from './actiontypes';

export const getTodos = (list = 1, filter = 'ALL') => {
    return {
        type: TODOS,
        payload: axios.get(APIURL , 
        {
            params:{
            list_id: list,
            filter
        }
    }
        )
    }
}

export const addTodo = (todo, list = 0) => {
    //ADD_TODO_FULFILLED
    return {
        type: ADD_TODO,
        payload: axios.post(APIURL, {
            todo: todo,
            completed: false,
            list_id: +list
        })

    };
};

export const removeTodo = (i) => {

    return {
        type: REMOVE_TODO,
        payload: axios.delete(APIURL + '/' + i, { id: i })

    };
};

export const toggleTodo = (todo, value) => {

    return {
        type: TOGGLE_TODO,
        payload: axios.patch(APIURL + '/' + todo.id, {
            ...todo,
            completed: value
        })


    };
};

export const filterTodo = (filter = 'ALL') => {

    return {
        type: SET_FILTER,
        payload: axios.post(APIFILTERURL, {
            filter
        })

    }

}