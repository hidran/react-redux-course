import React, { Component } from 'react'

export default class Errorboundary extends Component {

 constructor(props){
    super(props);
    this.state = {
        hasError : false,
        errorMessage: ''
    }
 }
    static getDerivedStateFromError(error) {
      
       return  {
            hasError : true,
            errorMessage: error.message
        }
    }
    componentDidCatch(error, info) {
        console.error(error, info);
    }
    
    
  render() {
     if(this.state.hasError){
         return <h1>An error ocurred: {this.state.errorMessage}</h1>
     }
     return this.props.children;
  }
}


