export const addTodo = (todo) => {
   
    return  {
         type: 'ADD_TODO',
        payload: {
            text:todo,
            completed : false
        }

     };
 };

 export const  removeTodo = (i) => {
   
   return {
        type: 'REMOVE_TODO',
        id : i

    };
};

export const  toggleTodo = (i) => {
   
    return {
         type: 'TOGGLE_TODO',
         id : i
 
     };
 };