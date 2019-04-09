import {connect } from 'react-redux';

import addTodoComponent from '../components/addtodo';
import { addList } from '../actions/lists';


export default connect(null, {addTodo : addList} )(addTodoComponent);
