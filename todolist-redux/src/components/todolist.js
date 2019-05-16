import React, {Component} from 'react';
import Todo from './todo'
import PropTypes from 'prop-types';


export default class TodoList extends Component {
    constructor(props){
        super(props);
         if(props.error.hasError){
            throw new Error(props.error.errorMessage);
        }
    }
    componentDidMount(){
        this.props.getTodos(this.props.list, this.props.filter);
    }
    componentDidUpdate(prevProps){
       if(this.props.list !== prevProps.list  || this.props.filter !== prevProps.filter){
        this.props.getTodos(this.props.list, this.props.filter); 
       }
    }
  
render() {
    return (
    <ul className="todos">
    {
        this.props.todos.map( (todo) => 
    <Todo todoItem ={todo} id ={todo.id} key={todo.id} 
    {...this.props}
    />)
    }
    </ul>

    )
}
}
TodoList.propTypes = {
    props:  PropTypes.shape({
        hasError: PropTypes.bool,
        errorMessage:PropTypes.string ,
        todos: PropTypes.PropTypes.array
    })
  }