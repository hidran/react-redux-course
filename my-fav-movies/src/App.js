import React, { Component } from 'react';

import './App.css';
const APIKEY = '4cb9def9';
const OMDBURL = ' http://www.omdbapi.com';

class App extends Component {
   
   constructor(){
     super();
     this.state = {
       movies : [],
       term : 'cuba',
       totalResults : 0,
       currentPage:1
     }

   }
   searchMovies= () => {

    if(!this.state.term){
      return;
    }
   
     return  fetch(OMDBURL + '?apikey=' + APIKEY + '&s=' + this.state.term +'&page=' +this.state.currentPage)
     .then(res => res.json()).then(
      result => {
      
        if(result.Error){
         
       this.setState({ currentPage:1, totalResults: 0, error: result.Error, movies:[]})
        } else {

          this.setState( (state) => {
           return  (
              {
              
                totalResults:result.totalResults, 
              error:'',
           movies: state.movies.concat(result.Search)
          })
        });
           
        }
      
       
        
      }

    );
 }
    componentDidMount() {
      this.searchMovies()
    }
    handleChange = (evt) => {
     const search =  evt.target.value;
     if (search.length<3 ){
       return;
     }
      this.setState({term:search});
     // this.searchMovies(search)

   }
    handleClick= (evt) => {

evt.preventDefault();
 this.setState({movies:[]})
        this.searchMovies()

    }
   loadMore = (evt) => {
     this.setState({currentPage: this.state.currentPage+1});
       this.searchMovies();
     }

  
    render() {
     return (
      <div className="App">
          <nav className="navbar navbar-dark bg-dark fixed-top  flex-row-reverse">
              <form className="form-inline">
                  <input className="form-control mr-sm-2"
                         onChange={this.handleChange}
                         type="search" placeholder="Search" aria-label="Search"/>
                      <button onClick={this.handleClick} className="btn btn-outline-success my-2 my-sm-0"
                              type="submit">Search
                      </button>
              </form>
          </nav>
          <div className='row'>
       {

           this.state.movies.length> 0 &&   this.state.movies.map((m,i) => {
             return (
               <div className="card col-md-2" key={i}>
                   <img className="card-img-top" src={m.Poster} alt="Card image cap"/>
                       <div className="card-body">
                           <h5 className="card-title">{m.Title}</h5>


                       </div>
               </div>)

       })}
           </div>

          <button disabled ={this.state.movies.length>0 && this.state.currentPage >= this.state.numPages} onClick={this.loadMore}>Load more</button>
      </div>
      )
   
  }
}

export default App;
