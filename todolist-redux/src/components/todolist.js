import React from 'react';
import Todo from './todo'
export default function todoList(props){

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
