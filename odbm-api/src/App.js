import React, { Component } from 'react';

import './App.css';
import VideoList from './components/movie_list';
import NavBar from './components/navbar'
const APIKEY = '4cb9def9';
const APIURL = 'http://www.omdbapi.com';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
       movies :  [],
       totalCount: 0
    }
    
  }
  fetchMovies =  (search = '') => {

    return fetch(APIURL + '?apikey=' + APIKEY +'&s='+ search).then( res => res.json());
      
  };
  searchMovies = (term = '') =>{
     if(term.length< 3){
       return
     }
     this.fetchMovies(term).then(res => {
       console.log(this)
      this.setState({
        movies : res.Search,
        totalCount : res.totalResults
      })
    })

  };
  componentDidMount(){
    this.searchMovies('back to the future')
  }
  render() {
    return (
      <React.Fragment>
      <NavBar onSearchTerm = {this.searchMovies} />
      <div className="container">
       <h1>My favorite movies </h1>
       <VideoList movies={this.state.movies} />
      </div>
      </React.Fragment>
    );
  }
}

export default App;
