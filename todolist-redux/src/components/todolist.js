import React from 'react';
import Todo from './todo'
import PropTypes from 'prop-types';


export default function todoList(props){
    
 if(props.error.hasError){
     throw new Error(props.error.errorMessage);
 }
return (
<ul>
{
    props.todos.map( (todo) => 
 <Todo todoItem ={todo} id ={todo.id} key={todo.id} 
 {...props}
 />)
}
</ul>

);
}
todoList.propTypes = {
    props:  PropTypes.shape({
        hasError: PropTypes.bool,
        errorMessage:PropTypes.string ,
        todos: PropTypes.PropTypes.array
    })
  }