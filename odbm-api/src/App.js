import React, { Component } from 'react';

import './App.css';
import VideoList from './components/movie_list';
import NavBar from './components/navbar'
const APIKEY = '4cb9def9';
const APIURL = 'http://www.omdbapi.com';

function fetchMovies(search = '=back to the future') {

  return fetch(APIURL + '?apikey=' + APIKEY +'&s='+ search).then( res => res.json());
    
};
class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
       movies :  [],
       totalCount: 0
    }
    
  }
  componentDidMount(){
    fetchMovies().then(res => {
      this.setState({
        movies : res.Search,
        totalCount : res.totalResults
      })
    })
  }
  render() {
    return (
      <React.Fragment>
      <NavBar />
      <div className="container">
       <h1>My favorite movies </h1>
       <VideoList movies={this.state.movies} />
      </div>
      </React.Fragment>
    );
  }
}

export default App;
