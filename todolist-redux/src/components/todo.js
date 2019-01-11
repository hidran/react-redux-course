
import React from 'react';
export default function todo({todo, onClick, id}){
//dispatch(removeTodo(i))
return (
<li onClick ={() => onClick(id)}>
<span></span>
{todo} 
</li>
) ;
}