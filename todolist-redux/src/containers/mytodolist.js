import {connect } from 'react-redux';
import TodoList from '../components/todolist';

 const pippo = (state) => {
    return {
        todos: [...state.todos]
    }
}
const myConnect = connect(pippo);

const MyTodoList = myConnect(TodoList);

export default MyTodoList;
