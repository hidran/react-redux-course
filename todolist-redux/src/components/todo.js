
import React from 'react';
export default function todo({todoItem, onClick, id}){
//dispatch(removeTodo(i))
return (
<li  className={todoItem.completed? 'completed':''} onClick ={() => onClick(id,!todoItem.completed)}>
<span className={todoItem.completed? 'completed':'uncomplete'}></span>
{todoItem.todo} 
</li>
) ;
}