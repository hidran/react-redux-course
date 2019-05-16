import React from 'react'
import AddNewTodo from './addnew';
import MyTodoList from './mytodolist';
import TodoFooter from './todofootercontainer';
import Errorboundary from '../components/errorboundary';
 const parseFilter =(search) =>{
      if(search.indexOf('filter')=== -1){
          return '';

      }
      const tokens = search.split('=');
        return tokens[1];
 }
export default function  myTodos({match,location}){
    const filterValue = parseFilter(location.search);
   const listid = match.params.list || 1;
   const listName = location.state ? location.state.listName : null;
   const listTitle = listName ? <h3>{listName}</h3>: null;
    return(
<div className="container">
       {listTitle}
       <AddNewTodo list={listid}/>
       <Errorboundary>
        <MyTodoList filter={filterValue} list={listid} />
        </Errorboundary>
        <TodoFooter  filter={filterValue} />
</div>

    )
}
