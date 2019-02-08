 
 
 export default  function storeReducer(state = {}, action) {
    switch(action.type){
      case 'ADD_TODO' :
      return {
        ...state,
        activeFilter: 'TODO',
         todos : [
           {
             id: action.payload.id || state.todos.length,
             todo: action.payload.text,
             completed : action.payload.completed
           }, 
           ...state.todos
         ]
      }
      case 'REMOVE_TODO' :
      return {
        ...state,
       todos : [
         ...state.todos.slice(0, action.id), 
         ...state.todos.slice( action.id + 1)
       ]
    }
    case 'TOGGLE_TODO' :
    return {
      ...state,
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
   case 'SET_FILTER':{
     return {
         ...state,
         activeFilter : action.activeFilter
     }
      
   }
      default: 
      return  {...state};
 
    }
   
  }

  
 