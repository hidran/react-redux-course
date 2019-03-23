import React, {Component} from 'react';


export default class SearchBar extends Component {
    constructor(props){
        super(props);
       
        this.state = {
            term: 'la dolce vita'
        }
    }
    searchChange = (evt) =>{

        this.setState({term: evt.target.value});

     
    }
    searchClicked = (evt) => {
        evt.preventDefault();
         this.props.onSearchMovie(this.state.term);
    }
    render(){

    return  (
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2"
        
         type="search" value={this.state.term}
          placeholder="Search" aria-label="Search"/>

        <button onClick = { this.searchClicked } className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

      </form>
    )
}
}