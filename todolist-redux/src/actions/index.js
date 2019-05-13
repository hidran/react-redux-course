import { APIURL, APIFILTERURL } from '../config/config';
import axios from 'axios';
import {
    TODOS,
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    SET_FILTER

} from './actiontypes';

export const getTodos = (list = 0) => {
    return {
        type: TODOS,
        payload: axios.get(APIURL + '?list_id=' + list, { list })
    }
}

export const addTodo = (todo, list = 0) => {
    //ADD_TODO_FULFILLED
    return {
        type: ADD_TODO,
        payload: axios.post(APIURL, {
            todo: todo,
            completed: false,
            list: +list
        })

    };
};

export const removeTodo = (i) => {

    return {
        type: REMOVE_TODO,
        payload: axios.delete(APIURL + '/' + i, { id: i })

    };
};

export const toggleTodo = (i, value) => {

    return {
        type: TOGGLE_TODO,
        payload: axios.patch(APIURL + '/' + i, {
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