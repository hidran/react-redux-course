import React from 'react';
import Todo from './todo'
export default function todoList({todos}){

return (
<ul>
{
 todos.map( (todo,i) => <Todo key={i} todo ={todo}/>)
}
</ul>

);
}
