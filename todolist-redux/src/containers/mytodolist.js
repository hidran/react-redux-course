import {connect } from 'react-redux';
import TodoList from '../components/todolist';
import {removeTodo, toggleTodo} from '../actions/index'
 const filterMyTodos = (todos =[], filter= 'ALL') =>{
   switch(filter){
       case 'TODO':
        return todos.filter( todo => !todo.completed );
        case 'COMPLETED':
        return todos.filter( todo => todo.completed );
        default:
        return todos;
   }
 }
  const mapStateToProps =  (state) => {
    return {
        todos: filterMyTodos(state.todos, state.activeFilter)
    }
}
const myConnect = connect(mapStateToProps, {removeTodo, toggleTodo});

const MyTodoList = myConnect(TodoList);

export default MyTodoList;
