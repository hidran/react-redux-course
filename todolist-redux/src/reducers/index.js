 
 
 export default  function storeReducer(state = {}, action) {
    switch(action.type){
      case 'ADD_TODO' :
      return {
         todos : [
           {
             id: state.todos.length,
             todo: action.payload.text,
             completed : action.payload.completed
           }, 
           ...state.todos
         ]
      }
      case 'REMOVE_TODO' :
      return {
       todos : [
         ...state.todos.slice(0, action.id), 
         ...state.todos.slice( action.id + 1)
       ]
    }
    case 'TOGGLE_TODO' :
    return {
     todos : 
       state.todos.map((todo) =>{
          if(todo.id !== action.id){
            return todo
          }
          return {
             ...todo,
             completed : !todo.completed
          }
       })
       
     
  }
      default: 
      return  {...state};
 
    }
   
  }

  
 