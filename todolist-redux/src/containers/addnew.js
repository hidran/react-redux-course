import {connect } from 'react-redux';

import addTodoComponent from '../components/addtodo';
import { addTodo } from '../actions';
/*
const mapDispatchToProps = (dispatch) => {
    return {
        addnew: (todo) => {
            dispatch(addTodo(todo))
        }
    }
}


export default connect(null, mapDispatchToProps)(addTodoComponent);
*/
const methods = {

     addTodo
}
export default connect(null, {addTodo} )(addTodoComponent);
