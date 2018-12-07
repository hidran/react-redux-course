import {connect } from 'react-redux';
import TodoList from '../components/todolist';

  const mapStateToProps =  (state) => {
    return {
        todos: [...state.todos]
    }
}
const myConnect = connect(mapStateToProps);

const MyTodoList = myConnect(TodoList);

export default MyTodoList;
