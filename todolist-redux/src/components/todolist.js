import React from 'react';
import Todo from './todo'
export default function todoList(props){
    
 if(props.hasError){
     throw new Error(props.errorMessage);
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
