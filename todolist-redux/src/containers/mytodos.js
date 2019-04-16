import React from 'react'
import AddNewTodo from './addnew';
import MyTodoList from './mytodolist';
import TodoFooter from './todofootercontainer';
import Errorboundary from '../components/errorboundary';

export default function  myTodos({match,location}){
   const listid = match.params.list || 0;
   const listName = location.state ? location.state.listName : null;
   const listTitle = listName ? <h3>{listName}</h3>: null;
    return(
<div className="container">
       {listTitle}
       <AddNewTodo list={listid}/>
       <Errorboundary>
        <MyTodoList list={listid} />
        </Errorboundary>
        <TodoFooter/>
</div>

    )
}
