export const addTodo = (todo) => {
    
    return {
         type: 'ADD_TODO',
         todo

     };
 }
 export const removeTodo = (i) => {
  
   return {
        type: 'REMOVE_TODO',
        id : i

    };
}