import React, {Fragment} from 'react'
export default function addTodo({addTodo}){
     let todoInput;
    return(
        <Fragment>
            <input ref ={ (node) => { todoInput = node }}  />
            
            <button onClick = {addTodo}>Add</button>
            </Fragment>
)
}

