import React from 'react';
import MovieItem from './movie_item'

export default function movieList({movies}) {

    return (
    <div className="row">
    {
        movies.map(movie => <MovieItem  key={movie.imdbID} movie={movie}/>)
    }
    </div>)
}