import React from 'react';


export default function addTodoComponent({addTodo}){

     let todoInput;
    return(
        <div className="addtodo">
            <input 
             onKeyUp = {
                 (evt) =>{
                    if( +evt.keyCode === 13){
                        addTodo( todoInput.value );
                        todoInput.value = '';
                    }
                 }
             }
            ref ={ node =>  {todoInput = node} }  />
            
            <button onClick = {
                () => {
                    addTodo( todoInput.value );
                    todoInput.value = '';
                }
                }
                >Add</button>
        </div>
)
}

