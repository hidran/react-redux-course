import React, {Fragment} from 'react';


export default function addTodoComponent({addTodo}){

     let todoInput;
    return(
        <div className="addtodo">
            <input ref ={ node =>  {todoInput = node} }  />
            
            <button onClick = {
                () => {
                    addTodo( todoInput.value )
                    todoInput.value = '';
                }
                }
                >Add</button>
        </div>
)
}

