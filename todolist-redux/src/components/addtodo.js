import React from 'react';


export default function addTodoComponent({addTodo, list}){

     let todoInput;
    return(
        <div className="addtodo">
            <input 
             onKeyUp = {
                 (evt) =>{
                    if( +evt.keyCode === 13){
                        addTodo( todoInput.value ,list );
                        todoInput.value = '';
                    }
                 }
             }
            ref ={ node =>  {todoInput = node} }  />
            
            <button onClick = {
                () => {
                    addTodo( todoInput.value ,list );
                    todoInput.value = '';
                }
                }
                >Add</button>
        </div>
)
}
