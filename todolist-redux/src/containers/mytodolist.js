import { connect } from 'react-redux';
import TodoList from '../components/todolist';
import { removeTodo, toggleTodo, getTodos } from '../actions/index'
const filterMyTodos = (todos = [], filter = 'ALL') => {
    switch (filter) {
        case 'TODO':
            return todos.filter(todo => !todo.completed);
        case 'COMPLETED':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}
const mapStateToProps = (state) => {
    return {
        ...state,
        todos: filterMyTodos(state.todos, state.setFilter)
    }
}
const myConnect = connect(mapStateToProps, { removeTodo, toggleTodo, getTodos });

const MyTodoList = myConnect(TodoList);

export default MyTodoList;