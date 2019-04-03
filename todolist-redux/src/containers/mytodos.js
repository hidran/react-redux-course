import React from 'react'
import AddNewTodo from './addnew';
import MyTodoList from './mytodolist';
import TodoFooter from './todofootercontainer';
import Errorboundary from '../components/errorboundary';
export default function  myTodos(){

    return(
<div className="container">
       <AddNewTodo/>
       <Errorboundary>
        <MyTodoList/>
        </Errorboundary>
        <TodoFooter/>
</div>

    )
}
