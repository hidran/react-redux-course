import {connect } from 'react-redux';
import TodoList from '../components/todolist';
import {removeTodo} from '../actions/index'

  const mapStateToProps =  (state) => {
    return {
        todos: [...state.todos]
    }
}
const myConnect = connect(mapStateToProps, {removeTodo});

const MyTodoList = myConnect(TodoList);

export default MyTodoList;
