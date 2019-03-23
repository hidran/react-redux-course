 
 
 export default  function storeReducer(state = {}, action) {
    switch(action.type){
        
      case 'ADD_TODO_FULFILLED' :
      return {
        ...state,
        activeFilter: 'TODO',
         todos : [
             action.payload.data, 
           ...state.todos
         ]
      }
      case 'REMOVE_TODO_FULFILLED' :
     
      return {
        ...state,
       todos : state.todos.filter( ele => ele.id != action.payload.config.id)
    }
    case 'TOGGLE_TODO_FULFILLED' :
    return {
      ...state,
     todos : 
       state.todos.map((todo) =>{
          if(todo.id !== action.payload.data.id){
            return todo
          }
          return action.payload.data
       })
       
     
  }
   case 'SET_FILTER_FULFILLED':{
     return {
         ...state,
         activeFilter : action.payload.data.filter
     }
      
   }
        case 'TODOS_FULFILLED':
            return {
                ...state,
                todos: action.payload.data
            }
      default: 
      return  {...state};
 
    }
   
  }

  
 