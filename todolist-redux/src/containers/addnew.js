import {connect } from 'react-redux';

import addTodoComponent from '../components/addtodo';
import { addTodo } from '../actions/index';


export default connect(null, {addTodo} )(addTodoComponent);
