
import React from 'react';
export default function todo({todo, onClick, id}){
//dispatch(removeTodo(i))
return (
<li>{todo} <button onClick ={() => onClick(id)}>-</button></li>
) ;
}