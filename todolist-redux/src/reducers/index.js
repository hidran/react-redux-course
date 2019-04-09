import todos from './todos';
import setFilter from './setfilter';
import error from './error';
import lists from './lists';

import { combineReducers } from 'redux';
/*
export default combineReducers({
  todos : todosReducer,
  setFilter : setFilterReducer,
  error : errorReducer,
  lists : lists
});
*/
export default combineReducers({
  todos ,
  setFilter ,
  error ,
  lists
});

